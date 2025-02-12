import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Info, X, Calendar, FileText } from 'lucide-react';
import type { TrendData } from '../types';

interface TrendCardProps {
  data: TrendData;
}

export const TrendCard: React.FC<TrendCardProps> = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const isPositive = data.change > 0;
  
  // Calculate min and max values for the chart
  const maxValue = Math.max(...data.historicalData);
  const minValue = Math.min(...data.historicalData);
  const valueRange = maxValue - minValue;
  
  // Generate quarters for the last 5 data points
  const generateQuarters = () => {
    const quarters = [];
    const currentQuarter = parseInt(data.lastUpdated.split('-Q')[1]);
    const currentYear = parseInt(data.lastUpdated.split('-Q')[0]);
    
    for (let i = 4; i >= 0; i--) {
      let quarter = currentQuarter - i;
      let year = currentYear;
      
      if (quarter <= 0) {
        quarter += 4;
        year -= 1;
      }
      
      quarters.push(`Q${quarter} ${year}`);
    }
    
    return quarters;
  };

  const quarters = generateQuarters();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">{data.category}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Show details"
          >
            <Info size={18} />
          </button>
          <span className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            <span className="ml-1">{Math.abs(data.change)}%</span>
          </span>
        </div>
      </div>
      <p className="text-3xl font-bold mt-2">{data.value}%</p>
      <p className="text-sm text-gray-600 mt-2">{data.description}</p>
      
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close details"
            >
              <X size={18} />
            </button>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900">{data.category} Trend Analysis</h4>
              <p className="text-sm text-gray-600 mt-1">{data.description}</p>
            </div>

            {/* Trend Chart */}
            <div className="mb-8">
              <div className="relative h-64">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-600">
                  {[...Array(6)].map((_, i) => (
                    <span key={i}>
                      {(maxValue - (i * (valueRange / 5))).toFixed(1)}%
                    </span>
                  ))}
                </div>
                
                {/* Chart area */}
                <div className="absolute left-14 right-0 top-0 bottom-0">
                  {/* Grid lines */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full border-t border-gray-100"
                      style={{ top: `${(i * 100) / 5}%` }}
                    />
                  ))}
                  
                  {/* Line chart */}
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path
                      d={data.historicalData.map((value, index) => {
                        const x = (index / (data.historicalData.length - 1)) * 100;
                        const y = ((maxValue - value) / valueRange) * 100;
                        return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`;
                      }).join(' ')}
                      className="stroke-indigo-500 stroke-2 fill-none"
                    />
                    {/* Data points */}
                    {data.historicalData.map((value, index) => {
                      const x = (index / (data.historicalData.length - 1)) * 100;
                      const y = ((maxValue - value) / valueRange) * 100;
                      return (
                        <g key={index}>
                          <circle
                            cx={`${x}%`}
                            cy={`${y}%`}
                            r="4"
                            className="fill-indigo-500"
                          />
                          <text
                            x={`${x}%`}
                            y={`${y - 10}%`}
                            textAnchor="middle"
                            className="text-xs fill-gray-600"
                          >
                            {value}%
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between px-14 mt-2 text-xs text-gray-600">
                {quarters.map((quarter, index) => (
                  <span key={index}>{quarter}</span>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-700 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">Last Updated</span>
                </div>
                <p className="text-gray-600">{data.lastUpdated}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-700 mb-2">
                  <FileText size={16} className="mr-2" />
                  <span className="font-medium">Data Source</span>
                </div>
                <p className="text-gray-600">{data.source}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};