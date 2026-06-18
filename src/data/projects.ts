import { Project } from "@/types";

export const categories: string[] = [
  "All",
  "Web",
  "Mobile",
  "Enterprise",
  "AI",
  "E-Commerce",
  "Others"
];

export const projects: Project[] = [
  {
    "id": 1,
    "title": "PHC Mobile: Attendance & HR System",
    "subtitle": "Orchestrating Biometric Validation and Geofenced Attendance",
    "category": "Mobile Application",
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
    "features": [
      "Face Recognition-based Attendance",
      "Geolocation-based Check-in/out",
      "Leave Management",
      "Basic Payroll Support",
      "Employee Data Management"
    ],
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
    "tags": [
      "Mobile"
    ],
    "playStore": "https://play.google.com/store/apps/details?id=com.periplus.hc",
    "appStore": "https://apps.apple.com/app/periplus-human-capital/id1669643043"
  },
  {
    "id": 2,
    "title": "PHC Mobile: Gamification Module",
    "subtitle": "Developing High-Performance Leaderboards and Secure Quiz Features",
    "category": "Mobile Application",
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
    "features": [
      "Leaderboard System",
      "Weekly Quiz Feature",
      "Smooth List Scrolling",
      "Background Data Sync",
      "Point & Reward System"
    ],
    "technicalOptimizations": [
      {
        "title": "Image Caching",
        "description": "Implemented a cache mechanism to limit stored images and prevent excessive storage usage."
      },
      {
        "title": "Optimized Image Loading",
        "description": "Resized images during loading to match UI needs and reduce memory consumption."
      },
      {
        "title": "Efficient List Rendering",
        "description": "Adjusted rendering strategy to keep scrolling smooth when displaying large datasets."
      }
    ],
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
    "tags": [
      "Mobile"
    ],
    "playStore": "https://play.google.com/store/apps/details?id=com.periplus.hc",
    "appStore": "https://apps.apple.com/app/periplus-human-capital/id1669643043"
  },
  {
    "id": 3,
    "title": "PeriplusApps Mobile",
    "subtitle": "Performance Tuning and Layout Consistency across Cross-Platform Devices",
    "category": "Mobile Application",
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
    "features": [
      "Wishlist Management",
      "Barcode (PEC) Integration",
      "Authentication & Profile Handling",
      "Cart & Transaction Flow",
      "Store Locator",
      "E-Coupon & Reward System"
    ],
    "technicalOptimizations": [
      {
        "title": "API Optimization",
        "description": "Removed redundant API calls and fixed incorrect endpoint usage to improve efficiency."
      },
      {
        "title": "Responsive UI Improvements",
        "description": "Adjusted layouts and components to ensure consistency across mobile and tablet devices."
      },
      {
        "title": "Bug Fixing & Data Mapping",
        "description": "Resolved multiple issues including incorrect request mapping, UI overflow, and inconsistent state handling."
      }
    ],
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
    "tags": [
      "Mobile",
      "E-Commerce"
    ],
    "playStore": "https://play.google.com/store/apps/details?id=com.bookindo.periplus.periplus",
    "appStore": "https://apps.apple.com/id/app/periplus/id6444208499"
  },
  {
    "id": 4,
    "title": "Mobile POS (Point of Sale) Application",
    "subtitle": "Decentralizing Store Sales While Eliminating Remote Maintenance Travel",
    "category": "Retail System",
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
    "features": [
      "Barcode Scanning for Checkout",
      "Payment and Discount Handling",
      "Receipt Printing Integration",
      "Inventory Synchronization",
      "Centralized Configuration"
    ],
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
    "tags": [
      "Mobile"
    ],
    "forceDesktopStyle": true
  },
  {
    "id": 5,
    "title": "Book Search & Recommendation Engine (periplus.com)",
    "subtitle": "Driving High-Intent Conversion by Aligning Search Results with Trends",
    "category": "Search System",
    "description": "Built a book search and recommendation feature for a large product catalog, with keyword search, suggestions, and basic recommendation logic.",
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
    "challenge": "The existing search was slow and matched keywords blindly. It frequently pushed out-of-print or low-demand books to the top of results if they had title matches, frustrating users and leading to abandoned searches.",
    "solution": "Migrated the search backend from Elasticsearch to OpenSearch to cut software licensing costs. Rewrote query parsing algorithms to prioritize search suggestions similar to Amazon's auto-complete. Implemented custom weighting logic that ranks search results based on a blend of keyword similarity, sales velocity, and trending click activity.",
    "features": [
      "Keyword-based Search",
      "Search Suggestions (Autocomplete)",
      "Typo-tolerant Search",
      "Product Ranking Based on Popularity",
      "Basic Recommendation Features"
    ],
    "evidence": [
      "/assets/web_p+/1.png",
      "/assets/web_p+/2.png",
      "/assets/web_p+/3.png"
    ],
    "impact": [
      "Aligned search output directly with consumer buying behavior. Customers are presented with trending, highly sought-after titles immediately, boosting catalog discovery."
    ],
    "tags": [
      "Web",
      "AI",
      "E-Commerce"
    ]
  },
  {
    "id": 6,
    "title": "NADIA – Network Terminal Equipment Management",
    "subtitle": "Resolving Ambiguity in Enterprise Asset Lifecycles",
    "category": "Enterprise Application",
    "description": "Worked on an internal Telkom Indonesia system for managing returned NTE assets like customer routers. Untangled confusing workflows, fixed bugs in older features, and tidied up the code structure.",
    "image": "bg-brand-highlight",
    "stack": [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "SonarQube",
      "Apache Airflow"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "The legacy tracking rules were unmapped, causing frequent asset loss and status confusion. The system was database inconsistent, and nobody on the active team fully understood the legacy business rules.",
    "solution": "Collaborated directly with stakeholders to trace and document the real asset lifecycle. Refactored the core services using NestJS and Next.js, instituted SonarQube quality gates to block code regression, and implemented automated backend sync tasks using Apache Airflow to clean up status mismatches.",
    "features": [
      "NTE asset retrieval and return tracking",
      "Structured business workflow handling",
      "Background job scheduling",
      "Basic logging and error handling",
      "Legacy feature improvements"
    ],
    "responsibilities": [
      "Developed backend and frontend features",
      "Translated business requirements into technical workflows",
      "Collaborated with stakeholders to clarify processes",
      "Improved code quality and maintainability",
      "Implemented scheduled jobs using Apache Airflow"
    ],
    "impact": [
      "Turned a chaotic asset pipeline into an auditable process, reducing status discrepancies and giving Telkom clear sight over thousands of hardware units."
    ],
    "evidence": [
      "/assets/nadia/1.jpg",
      "/assets/nadia/2.jpg"
    ],
    "tags": [
      "Enterprise",
      "Web"
    ]
  },
  {
    "id": 7,
    "title": "PEFITA – Package Management System",
    "subtitle": "Adding Geographic Intelligence to Product Bundles",
    "category": "Enterprise Application",
    "description": "Improved the map visualization in an internal package management tool used to configure and price product bundles.",
    "image": "bg-brand-highlight",
    "stack": [
      "React (Vite)",
      "NestJS",
      "PostgreSQL",
      "Google Maps API"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "Product analysts configured geographic pricing packages blindly, without map-based visual context, leading to placement errors.",
    "solution": "Integrated Google Maps API with Street View support directly into the React (Vite) frontend. Connected geographic coordinates dynamically to the NestJS backend to draw interactive service boundaries.",
    "features": [
      "Package location visualization",
      "Google Maps integration",
      "Street View support",
      "Integration with existing services"
    ],
    "impact": [
      "Allowed analysts to visually audit pricing regions, reducing package placement errors and speed of approval."
    ],
    "evidence": [],
    "tags": [
      "Enterprise",
      "Web"
    ]
  },
  {
    "id": 8,
    "title": "SCONE – Order Management System",
    "subtitle": "Migrating Legacy Architectures while Maintaining Real-Time Statuses",
    "category": "Enterprise Application",
    "description": "Helped migrate the legacy order management UI at Telkom Indonesia to Next.js and worked on connecting the order flow to downstream systems.",
    "image": "bg-brand-highlight",
    "stack": [
      "Next.js",
      "Zend Framework",
      "Oracle"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "The legacy Zend Framework UI was slow and failed to meet updated corporate design patterns, causing drag on administrative workflows. Crucially, order sync states with oracle DBs could not be interrupted.",
    "solution": "Rebuilt ordering screens into Next.js using corporate brutalist guidelines. Wrote stable integration APIs to bridge Next.js events with legacy Oracle procedures, ensuring consistent state tracking without breaking existing processes.",
    "features": [
      "UI migration from Zend Framework to Next.js",
      "Updated interface based on existing design standards",
      "Order status synchronization",
      "Integration with related systems"
    ],
    "impact": [
      "Improved UI response speed and ensured 100% data consistency for active enterprise customer orders."
    ],
    "evidence": [
      "/assets/scone/1.jpg"
    ],
    "tags": [
      "Enterprise",
      "Web"
    ]
  },
  {
    "id": 9,
    "title": "DMS – Document Management System",
    "subtitle": "Safe Document Operations with Object Storage Abstraction",
    "category": "Enterprise Application",
    "description": "Built a document landing page with CRUD support for an internal Telkom Indonesia document system, used for uploads and accessed by other internal tools.",
    "image": "bg-brand-highlight",
    "stack": [
      "Zend Framework",
      "jQuery",
      "REST API",
      "MinIO",
      "PostgreSQL"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "Handling bulk document uploads and deletions was prone to sync failures. Accidental deletion in object storage is irreversible, posing a data-loss risk for audit records.",
    "solution": "Built a secure document pipeline integrated with MinIO object storage. Instead of hard deletions, implemented state transitions (soft-delete tags) and clean transaction layers in Zend Framework/jQuery to safeguard documents.",
    "features": [
      "Document upload and management",
      "CRUD operations with metadata",
      "Integration with other systems",
      "Structured document storage using MinIO"
    ],
    "impact": [
      "Unified file storage across internal tools and eliminated accidental asset deletion risks completely."
    ],
    "evidence": [
      "/assets/dms/1.jpg",
      "/assets/dms/2.jpg",
      "/assets/dms/3.jpg"
    ],
    "tags": [
      "Enterprise",
      "Web"
    ]
  },
  {
    "id": 10,
    "title": "PPT – Master Data Management",
    "subtitle": "Accelerating Administrative Task Entry via UI Revamps",
    "category": "Enterprise Application",
    "description": "Migrated a Master Data Management frontend from PHP to Next.js, fixing usability issues and aligning it with the team's existing UI patterns.",
    "image": "bg-brand-highlight",
    "stack": [
      "Next.js"
    ],
    "link": "#",
    "isPrivate": true,
    "challenge": "Tight delivery deadlines under shifting requirements. Administrators were bogged down by an outdated PHP table design with poor validation.",
    "solution": "Worked closely with system analysts to define edge cases early. Rebuilt the frontend in Next.js with unified input components and inline validation guidelines.",
    "features": [
      "UI migration from PHP to Next.js",
      "Updated interface based on existing standards",
      "Frontend improvements for usability"
    ],
    "impact": [
      "Delivered on schedule and improved data-entry speed for internal system administrators."
    ],
    "evidence": [
      "/assets/ppt/1.jpg"
    ],
    "tags": [
      "Enterprise",
      "Web"
    ]
  },
  {
    "id": 11,
    "title": "PABOI: Indonesia Orthopedic Association Web Platform",
    "subtitle": "Accelerating Project Velocity by Shifting to Full-Stack Execution",
    "category": "Full Stack Intern Project",
    "description": "Contributed to building the official member portal and management system for the Indonesian Orthopaedic Association (PABOI).",
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
    "challenge": "Joining the team as a backend-only intern, there was a backlog of pending user interface tickets that delayed features. Communication gaps between frontend and backend components frequently stalled progress.",
    "solution": "Quickly ramped up on the team's processes and expanded my role from backend Ruby on Rails to full-stack, taking on ReactJS responsibilities midway through the internship. Directly resolved frontend usability bugs and aligned API endpoints.",
    "features": [
      "Bug fixing on backend and frontend",
      "Small feature updates",
      "Team collaboration across roles",
      "Task tracking using Kanban"
    ],
    "evidence": [
      "/assets/paboi/1.png"
    ],
    "impact": [
      "Accelerated features to completion, cleared the backlog of UI issues, and delivered a stable, responsive member portal on time."
    ],
    "tags": [
      "Web"
    ]
  },
  {
    "id": 12,
    "title": "JTK Berbagi – Donation Management Platform",
    "subtitle": "Digitalizing Social Fundraising for the Academic Community",
    "category": "Others",
    "description": "Built a donation management platform for POLBAN's Computer Engineering Department — covers campaign setup, transaction tracking, and distribution logging.",
    "image": "bg-brand-highlight",
    "stack": [
      "Ruby on Rails",
      "ReactJS",
      "MySQL",
      "Waterfall Methodology",
      "REST API"
    ],
    "link": "https://github.com/gemintangsf/tugas_akhir/tree/main",
    "isPrivate": false,
    "evidence": [
      "/assets/jtkberbagi/1.png",
      "/assets/jtkberbagi/2.png"
    ],
    "challenge": "Traditional donation processes in the department were manual and opaque, leading to accounting delays. Needs and requirements shifted dynamically during development, requiring close alignment with the frontend team.",
    "solution": "Followed systematic requirement analysis to build a donation engine using Ruby on Rails and MySQL. Coordinated closely with the ReactJS frontend developer to model clean API endpoints and design secure role-based access for campaign admins and donors.",
    "features": [
      "Donation campaign management",
      "Donor and recipient data tracking",
      "Transaction recording and reporting",
      "Role-based access",
      "Structured donation workflow"
    ],
    "impact": [
      "Established a transparent, auditable platform that simplified donation campaign setups and digital tracking of social funds."
    ],
    "tags": [
      "Others",
      "Web"
    ]
  },
  {
    "id": 13,
    "title": "Sinbada",
    "subtitle": "Structuring Regional Asset Audits with MongoDB",
    "category": "Others",
    "description": "Built a web-based inventory system in a university team project to manage asset and stock data.",
    "image": "bg-brand-highlight",
    "stack": [
      "ReactJS",
      "Ruby on Rails",
      "MongoDB",
      "Azure",
      "Git Team Workflow"
    ],
    "link": "https://github.com/SekelompokOrangKuat/ProjectInventaris/tree/dev",
    "isPrivate": false,
    "challenge": "Scaling relational records to handle dynamic, unstructured asset descriptions and categorization rules from diverse offices.",
    "solution": "Leveraged MongoDB and Ruby on Rails to design a schema-flexible document database. Hosted the service on Azure and worked within a multi-member team to integrate asset tracking utilities.",
    "features": [
      "Asset and inventory management",
      "CRUD operations",
      "Role-based access",
      "Team-based development"
    ],
    "evidence": [
      "/assets/sinbada/1.jpg"
    ],
    "impact": [
      "Created a flexible inventory system capable of adapting to varying regional asset data formats without structural migrations."
    ],
    "tags": [
      "Others",
      "Web"
    ]
  },
  {
    "id": 14,
    "title": "Siinvent",
    "subtitle": "Foundational Experience in RESTful APIs and Database Norms",
    "category": "Others",
    "description": "Earlier university team project — a basic web inventory system for tracking stock and inventory records.",
    "image": "bg-brand-highlight",
    "stack": [
      "Express.js",
      "ReactJS",
      "PostgreSQL",
      "REST API Development"
    ],
    "link": "https://github.com/SekelompokOrangKuat/PROJECTCUAN/tree/backend",
    "isPrivate": false,
    "challenge": "First experience working in a collaborative team repository, resolving database integration limits and avoiding git conflict bottlenecks.",
    "solution": "Designed and implemented RESTful backend APIs using Express.js and PostgreSQL. Kept branch management strict and standardized request models.",
    "features": [
      "Inventory data management",
      "Basic stock tracking",
      "User authentication",
      "Team-based development"
    ],
    "evidence": [
      "/assets/siinvent/2.jpg"
    ],
    "impact": [
      "Successfully delivered standard inventory control software with secure database relations."
    ],
    "tags": [
      "Others",
      "Web"
    ]
  }
];
