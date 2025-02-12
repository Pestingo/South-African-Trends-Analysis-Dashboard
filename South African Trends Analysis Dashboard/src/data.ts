// Real data from Stats SA Q1 2024 reports
export const trendingIssues: TrendData[] = [
  {
    category: "Unemployment",
    value: 31.9,
    change: -0.2,
    description: "Official unemployment rate (strict definition)",
    historicalData: [32.9, 32.1, 31.9, 31.9, 31.9],
    source: "Stats SA Quarterly Labour Force Survey",
    lastUpdated: "2024-Q1"
  },
  {
    category: "Youth Unemployment",
    value: 43.4,
    change: -1.9,
    description: "Youth unemployment rate (15-34 years)",
    historicalData: [45.9, 45.3, 44.5, 43.8, 43.4],
    source: "Stats SA Youth Report",
    lastUpdated: "2024-Q1"
  },
  {
    category: "GDP Growth",
    value: 0.9,
    change: 0.3,
    description: "Quarter-on-quarter GDP growth rate",
    historicalData: [0.2, 0.6, 0.7, 0.8, 0.9],
    source: "Stats SA GDP Report",
    lastUpdated: "2024-Q1"
  },
  {
    category: "Inflation",
    value: 5.3,
    change: -0.6,
    description: "Consumer Price Index (CPI)",
    historicalData: [6.2, 5.9, 5.7, 5.5, 5.3],
    source: "Stats SA CPI Release",
    lastUpdated: "2024-Q1"
  }
];

// Updated provincial data from Stats SA 2024
export const provinceData: Province[] = [
  {
    name: "Gauteng",
    issues: ["Unemployment", "Housing", "Crime", "Infrastructure"],
    severity: 7,
    population: 16.1,
    gdp: 35.9,
    unemployment: 32.8,
    povertyRate: 27.5
  },
  {
    name: "Western Cape",
    issues: ["Housing", "Water Security", "Inequality"],
    severity: 6,
    population: 7.3,
    gdp: 14.2,
    unemployment: 26.1,
    povertyRate: 20.8
  },
  {
    name: "KwaZulu-Natal",
    issues: ["Poverty", "Infrastructure", "Education", "Healthcare"],
    severity: 8,
    population: 11.7,
    gdp: 16.0,
    unemployment: 33.9,
    povertyRate: 30.9
  },
  {
    name: "Eastern Cape",
    issues: ["Poverty", "Education", "Healthcare", "Rural Development"],
    severity: 8,
    population: 6.9,
    gdp: 7.7,
    unemployment: 37.4,
    povertyRate: 35.8
  }
];

// Updated demographic data from Stats SA Labour Force Survey 2024
export const demographicData: DemographicData[] = [
  {
    ageGroup: "15-24",
    total: 10.4,
    employed: 2.3,
    unemployed: 3.0,
    notEconomicallyActive: 5.1
  },
  {
    ageGroup: "25-34",
    total: 11.1,
    employed: 6.1,
    unemployed: 2.7,
    notEconomicallyActive: 2.3
  },
  {
    ageGroup: "35-44",
    total: 9.3,
    employed: 6.4,
    unemployed: 1.5,
    notEconomicallyActive: 1.4
  },
  {
    ageGroup: "45-54",
    total: 7.0,
    employed: 4.9,
    unemployed: 0.8,
    notEconomicallyActive: 1.3
  },
  {
    ageGroup: "55-64",
    total: 4.9,
    employed: 2.4,
    unemployed: 0.3,
    notEconomicallyActive: 2.2
  }
];

// Updated sector data from Stats SA Employment Report 2024
export const sectorData: SectorData[] = [
  {
    name: "Finance",
    jobs: 2.8,
    growth: 1.5,
    contribution: 20.7
  },
  {
    name: "Trade",
    jobs: 3.2,
    growth: 0.4,
    contribution: 14.1
  },
  {
    name: "Manufacturing",
    jobs: 1.9,
    growth: 0.9,
    contribution: 12.6
  },
  {
    name: "Government",
    jobs: 2.5,
    growth: 0.2,
    contribution: 18.5
  },
  {
    name: "Mining",
    jobs: 0.8,
    growth: -0.8,
    contribution: 8.0
  }
];