import React from 'react';
import type { DemographicData } from '../types';

interface DemographicChartProps {
  data: DemographicData[];
}

export const DemographicChart: React.FC<DemographicChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Employment by Age Group</h2>
      <div className="space-y-4">
        {data.map((group) => {
          const employedPercentage = (group.employed / group.total) * 100;
          const unemployedPercentage = (group.unemployed / group.total) * 100;
          const inactivePercentage = (group.notEconomicallyActive / group.total) * 100;

          return (
            <div key={group.ageGroup} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{group.ageGroup}</span>
                <span className="text-gray-600">{group.total}M people</span>
              </div>
              <div className="h-6 flex rounded-full overflow-hidden">
                <div 
                  style={{ width: `${employedPercentage}%` }}
                  className="bg-green-500"
                  title={`Employed: ${group.employed}M (${employedPercentage.toFixed(1)}%)`}
                />
                <div 
                  style={{ width: `${unemployedPercentage}%` }}
                  className="bg-red-500"
                  title={`Unemployed: ${group.unemployed}M (${unemployedPercentage.toFixed(1)}%)`}
                />
                <div 
                  style={{ width: `${inactivePercentage}%` }}
                  className="bg-gray-300"
                  title={`Not Economically Active: ${group.notEconomicallyActive}M (${inactivePercentage.toFixed(1)}%)`}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Employed: {employedPercentage.toFixed(1)}%</span>
                <span>Unemployed: {unemployedPercentage.toFixed(1)}%</span>
                <span>Inactive: {inactivePercentage.toFixed(1)}%</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
          <span>Employed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
          <span>Unemployed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-300 rounded-full mr-2" />
          <span>Not Economically Active</span>
        </div>
      </div>
    </div>
  );
};