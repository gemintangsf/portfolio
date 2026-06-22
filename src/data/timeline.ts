export interface ProjectDetail {
  name: string;
  link?: string;
}

export interface TimelineImage {
  src: string;
  projectName: string;
  link: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  company?: string;
  role: string;
  type: "education" | "experience" | "project";
  description: string;
  projects?: ProjectDetail[];
  iconType: "polban" | "bejana" | "jtk" | "neuronworks" | "javabooks" | "future";
  images: TimelineImage[];
  note?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "polban",
    period: "2019 - 2021",
    title: "Academic Foundation & Early Coding",
    company: "Politeknik Negeri Bandung (POLBAN)",
    role: "Backend Developer",
    type: "education",
    iconType: "polban",
    description: "My introduction to software engineering. I focused on building logic, understanding computer architecture, and mastering core computing concepts. I studied algorithms, data structures, procedural programming (C/C++), object-oriented programming (Java), and relational databases (SQL).",
    note: "And this is my first project that built with my friends as a backend developer.",
    projects: [
      {
        name: "SIINVENT",
        link: "/projects/side-projects?tab=siinvent"
      }
    ],
    images: [
      {
        src: "/assets/siinvent/2.jpg",
        projectName: "SIINVENT",
        link: "/projects/side-projects?tab=siinvent"
      }
    ]
  },
  {
    id: "bejana",
    period: "Jun 2022 - Oct 2022",
    title: "First Industry Internship & Framework Exploration",
    company: "PT. Bejana Investidata Globalindo (BIG IO)",
    role: "Full Stack Developer Intern",
    type: "experience",
    iconType: "bejana",
    description: "My first internship during college and my introduction to the professional world. Started out building backend APIs for the PABOI web portal, but ended up handling the frontend tasks too—which officially started my journey as a fullstack developer.",
    projects: [
      {
        name: "PABOI Web Portal",
        link: "/projects/pt-bejana"
      }
    ],
    images: [
      {
        src: "/assets/paboi/1.png",
        projectName: "PABOI Web Portal",
        link: "/projects/pt-bejana"
      }
    ]
  },
  {
    id: "sinbada",
    period: "Nov 2022 - Jan 2023",
    title: "Freelance Project with my friends",
    company: "Freelance",
    role: "Backend Developer",
    type: "project",
    iconType: "bejana",
    description: "Right after finishing my internship, I teamed up with college friends for this project. As the backend developer, I brought in the technologies I just learned during my intern days, like Ruby on Rails, and used it to build the core systems.",
    projects: [
      {
        name: "SINBADA",
        link: "/projects/side-projects?tab=sinbada"
      }
    ],
    images: [
      {
        src: "/assets/sinbada/1.jpg",
        projectName: "SINBADA",
        link: "/projects/side-projects?tab=sinbada"
      }
    ]
  },
  {
    id: "jtk-berbagi",
    period: "Feb 2023 - Nov 2023",
    title: "Final Year Project & Full-Lifecycle Development",
    company: "Politeknik Negeri Bandung (POLBAN)",
    role: "Backend Developer & System Analyst",
    type: "project",
    iconType: "jtk",
    description: "Right after finishing my freelance project, I hit my final year of college and had to work on my graduation project (Tugas Akhir). I built this web-based social fund platform from scratch. Since I had to handle everything seriously, from initial analysis, design, backend coding, and testing, all the way to delivering it to the users, this project is where I really leveled up both as a Backend Developer and a System Analyst.",
    projects: [
      {
        name: "JTK Berbagi",
        link: "/projects/side-projects?tab=jtk-berbagi"
      }
    ],
    images: [
      {
        src: "/assets/jtkberbagi/1.png",
        projectName: "JTK Berbagi",
        link: "/projects/side-projects?tab=jtk-berbagi"
      }
    ]
  },
  {
    id: "neuronworks",
    period: "Feb 2024 - Feb 2025",
    title: "Enterprise Systems Development",
    company: "PT. Jagoo IT (Outsourced to PT. Neuronworks Indonesia)",
    role: "Full Stack Developer (Client: Telkom Indonesia)",
    type: "experience",
    iconType: "neuronworks",
    description: "My first full-time job after graduation. This is where I learned how to code properly and build a strong foundation in software development. The company has a complete team with clear roles. Like PM, System Analyst, UI/UX Designer, QA, and DevOps. I could focus entirely on coding. Working here taught me a lot about microservices, unit testing, SonarQube, Apache Airflow, and Agile workflows.",
    projects: [
      {
        name: "NADIA (NTE MANAGEMENT)",
        link: "/projects/pt-neuronworks?tab=nadia"
      },
      {
        name: "SCONE (Order Management)",
        link: "/projects/pt-neuronworks?tab=scone"
      },
      {
        name: "DMS (Document Management System)",
        link: "/projects/pt-neuronworks?tab=dms"
      },
      {
        name: "PEFITA (Package Management)",
        link: "/projects/pt-neuronworks?tab=pefita"
      },
      {
        name: "PPT (Master Data Management)",
        link: "/projects/pt-neuronworks?tab=ppt"
      }
    ],
    images: [
      {
        src: "/assets/nadia/1.jpg",
        projectName: "NADIA",
        link: "/projects/pt-neuronworks?tab=nadia"
      },
      {
        src: "/assets/scone/1.jpg",
        projectName: "SCONE",
        link: "/projects/pt-neuronworks?tab=scone"
      },
      {
        src: "/assets/dms/1.jpg",
        projectName: "DMS",
        link: "/projects/pt-neuronworks?tab=dms"
      },
      {
        src: "/assets/ppt/1.jpg",
        projectName: "PPT",
        link: "/projects/pt-neuronworks?tab=ppt"
      }
    ]
  },
  {
    id: "javabooks",
    period: "May 2025 - Present",
    title: "Mobile Optimization, POS & AI Search",
    company: "PT. Javabooks Indonesia (Periplus)",
    role: "Full Stack & Mobile Developer",
    type: "experience",
    iconType: "javabooks",
    description: "My current job. Here, I work on both mobile apps and e-commerce websites for Periplus. My main focus is making their retail store applications and internal systems run smoother. I handle cross-platform mobile development, build features like face recognition for attendance, and work on AI-powered book search systems.",
    projects: [
      {
        name: "PHC Mobile App",
        link: "/projects/pt-javabooks?tab=phc-mobile"
      },
      {
        name: "Mobile POS App",
        link: "/projects/pt-javabooks?tab=pos-mobile"
      },
      {
        name: "PeriplusApps Mobile",
        link: "/projects/pt-javabooks?tab=periplus-apps"
      },
      {
        name: "periplus.com (Search & Recommendation Engine)",
        link: "/projects/pt-javabooks?tab=search-opensearch"
      }
    ],
    images: [
      {
        src: "/assets/phc/face_recognitions/3.jpg",
        projectName: "PHC Mobile App",
        link: "/projects/pt-javabooks?tab=phc-mobile"
      },
      {
        src: "/assets/pos/1.png",
        projectName: "Mobile POS App",
        link: "/projects/pt-javabooks?tab=pos-mobile"
      },
      {
        src: "/assets/mobile_p+/2.jpeg",
        projectName: "PeriplusApps Mobile",
        link: "/projects/pt-javabooks?tab=periplus-apps"
      },
      {
        src: "/assets/web_p+/1.png",
        projectName: "periplus.com",
        link: "/projects/pt-javabooks?tab=search-opensearch"
      }
    ]
  },
  {
    id: "future",
    period: "2026 - Future",
    title: "Write the Next Chapter",
    company: "Your Team / Project?",
    role: "We can talk about role soon",
    type: "experience",
    iconType: "future",
    description: "Maybe you can be someone who will add a new journey for me. Let's connect, share ideas, and build the next milestone together.",
    projects: [
      {
        name: "Let's Collaborate",
        link: "/contact"
      }
    ],
    images: [
      {
        src: "placeholder",
        projectName: "Let's Connect",
        link: "/contact"
      }
    ]
  }
];
