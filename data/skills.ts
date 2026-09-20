export type Skill = {
  name: string;
  category: string;
  icon: string;
};

export const skills: Skill[] = [
  { name: "MySQL", category: "DATABASE", icon: "/skills/mysql.svg" },
  { name: "Power BI", category: "DATA", icon: "/skills/powerbi.svg" },
  { name: "Tableau", category: "DATA", icon: "/skills/tableau.svg" },
  { name: "Pandas", category: "DATA", icon: "/skills/pandas.svg" },
  { name: "C++", category: "PROGRAMMING", icon: "/skills/c.svg" },
  { name: "Git", category: "TOOLS", icon: "/skills/git.svg" },
  { name: "Python", category: "PROGRAMMING", icon: "/skills/python.svg" },
  { name: "Figma", category: "DESIGN", icon: "/skills/figma.svg" },
  { name: "HTML", category: "WEB", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", category: "WEB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Javascript", category: "WEB", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "Java", category: "PROGRAMMING", icon: "/skills/java.svg" },
  { name: "Django", category: "WEB", icon: "https://cdn.simpleicons.org/django" },
];
