export type Skill = {
  name: string;
  category: string;
  icon: string;
};

export const skills: Skill[] = [
  { name: "MySQL", category: "DATABASE", icon: "/skills/mysql.svg" },
  { name: "Power BI", category: "DATA", icon: "/skills/powerbi.svg" },
  { name: "Tableau", category: "DATA", icon: "/skills/tableau.svg" },
  { name: "Pentaho", category: "DATA", icon: "/skills/pentaho.svg" },
  { name: "Pandas", category: "DATA", icon: "/skills/pandas.svg" },
  { name: "C++", category: "PROGRAMMING", icon: "/skills/c.svg" },
  { name: "Git", category: "TOOLS", icon: "/skills/git.svg" },
  { name: "Python", category: "PROGRAMMING", icon: "/skills/python.svg" },
  { name: "Figma", category: "DESIGN", icon: "/skills/figma.svg" },
  { name: "HTML", category: "WEB", icon: "/skills/html.svg" },
  { name: "CSS", category: "WEB", icon: "/skills/css.svg" },
  { name: "Javascript", category: "WEB", icon: "/skills/javascript.svg" },
  { name: "Java", category: "PROGRAMMING", icon: "/skills/java.svg" },
  { name: "Django", category: "WEB", icon: "/skills/django.svg" },
];
