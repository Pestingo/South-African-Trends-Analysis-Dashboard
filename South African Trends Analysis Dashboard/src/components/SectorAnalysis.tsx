import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { SectorData } from '../types';

interface SectorAnalysisProps {
  data: SectorData[];
}

export const SectorAnalysis: React.FC<SectorAnalysisProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Economic Sectors</h2>
      <div className="space-y-6">
        {data.map((sector) => (
          <div key={sector.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{sector.name}</h3>
                <p className="text-sm text-gray-600">{sector.jobs}M jobs</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`flex items-center ${sector.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {sector.growth >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="ml-1 text-sm">{Math.abs(sector.growth)}%</span>
                </div>
                <span className="text-sm text-gray-600">{sector.contribution}% of GDP</span>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500"
                style={{ width: `${sector.contribution}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};