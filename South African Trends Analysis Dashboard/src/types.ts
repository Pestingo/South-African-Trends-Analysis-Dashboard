export interface TrendData {
  category: string;
  value: number;
  change: number;
  description: string;
  historicalData: number[];
  source: string;
  lastUpdated: string;
}

export interface Province {
  name: string;
  issues: string[];
  severity: number;
  population: number;
  gdp: number;
  unemployment: number;
  povertyRate: number;
}

export interface DemographicData {
  ageGroup: string;
  total: number;
  employed: number;
  unemployed: number;
  notEconomicallyActive: number;
}

export interface SectorData {
  name: string;
  jobs: number;
  growth: number;
  contribution: number;
}