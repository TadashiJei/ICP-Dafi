export const mockFarmerData = {
  profile: {
    name: "John Farmer",
    location: "Central Valley, CA",
    farmSize: "250 acres",
    mainCrops: ["Corn", "Soybeans", "Wheat"],
    rating: 4.8,
  },
  stats: {
    totalFunding: 125000,
    activeProjects: 3,
    completedProjects: 12,
    successRate: 95,
  },
  activeProjects: [
    {
      id: "1",
      name: "Sustainable Corn Production 2024",
      funded: 50000,
      goal: 75000,
      progress: 66,
      dueDate: "2024-06-30",
      status: "Active",
    },
    {
      id: "2",
      name: "Organic Soybean Expansion",
      funded: 30000,
      goal: 45000,
      progress: 75,
      dueDate: "2024-05-15",
      status: "Active",
    },
  ],
  recentTransactions: [
    {
      id: "tx1",
      type: "Funding Received",
      amount: 15000,
      date: "2024-01-15",
      from: "Investor Pool A",
    },
    {
      id: "tx2",
      type: "Yield Payment",
      amount: 8500,
      date: "2024-01-10",
      to: "Yield Pool B",
    },
  ],
};

export const mockInvestorData = {
  portfolio: {
    totalInvested: 500000,
    activeInvestments: 8,
    averageReturn: 12.5,
    totalReturn: 62500,
  },
  investmentOpportunities: [
    {
      id: "1",
      farmerName: "John Smith",
      projectName: "Organic Farm Expansion",
      requiredFunding: 100000,
      expectedReturn: 15,
      riskLevel: "Medium",
      duration: "12 months",
      funded: 65000,
      location: "California, USA",
    },
    {
      id: "2",
      farmerName: "Maria Garcia",
      projectName: "Sustainable Rice Production",
      requiredFunding: 75000,
      expectedReturn: 12,
      riskLevel: "Low",
      duration: "9 months",
      funded: 45000,
      location: "Texas, USA",
    },
  ],
  activeInvestments: [
    {
      id: "inv1",
      projectName: "Corn Farm Expansion",
      farmerName: "Bob Wilson",
      investedAmount: 50000,
      expectedReturn: 13.5,
      progress: 75,
      endDate: "2024-08-30",
    },
    {
      id: "inv2",
      projectName: "Organic Vegetable Farm",
      farmerName: "Sarah Johnson",
      investedAmount: 35000,
      expectedReturn: 11.8,
      progress: 45,
      endDate: "2024-06-15",
    },
  ],
  recentTransactions: [
    {
      id: "tx1",
      type: "Investment",
      amount: 25000,
      date: "2024-01-15",
      project: "Sustainable Wheat Farm",
    },
    {
      id: "tx2",
      type: "Return",
      amount: 5750,
      date: "2024-01-10",
      project: "Organic Apple Orchard",
    },
  ],
};
