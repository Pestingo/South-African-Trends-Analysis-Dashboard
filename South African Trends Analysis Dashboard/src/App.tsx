import React from 'react';
import { BarChart3 } from 'lucide-react';
import { TrendCard } from './components/TrendCard';
import { ProvinceList } from './components/ProvinceList';
import { DemographicChart } from './components/DemographicChart';
import { SectorAnalysis } from './components/SectorAnalysis';
import { trendingIssues, provinceData, demographicData, sectorData } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                South Africa Trends Analysis 2024
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Data Source: Statistics South Africa
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingIssues.map((issue) => (
            <TrendCard key={issue.category} data={issue} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DemographicChart data={demographicData} />
          <SectorAnalysis data={sectorData} />
        </div>

        <div className="mt-8">
          <ProvinceList provinces={provinceData} />
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Resources & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://www.statssa.gov.za/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">Statistics South Africa</h3>
              <p className="mt-2 text-sm text-indigo-700">Access official national statistics and reports</p>
            </a>
            <a 
              href="https://www.gov.za/issues/national-development-plan-2030" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">National Development Plan</h3>
              <p className="mt-2 text-sm text-indigo-700">Learn about SA's development strategy and goals</p>
            </a>
            <a 
              href="https://www.jobsearch.gov.za/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">Employment Services</h3>
              <p className="mt-2 text-sm text-indigo-700">Find job opportunities and career resources</p>
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Data last updated: Q1 2024 | Source: Statistics South Africa
            </p>
            <p className="text-sm text-indigo-600 font-medium">
              by Pester Mbhetse (Pestingo)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;