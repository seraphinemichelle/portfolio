export type Experience = {
  year: string;
  title: string;
  company: string;
  type: string;
  image: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    year: "2025 — Present",
    title: "Student Tutor",
    company: "Helpmate Course",
    type: "Part-time",
    image: "/experience/tutor.jpeg",
    description:
      "Provided academic tutoring for 180+ high school students in Mathematics, Physics, and Chemistry through private and semi-private learning sessions.",
  },
  {
    year: "2025 — 2026",
    title: "Freshmen Partner",
    company: "BINUS University",
    type: "Seasonal",
    image: "/experience/fp.jpg",
    description:
      "Mentored 10 freshmen throughout their first academic year, supporting their adaptation to university life, academic systems, and campus communities.",
  },
  {
    year: "2025",
    title: "Freshmen Leader",
    company: "BINUS University",
    type: "Seasonal",
    image: "/experience/fl.jpg",
    description:
      "Supported 51 new students during the First Year Program by guiding orientation activities, sharing information, and encouraging participation.",
  },
  {
    year: "2025",
    title: "Academic Tutor",
    company: "Algo Bootcamp",
    type: "Part-time",
    image: "/experience/boothcamp.png",
    description:
      "Provided online Linear Algebra tutoring for 30+ incoming Computer Science students and prepared learning materials and practice questions.",
  },
  {
    year: "2024",
    title: "Social Media Marketing Intern",
    company: "Universitas Multimedia Nusantara",
    type: "Internship",
    image: "/experience/umn.jpg",
    description:
      "Created and edited social media content for @umninternational, including captions, content drafts, scheduling, and content ideas.",
  },
];
