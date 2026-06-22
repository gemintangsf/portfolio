import { Project } from "@/types";

export const projects: Project[] = [
  {
    "id": 1,
    "title": "PHC Mobile: Attendance & HR System",
    "description": "Built an internal HR mobile app covering attendance, leave requests, and employee records. Face recognition handles check-in validation; geolocation logs entry and exit.",
    "image": "bg-brand-highlight",
    "stack": [
      "Flutter",
      "Python",
      "InsightFace",
      "MySQL",
      "OpenCart",
      "REST API"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "Custom face validation had to run without prior photo enrollment to minimize administrative friction. Furthermore, network latency caused timeout errors during biometric match uploads from remote sites.",
    "solution": "Engineered an on-the-fly verification pipeline using InsightFace (Python) and geofencing coordinates synchronized via PHP OpenCart. Designed responsive API fallbacks to handle poor connectivity gracefully.",
    "evidence": [
      "/assets/phc/face_recognitions/3.jpg",
      "/assets/phc/face_recognitions/4.jpg",
      "/assets/phc/face_recognitions/5.jpg",
      "/assets/phc/face_recognitions/6.jpg",
      "/assets/phc/face_recognitions/7.jpg"
    ],
    "impact": [
      "Eliminated manual photo attendance fraud, stabilized mobile memory usage under heavy payloads, and reduced transaction retry rates."
    ],
    "playStore": "https://play.google.com/store/apps/details?id=com.periplus.hc",
    "appStore": "https://apps.apple.com/app/periplus-human-capital/id1669643043"
  },
  {
    "id": 2,
    "title": "PHC Mobile: Gamification Module",
    "description": "Added a gamification module to the PHC app — quiz challenges, a leaderboard, and performance work to keep scrolling smooth on large datasets. Capped the image cache to prevent storage from growing out of control. Resized images at load time to match UI dimensions and reduce memory pressure.",
    "image": "bg-brand-highlight",
    "stack": [
      "Flutter",
      "Custom Cache Manager",
      "Performance Optimization",
      "Gamification Logic"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "Rendering hundreds of leaderboard entries with images without the UI becoming unusable, and employees screenshotting and sharing quiz answers to exploit cash rewards.",
    "solution": "Designed viewport-based image lazy-loading and client-side caching to maintain a 60fps leaderboard list. Hardened quiz campaigns with OS-level screenshot blocking and focus-loss tracking.",
    "evidence": [
      "/assets/phc/leaderboards/1.png",
      "/assets/phc/leaderboards/2.png",
      "/assets/phc/leaderboards/3.png",
      "/assets/phc/leaderboards/4.png",
      "/assets/phc/leaderboards/5.png",
      "/assets/phc/leaderboards/6.png",
      "/assets/phc/leaderboards/7.png",
      "/assets/phc/leaderboards/8.png"
    ],
    "impact": [
      "Prevented quiz collusions and stabilized memory usage on low-end employee devices."
    ],
    "playStore": "https://play.google.com/store/apps/details?id=com.periplus.hc",
    "appStore": "https://apps.apple.com/app/periplus-human-capital/id1669643043"
  },
  {
    "id": 3,
    "title": "PeriplusApps Mobile",
    "description": "Worked on PeriplusApps, a mobile e-commerce app tied to periplus.com. Focused on performance tuning, fixing visual inconsistencies across devices, and getting features to behave reliably across different modules. Cut duplicate API calls and corrected endpoints that were pointing to the wrong places. Fixed layouts to behave consistently across phone and tablet screen sizes. Tracked down and fixed a set of bugs: bad request mappings, UI overflow, and state that wasn't being reset properly.",
    "image": "bg-brand-highlight",
    "stack": [
      "Flutter",
      "REST API Integration",
      "Responsive Design",
      "Bug Fixing & Optimization"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "The app suffered from redundant duplicate API calls, layout issues across phone and tablet screens, and state-retention bugs during transaction cart and coupon checkout actions.",
    "solution": "Audited API payloads to cut redundant endpoints, corrected incorrect request mappings, and rebuilt layouts with responsive constraints. Implemented strict state resets for coupon checkouts.",
    "evidence": [
      "/assets/mobile_p+/2.jpeg",
      "/assets/mobile_p+/3.jpeg",
      "/assets/mobile_p+/4.jpeg",
      "/assets/mobile_p+/5.jpeg",
      "/assets/mobile_p+/6.jpeg",
      "/assets/mobile_p+/7.jpeg",
      "/assets/mobile_p+/8.jpeg",
      "/assets/mobile_p+/9.jpeg",
      "/assets/mobile_p+/10.jpeg",
      "/assets/mobile_p+/11.jpeg",
      "/assets/mobile_p+/12.jpeg",
      "/assets/mobile_p+/13.jpeg",
      "/assets/mobile_p+/14.jpeg",
      "/assets/mobile_p+/15.jpeg",
      "/assets/mobile_p+/16.jpeg",
      "/assets/mobile_p+/17.jpeg",
      "/assets/mobile_p+/18.jpeg"
    ],
    "impact": [
      "Reduced mobile network data overhead, resolved UI overflows on tablets, and ensured stable checkout state workflows."
    ],
    "playStore": "https://play.google.com/store/apps/details?id=com.bookindo.periplus.periplus",
    "appStore": "https://apps.apple.com/id/app/periplus/id6444208499"
  },
  {
    "id": 4,
    "title": "Mobile POS (Point of Sale) Application",
    "description": "Built a mobile POS app for cashier operations — transaction processing, product handling, and receipt printing. Simpler and easier to maintain than the desktop system it replaced.",
    "image": "bg-brand-highlight",
    "stack": [
      "Flutter",
      "REST API",
      "Mobile Design"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "The legacy desktop POS ran on local store databases. System sync issues or minor bugs required a software engineer to travel physically to the retail store—sometimes out-of-town locations—resulting in steep travel expenses and prolonged operational downtime.",
    "solution": "Rebuilt the POS from scratch as a centralized, cross-platform (Mobile, Tablet, and Desktop) Flutter application. By routing transaction data directly to a centralized server database and managing client state centrally, local compilation and databases were eliminated.",
    "evidence": [
      "/assets/pos/1.png",
      "/assets/pos/2.png",
      "/assets/pos/3.png",
      "/assets/pos/4.png",
      "/assets/pos/5.png",
      "/assets/pos/6.png"
    ],
    "impact": [
      "Removed 100% of physical maintenance travel costs. New features or bug fixes are now deployed instantly over-the-air, reducing store downtime to zero."
    ],
    "forceDesktopStyle": true
  },
  {
    "id": 5,
    "title": "Book Search & Recommendation Engine (periplus.com)",
    "description": "An e-commerce website for PT Javabooks Indonesia to sell books online. I built the book search and recommendation features, making it easier for users to find and get book suggestions.",
    "image": "bg-brand-highlight",
    "stack": [
      "Python",
      "OpenSearch",
      "MySQL",
      "OpenCart",
      "Flutter"
    ],
    "link": "https://www.periplus.com/",
    "isPrivate": true,
    "challenge": "The old search system was slow and only matched exact words. It often showed out-of-print or unpopular books at the top just because the titles matched, which made users stop searching.",
    "solution": "Moved the search system from Elasticsearch to OpenSearch to save costs. I rewrote the search logic to add auto-complete suggestions and changed how books are ranked, putting popular and trending books at the top of the results.",
    "impact": [
      "Helped users see popular and trending books immediately, making it much easier for them to discover books they actually want to buy."
    ],
    "evidence": [
      "/assets/web_p+/1.png",
      "/assets/web_p+/2.png",
      "/assets/web_p+/3.png"
    ]
  },
  {
    "id": 6,
    "title": "NADIA – Network Terminal Equipment Management",
    "description": "This was my first and main project at the company. It is a web-based microservices app used by Telkom Indonesia to manage and track the entire journey of NTE hardware assets (like customer routers).",
    "image": "bg-brand-highlight",
    "stack": [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "SonarQube",
      "Apache Airflow",
      "Jest",
      "Githooks"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "The project had been abandoned for a long time, and I was the only developer assigned to fix it. I had never handled a microservices architecture before, so I had to learn the entire system ecosystem from scratch. The existing codebase was messy, lacked testing, and was failing SonarQube quality checks.",
    "solution": "I worked closely with the System Analyst and Project Manager to clear up the requirements. I refactored the whole code to clean it up, added unit testing using Jest, and set up Git hooks to make sure nobody could push messy code. This allowed the project to finally pass the SonarQube gates, fix the main flows, and run automated status syncs using Apache Airflow.",
    "impact": [
      "Successfully revived the abandoned system, making the codebase clean, tested, and stable enough for the next developers to take over easily."
    ],
    "evidence": [
      "/assets/nadia/1.jpg",
      "/assets/nadia/2.jpg"
    ]
  },
  {
    "id": 7,
    "title": "PEFITA – Package Management System",
    "description": "An internal Telkom Indonesia system used to manage internet and product packages. For this project, I worked as a Frontend Developer to build the map visualization features.",
    "image": "bg-brand-highlight",
    "stack": [
      "React (Vite)"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "It was my first time using React (Vite) and integrating the Google Maps API. I had to quickly learn how map systems work and figure out how to add a Street View feature to the dashboard.",
    "solution": "Learned the map integration flow and successfully built the interactive Google Maps and Street View features on the frontend using React.",
    "impact": [
      "Successfully delivered the map features, helping users see and check package locations more easily."
    ],
    "evidence": []
  },
  {
    "id": 8,
    "title": "SCONE – Order Management System",
    "description": "A web-based microservices app used by Telkom Indonesia to make service orders, like internet activation and deactivation. I migrated the frontend from HTML/jQuery to Next.js and worked on the backend logic.",
    "image": "bg-brand-highlight",
    "stack": [
      "Next.js",
      "Zend Framework (PHP)",
      "HTML JQuery",
      "Oracle"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "This is a huge core system for Telkom with a lot of features and flows. Even though my main job was just migrating the UI to Next.js, I still had to understand how the whole application worked. Also, I got a side task to work on the backend, but I had no experience with PHP before. I had to fix the deactivation order flow that connects directly to the NADIA system.",
    "solution": "I used my software analysis basics from college to understand the big application flow. I learned the PHP code by tracing it manually and searching some documentation to help. I managed to connect the deactivation flow directly with the NADIA.",
    "impact": [
      "The app was developed well, the deactivation flow integrated with NADIA perfectly, and I finally understood how microservices actually work."
    ],
    "evidence": [
      "/assets/scone/1.jpg"
    ]
  },
  {
    "id": 9,
    "title": "DMS – Document Management System",
    "description": "Built a microservice document platform for Telkom Indonesia. I worked as a Full-Stack Developer, System Analyst, and UI/UX designer to make sure the app connects well with other internal systems like SCONE.",
    "image": "bg-brand-highlight",
    "stack": [
      "Zend Framework",
      "jQuery",
      "MinIO",
      "Oracle",
      "MySQL",
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "Designing a complex flow where users can upload single or multiple files easily. We had to make sure files are not saved permanently to MinIO storage until the user clicks 'Submit' (they must stay in a temporary place first) while keeping the UI status clear.",
    "solution": "Collaborated with the Project Manager to plan the business logic and user journey. I built a dynamic upload system using a temporary storage layer before the final upload, and created a clear UI so users always know their current upload status.",
    "impact": [
      "Successfully delivered a secure and flexible document system that links with other internal apps without risking wrong data uploads."
    ],
    "evidence": [
      "/assets/dms/1.jpg",
      "/assets/dms/2.jpg",
      "/assets/dms/3.jpg"
    ]
  },
  {
    "id": 10,
    "title": "PPT – Master Data Management",
    "description": "A core microservice for Telkom Indonesia that acts as the central database. It stores all important data like user details, order records, and products used by all other Telkom systems. My job was to rewrite the old HTML JQuery frontend into Next.js.",
    "image": "bg-brand-highlight",
    "stack": [
      "Next.js"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "The deadline was short, the rules kept changing, and I was not given the original source code. I only received the live website link, so I had to manually test every single feature on the old UI to understand how it worked before rewriting it.",
    "solution": "Discussed the details with the system analyst and carefully analyzed the live website. Then, I rebuilt the frontend using Next.js, making the tables and input fields much cleaner and easier to use.",
    "impact": [
      "Finished the project right on time and made it much faster for admins to manage Telkom's master data without losing any old features."
    ],
    "evidence": [
      "/assets/ppt/1.jpg"
    ]
  },
  {
    "id": 11,
    "title": "PABOI: Indonesian Orthopaedic Association",
    "description": "Helped build the official member website and admin system for the Indonesian Orthopaedic Association (PABOI).",
    "image": "bg-brand-highlight",
    "stack": [
      "Ruby on Rails",
      "ReactJS",
      "MySQL",
      "Git",
      "Kanban / Agile"
    ],
    "link": "https://indonesia-orthopaedic.org/",
    "isPrivate": true,
    "challenge": "I started as a backend intern, but the team had a lot of unfinished frontend tasks that delayed the project. There were also miscommunications between backend and frontend stuff.",
    "solution": "I learned the team's workflow quickly and started helping with ReactJS too. I fixed frontend bugs and made sure the APIs matched correctly.",
    "evidence": [
      "/assets/paboi/1.png"
    ],
    "impact": [
      "Fixed the frontend bugs, helped finish the tasks faster, and the website was done on time."
    ]
  },
  {
    "id": 12,
    "title": "JTK Berbagi",
    "description": "A web app for JTK POLBAN (Computer Engineering Department) for managing donation campaigns, tracking money, and logging donations.",
    "image": "bg-brand-highlight",
    "stack": [
      "Ruby on Rails",
      "ReactJS",
      "MySQL",
      "Waterfall SDLC",
      "REST API"
    ],
    "link": "https://github.com/gemintangsf/tugas_akhir/tree/main",
    "isPrivate": false,
    "evidence": [
      "/assets/jtkberbagi/1.png",
      "/assets/jtkberbagi/2.png"
    ],
    "challenge": "I had to build this app from scratch using standard software engineering steps. At first, I had to interview stakeholders manually to get requirements without AI tools. Also, I made a mistake by choosing MongoDB early on, because the donation data was actually relational and didn't fit MongoDB's structure.",
    "solution": "I handled almost every role: System Analyst, UI Designer, Backend Developer, and QA. I fixed the database mistake by reading research papers, talking to experts, and switching to MySQL. I made sure every step—from analysis, design, coding, to testing—was fully connected and synced.",
    "impact": [
      "Finished the app successfully by following good development steps, making sure the code actually solved the users' problems."
    ]
  },
  {
    "id": 13,
    "title": "Sinbada",
    "description": "A web app to help manage and track asset and stock data.",
    "image": "bg-brand-highlight",
    "stack": [
      "ReactJS",
      "Ruby on Rails",
      "MongoDB",
      "Git",
      "Swagger"
    ],
    "link": "https://github.com/SekelompokOrangKuat/ProjectInventaris/tree/dev",
    "isPrivate": false,
    "challenge": "As the backend lead, I had to make sure the code stayed clean and easy to maintain while being developed by 3 other developers at the same time.",
    "solution": "I chose Ruby on Rails for its simple syntax and quick setup for CRUD features. I built the initial clean code architecture and folder structure first, so the team could easily jump in and write code together without making a mess.",
    "evidence": [
      "/assets/sinbada/1.jpg"
    ],
    "impact": [
      "The team successfully built the backend features together on top of a clean and maintainable codebase."
    ]
  },
  {
    "id": 14,
    "title": "Siinvent",
    "description": "A web app to track and manage stock inventory.",
    "image": "bg-brand-highlight",
    "stack": [
      "Express.js",
      "PostgreSQL",
      "GIT"
    ],
    "link": "https://github.com/SekelompokOrangKuat/PROJECTCUAN/tree/backend",
    "isPrivate": false,
    "challenge": "First time working together in a team Git repository, handling database connections, and fixing git conflicts.",
    "solution": "Built the backend APIs using Express.js and PostgreSQL. Managed Git branches carefully and made standard request models.",
    "evidence": [
      "/assets/siinvent/2.jpg"
    ],
    "impact": [
      "The app works fine and all CRUD features are working."
    ]
  }
];
