export const slugify = (value = '') =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const projects = [
  {
    id: 1,
    title: 'PCPriceGear',
    description:
      'A PC component discovery and price comparison platform with smart recommendations, wishlist support, and stock-aware shopping flows.',
    fullDescription:
      'PCPriceGear is a full-stack platform for exploring PC components, comparing prices, and making more informed buying decisions. It brings product discovery, comparison tools, recommendations, wishlist management, stock updates, and assistance features into one experience so users can build or upgrade PCs more efficiently.',
    imageUrl: '/BDPriceGear/Screenshot (522).png',
    link: 'https://bdpricegear.vercel.app/',
    github: 'https://github.com/TahmidMuntaser/BDPriceGear-Frontend',
    tags: [
      'Django',
      'Next.js',
      'Tailwind CSS',
      'Django REST Framework',
      'PostgreSQL',
      'SQLite',
      'GitHub Action'
    ],
    features: [
      'Built a price comparison platform covering 12+ categories and 22K+ PC products aggregated from 10+ Bangladeshi e-commerce sites.',
      'Implemented real-time and scheduled web scraping pipelines with anti-bot bypass, caching, and automated data collection.',
      'Created a side-by-side price comparison table with product images, direct purchase links, and a 5-minute TTL cache for faster responses.',
      'Built a centralized product catalog with pre-scraped database support, product detail views, and filtering for easier discovery.',
      'Added user services including wishlist tracking, out-of-stock subscriptions, and email alerts when products return in stock.',
      'Developed recommendation and chatbot features to answer product questions and suggest cheaper, similar-price, or higher-price alternatives.'
    ],
    gallery: [
      '/BDPriceGear/catalog.png',
      '/BDPriceGear/DETAILS.png',
      '/BDPriceGear/price compaer.png',
      '/BDPriceGear/recom.png',
      '/BDPriceGear/wishlist.png',
      '/BDPriceGear/outofstock.png',
      '/BDPriceGear/chatbot.png',
      '/BDPriceGear/email.png',
      '/BDPriceGear/Screenshot (519).png',
      '/BDPriceGear/Screenshot (522).png',
      '/BDPriceGear/Screenshot (523).png'
    ]
  },
  {
    id: 2,
    title: 'AutoCP',
    description:
      'Automated problem generation platform for competitive programming based on selected topics and difficulty ratings.',
    fullDescription:
      'AutoCP is an advanced platform designed to automate the generation of programming problems and test cases. The system allows users to select topics and difficulty levels, automatically generating comprehensive problem sets with validated test cases. It streamlines the process of creating programming challenges for educational purposes and competitive programming practice.',
    imageUrl: '/AutoCP/AutoCP1.png',
    link: 'https://auto-cp.vercel.app/',
    github: 'https://github.com/TahmidMuntaser/AutoCP',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Automated problem set generation based on selected topic and difficulty rating',
      'Interactive UI for test case generation and validation workflows',
      'Correct input-output handling with comprehensive validation',
      'Interactive forms to collect user constraints and display generated content',
      'Integration with backend APIs for problem generation and validation',
      'Real-time display of generated problems and test cases',
      'User-friendly interface for competitive programming practice'
    ],
    gallery: [
      '/AutoCP/AutoCP1.png',
      '/AutoCP/AutoCP2.png',
      '/AutoCP/AutoCP3.png',
      '/AutoCP/AutoCP4.png',
      '/AutoCP/AutoCP5.png',
      '/AutoCP/AutoCP6.png',
      '/AutoCP/AutoCP7.png',
      '/AutoCP/AutoCP8.png',
      '/AutoCP/AutoCP9.png'
    ]
  },
  {
    id: 3,
    title: 'ReliefLink',
    description:
      'A platform to connect relief organizations, volunteers, and affected individuals, ensuring resources are efficiently allocated to areas in need.',
    fullDescription:
      'The purpose is to ensure efficient resource distribution, real-time status tracking, and transparent communication. The project aims to connect relief organizations, volunteers, and affected individuals, ensuring resources are efficiently allocated to areas in need. The primary goals of this Relief Link platform are to ensure that relief resources reach the most affected areas efficiently, reducing waste and avoiding overlap in aid distribution.',
    imageUrl: '/ReliefLink0.png',
    link: 'https://',
    github: 'https://github.com/TahmidMuntaser/ReliefLink',
    tags: ['Html', 'CSS', 'Django', 'SQLite3'],
    features: [
      'Built a role-based dashboard for different users like DCs, UNOs, and Ward Members with separate permissions.',
      'Added real-time tracking of family needs and resource supplies to avoid duplication.',
      'Created a simple and responsive UI for volunteers to easily update family and flood data.',
      'Added status reports and visual tracking to monitor which areas are most affected.',
      'Improved communication between local authorities and volunteers for faster relief work.'
    ],
    gallery: [
      '/ReliefLink/ReliefLink1.png',
      '/ReliefLink/ReliefLink2.png',
      '/ReliefLink/ReliefLink3.png',
      '/ReliefLink/ReliefLink4.png',
      '/ReliefLink/ReliefLink5.png',
      '/ReliefLink/ReliefLink6.png',
      '/ReliefLink/ReliefLink7.png',
      '/ReliefLink/ReliefLink8.png',
      '/ReliefLink/ReliefLink9.png'
    ]
  },
  {
    id: 4,
    title: 'AutoDocs',
    description:
      'Fast, secure, and user-friendly platform for managing and accessing academic documents with verified delivery and payment options.',
    fullDescription:
      'Seamlessly access and download your academic records and certificates with fast, secure payment options. AutoDocs ensures verified delivery of your important documents, providing a hassle-free experience for students and educational institutions alike.',
    imageUrl: '/AutoDocs/AutoDocs.png',
    link: 'https://auto-docs.onrender.com/',
    github: 'https://github.com/TahmidMuntaser/AutoDocs-Cse',
    tags: ['React', 'Vite', 'Django', 'Tailwind CSS', 'SQLite3'],
    features: [
      'Instant document generation with university approval',
      'Users can request and download Marksheet, Transcript, Migration Certificate, Testimonial, and more',
      'Secure and verified digital signatures',
      '24/7 access from any device',
      'Both online and offline payment options',
      'Verified delivery via email or physical copy',
      'User-friendly interface for easy navigation',
      'Robust security measures to protect personal data',
      'Mobile responsive design'
    ],
    gallery: [
      '/AutoDocs/AutoDocs1.png',
      '/AutoDocs/AutoDocs2.png',
      '/AutoDocs/AutoDocs3.png',
      '/AutoDocs/AutoDocs4.png',
      '/AutoDocs/AutoDocs5.png',
      '/AutoDocs/AutoDocs6.png',
      '/AutoDocs/AutoDocs7.png',
      '/AutoDocs/AutoDocs8.png'
    ]
  }
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => slugify(project.title) === slug) ?? null;