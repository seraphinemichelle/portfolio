export type Project = {
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  website: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "E-Commerce Customer Churn Dashboard",
    category: "DATA ANALYTICS",
    image: "/project/churn-dashboard.png",
    description:
      "An interactive dashboard analyzing customer churn behavior and identifying patterns related to engagement and purchasing activity.",
    tech: ["Power BI", "Python", "Data Analysis"],
    website: "#",
  },
  {
    number: "02",
    title: "Eco Event Finder",
    category: "WEB DEVELOPMENT",
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
    image: "/project/report.png",
    description:
      "A data analytics report exploring customer churn patterns, engagement behavior, and purchasing activity.",
    tech: ["Power BI", "Python", "Data Analysis"],
    website: "https://www.overleaf.com/read/gtkwqzpcttyj#b6c893",
  },
];
