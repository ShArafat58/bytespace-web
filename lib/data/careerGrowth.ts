export type GrowthStat = {
  value: string;
  label: string;
};

export type RevenueStat = {
  title: string;
  period: string;
  amount: string;
  change: string;
  progress?: number;
};

export const growthStats: GrowthStat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const revenueStats: RevenueStat[] = [
  {
    title: "Total Revenue",
    period: "July 1-28",
    amount: "$120.29",
    change: "+12$",
    progress: 56,
  },
  {
    title: "Year to Date",
    period: "2023",
    amount: "$1,200.38",
    change: "+12$",
  },
];

export const creatorBenefits: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];
