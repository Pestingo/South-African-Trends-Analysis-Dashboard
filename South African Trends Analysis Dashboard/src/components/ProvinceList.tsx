import React from 'react';
import { AlertTriangle, Users, TrendingUp, Banknote } from 'lucide-react';
import type { Province } from '../types';

interface ProvinceListProps {
  provinces: Province[];
}

export const ProvinceList: React.FC<ProvinceListProps> = ({ provinces }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Provincial Analysis</h2>
      <div className="space-y-6">
        {provinces.map((province) => (
          <div key={province.name} className="border-b pb-6 last:border-b-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{province.name}</h3>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <Users size={16} className="mr-1" />
                  <span>{province.population}M people</span>
                  <span className="mx-2">•</span>
                  <Banknote size={16} className="mr-1" />
                  <span>{province.gdp}% of GDP</span>
                </div>
              </div>
              <div className="flex items-center">
                <AlertTriangle 
                  size={16} 
                  className={`${
                    province.severity > 7 ? 'text-red-500' : 
                    province.severity > 5 ? 'text-yellow-500' : 'text-green-500'
                  }`} 
                />
                <span className="ml-2 text-sm">Severity: {province.severity}/10</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Unemployment Rate</div>
                <div className="text-lg font-semibold mt-1">{province.unemployment}%</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Poverty Rate</div>
                <div className="text-lg font-semibold mt-1">{province.povertyRate}%</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">Key Issues</div>
              <div className="flex flex-wrap gap-2">
                {province.issues.map((issue) => (
                  <span 
                    key={issue}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {issue}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};