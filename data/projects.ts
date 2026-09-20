export type Project = {
  number: string;
  title: string;
  category: string;
  filter: string;
  image: string;
  description: string;
  tech: string[];
  website: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "E-Commerce Customer Churn Dashboard",
    category: "DATA VISUALIZATION",
    filter: "Database",
    image: "/project/tableau-dashboard.png",
    description:
      "An interactive dashboard analyzing customer churn behavior and identifying patterns related to engagement and purchasing activity.",
    tech: ["Tableau", "Python", "Data Visualization"],
    website: "https://public.tableau.com/views/DataVisualizationFinalProjectDashboard/E-CommerceCustomerChurnDashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    number: "02",
    title: "Eco Event Finder",
    category: "WEB DEVELOPMENT",
    filter: "Web",
    image: "/project/eco.png",
    description:
      "A web application for discovering and managing environmental events, built with React, Django REST Framework, and MySQL.",
    tech: ["React", "Tailwind CSS", "Django", "MySQL"],
    website: "https://eco-event-finder.vercel.app/",
  },
  {
    number: "03",
    title: "MaterLife",
    category: "AI & MACHINE LEARNING",
    filter: "AI",
    image: "/project/materlife.png",
    description:
      "An AI-based maternal health risk prediction website that provides risk predictions based on health-related input data.",
    tech: ["Python", "Machine Learning", "Web App"],
    website: "https://mater-life.vercel.app",
  },
  {
    number: "04",
    title: "E-Commerce Customer Churn Report",
    category: "DATA ANALYTICS",
    filter: "Database",
    image: "/project/report.png",
    description:
      "A data analytics report exploring customer churn patterns, engagement behavior, and purchasing activity.",
    tech: ["Python", "Data Analysis", "Machine Learning", "LaTeX"],
    website: "https://www.overleaf.com/read/gtkwqzpcttyj#b6c893",
  },
];
