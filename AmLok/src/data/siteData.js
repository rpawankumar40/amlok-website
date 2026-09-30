import softwareEngineeringImage from '../assets/images/services/software-engineering-scene.avif';
import cloudDevopsImage from '../assets/images/services/cloud-devops-scene.avif';
import dataAnalyticsImage from '../assets/images/services/data-analytics-scene.avif';
import aiAutomationImage from '../assets/images/services/ai-automation-scene.avif';
import qualityEngineeringImage from '../assets/images/services/quality-engineering-scene.avif';
import enterpriseSolutionsImage from '../assets/images/services/enterprise-solutions-scene.avif';

import digitalTransformationImage from '../assets/images/solutions/digital-transformation-scene.avif';
import cloudModernizationImage from '../assets/images/solutions/cloud-modernization-scene.avif';
import applicationModernizationImage from '../assets/images/solutions/application-modernization-scene.avif';
import aiSolutionsImage from '../assets/images/solutions/ai-powered-solutions-scene.avif';
import dataModernizationImage from '../assets/images/solutions/data-modernization-scene.avif';
import intelligentAutomationImage from '../assets/images/solutions/intelligent-automation-scene.avif';

import appDevelopement from '../assets/images/homeServices/application-development.avif';
import cloudDevops from '../assets/images/homeServices/cloud-and-devops.avif';
import dataAnalytics from '../assets/images/homeServices/data-and-analytics.avif';
import aiAutomation from '../assets/images/homeServices/ai-and-automation.avif';
import digitalEng from '../assets/images/homeServices/digital-engineering.avif';
import enterpriseSol from '../assets/images/homeServices/enterprise-solutions.avif';
import qualityEng from '../assets/images/homeServices/quality-engineering.avif';
import itConsulting from '../assets/images/homeServices/it-consulting.avif';





export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Insights', path: '/insights' },
  { label: 'Careers', path: '/careers' },
//   { label: 'Contact Us', path: '/contact' },
]

export const stats = [
  { value: 14, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Technology Professionals' },
  { value: 700, suffix: '+', label: 'Projects Delivered' },
  { value: 120, suffix: '+', label: 'Global Clients' },
]

export const services = [
  {
    title: 'Application Development',
    description: 'Custom software engineering for business-critical platforms, portals, and products that scale with your growth.',
    img: appDevelopement
  },
  {
    title: 'Cloud & DevOps',
    description: 'Modern cloud strategy, infrastructure automation, and continuous delivery for resilient, high-velocity teams.',
    img: cloudDevops
  },
  {
    title: 'Data & Analytics',
    description: 'Data platforms, analytics modernization, and decision support systems designed for operational clarity.',
    img: dataAnalytics
  },
  {
    title: 'AI & Automation',
    description: 'Applied AI transformation with workflow automation, intelligent decisioning, and measurable ROI.',
    img: aiAutomation
  },
  {
    title: 'Digital Engineering',
    description: 'End-to-end product engineering bringing design, systems, data, and delivery into one connected capability.',
    img: digitalEng
  },
  {
    title: 'Enterprise Solutions',
    description: 'Large-scale integrations, platform strategy, and modernization programs built for enterprise complexity.',
    img: enterpriseSol
  },
  {
    title: 'Quality Engineering',
    description: 'Risk-aware testing strategies that improve release confidence and reduce operational disruption.',
    img: qualityEng
  },
  {
    title: 'IT Consulting',
    description: 'Technology advisory and transformation planning that translates strategy into actionable delivery roadmaps.',
    img: itConsulting
  },
]

export const transformationAreas = [
  'Modern Application Engineering',
  'Cloud Transformation',
  'Data Modernization',
  'AI & Automation',
  'Enterprise Integration',
]

export const industries = [
  { name: 'Banking & Financial Services', description: 'Secure digital banking, risk modernization, and customer experience platforms.' },
  { name: 'Healthcare', description: 'HIPAA-aware systems, patient engagement, and operational data platforms.' },
  { name: 'Retail & E-Commerce', description: 'Omnichannel experiences, product intelligence, and commerce modernization.' },
  { name: 'Manufacturing', description: 'Connected operations, supply visibility, and process automation.' },
  { name: 'Telecommunications', description: 'Network and customer experience platforms built for scale and reliability.' },
  { name: 'Technology', description: 'Product acceleration, platform engineering, and digital innovation support.' },
  { name: 'Logistics', description: 'Optimization platforms for fleet, operations, and fulfillment visibility.' },
  { name: 'Energy', description: 'Resilient technology systems supporting transition, operations, and reliability.' },
]

export const technologies = {
  Backend: ['Java', 'Spring Boot', 'Node.js', 'Python'],
  Frontend: ['React', 'Angular'],
  Cloud: ['AWS', 'Azure', 'Google Cloud'],
  DevOps: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  Data: ['PostgreSQL', 'MySQL', 'MongoDB', 'Kafka'],
  AI: ['Generative AI', 'Machine Learning', 'Intelligent Automation'],
}

export const differentiators = [
  { title: 'Engineering Excellence', description: 'Disciplined engineering practices create dependable products built to perform and scale.' },
  { title: 'Customer-Centric Approach', description: 'Delivery is shaped around your priorities, users, and measurable business outcomes.' },
  { title: 'Scalable Solutions', description: 'Adaptable architectures support changing demand without compromising resilience.' },
  { title: 'Agile Delivery', description: 'Iterative teams turn clear priorities into steady, visible delivery progress.' },
  { title: 'Security & Reliability', description: 'Security and operational resilience are built into every stage of delivery.' },
  { title: 'Continuous Innovation', description: 'Practical use of modern technology keeps platforms ready for what comes next.' },
]

export const serviceCategories = [
  {
    title: 'Software Engineering',
    image: softwareEngineeringImage,
    imageAlt: 'Code editor connected to API endpoints and modular application services',
    description: 'Build scalable, secure, and resilient enterprise applications designed for performance and long-term growth.',
    items: [
      'Custom Application Development',
      'Enterprise Application Development',
      'API Development',
      'Microservices',
      'Application Modernization',
    ],
  },
  {
    title: 'Cloud & DevOps',
    image: cloudDevopsImage,
    imageAlt: 'Cloud deployment pipeline connecting container builds, Kubernetes services, and live monitoring',
    description: 'Accelerate delivery with cloud-native engineering, resilient infrastructure, and automated operational excellence.',
    items: [
      'Cloud Migration',
      'Cloud-Native Development',
      'Kubernetes',
      'CI/CD',
      'Infrastructure Automation',
    ],
  },
  {
    title: 'Data & Analytics',
    image: dataAnalyticsImage,
    imageAlt: 'Business intelligence dashboard with live metrics, trend charts, and connected data feeds',
    description: 'Turn operational complexity into actionable insight with integrated data platforms and modern analytics capability.',
    items: [
      'Data Engineering',
      'Business Intelligence',
      'Data Modernization',
      'Real-Time Analytics',
    ],
  },
  {
    title: 'AI & Automation',
    image: aiAutomationImage,
    imageAlt: 'Machine learning model routing business data through automated decisions and actions',
    description: 'Unlock business value with applied AI, intelligent workflows, and automation designed for measurable outcomes.',
    items: [
      'Generative AI',
      'Intelligent Automation',
      'AI Integration',
      'Machine Learning',
    ],
  },
  {
    title: 'Quality Engineering',
    image: qualityEngineeringImage,
    imageAlt: 'Automated test pipeline with API validation, browser checks, and release quality results',
    description: 'Improve release confidence and reduce risk through disciplined testing, automation, and quality engineering practices.',
    items: [
      'Automation Testing',
      'API Testing',
      'Performance Testing',
      'Quality Engineering',
    ],
  },
  {
    title: 'Enterprise Solutions',
    image: enterpriseSolutionsImage,
    imageAlt: 'Enterprise architecture linking business applications, API services, and shared data platforms',
    description: 'Design and deliver enterprise-scale platforms that connect strategy, operations, data, and customer experience.',
    items: [
      'Digital Experience Platforms',
      'Integration Strategy',
      'Platform Engineering',
      'Transformation Programs',
      'Operational Intelligence',
    ],
  },
]

export const solutions = [
  {
    title: 'Digital Transformation',
    image: digitalTransformationImage,
    imageAlt: 'Traditional enterprise systems transitioning to connected digital services and customer channels',
    description: 'Modernize customer experiences, business processes, and technology platforms to create connected digital operations.',
  },
  {
    title: 'Cloud Modernization',
    image: cloudModernizationImage,
    imageAlt: 'On-premises server workloads migrating into a cloud platform with containerized services',
    description: 'Move critical workloads toward scalable cloud architectures with improved resilience, automation, and operational efficiency.',
  },
  {
    title: 'Enterprise Application Modernization',
    image: applicationModernizationImage,
    imageAlt: 'Legacy application decomposed into an API gateway and independent cloud-native services',
    description: 'Modernize legacy applications using scalable architectures, APIs, and cloud-native engineering practices.',
  },
  {
    title: 'AI-Powered Solutions',
    image: aiSolutionsImage,
    imageAlt: 'AI insights embedded in a business application to guide decisions and automate workflow steps',
    description: 'Apply AI and generative AI capabilities to automate workflows, improve decision-making, and create intelligent experiences.',
  },
  {
    title: 'Data Modernization',
    image: dataModernizationImage,
    imageAlt: 'Enterprise data sources flowing through ingestion into a cloud data platform and analytics dashboard',
    description: 'Build modern data platforms that enable reliable integration, real-time insights, and analytics at enterprise scale.',
  },
  {
    title: 'Intelligent Automation',
    image: intelligentAutomationImage,
    imageAlt: 'Connected business systems executing an automated workflow with an intelligent decision branch',
    description: 'Automate repetitive business processes and engineering workflows to improve efficiency, consistency, and agility.',
  },
]

export const insights = [
  { title: 'Digital Transformation', category: 'Strategy', description: 'Modernization approaches that align technology investments with measurable business outcomes.' },
  { title: 'Generative AI', category: 'AI', description: 'How enterprise AI programs can move from experimentation to secure, scalable delivery.' },
  { title: 'Cloud Computing', category: 'Infrastructure', description: 'Cloud migration patterns that balance speed, cost, risk, and operational resilience.' },
  { title: 'Software Engineering', category: 'Engineering', description: 'Delivery models that improve quality, release velocity, and platform consistency.' },
  { title: 'Data & Analytics', category: 'Insights', description: 'The analytics architecture patterns behind faster decisions across the business.' },
  { title: 'DevOps', category: 'Operations', description: 'Best practices for automated release pipelines, observability, and delivery confidence.' },
]

export const jobs = [
  { title: 'Senior Full Stack Engineer', experience: '5+ years', location: 'Hybrid in Virtual, IL, US', tech: 'React, Java, AWS' },
  { title: 'Cloud Solutions Architect', experience: '7+ years', location: 'White Plains, NY, US', tech: 'AWS, Kubernetes, Terraform' },
  { title: 'Data Engineer', experience: '4+ years', location: 'Dallas, TX, US', tech: 'Python, PostgreSQL, Kafka' },
  { title: 'AI Product Engineer', experience: '3+ years', location: 'Springfield, VA, US', tech: 'Python, ML, GenAI' },
]

export const faqItems = [
  {
    question: 'What types of clients do you work with?',
    answer: 'We support enterprises, mid-market organizations, and fast-growing digital businesses across banking, healthcare, retail, manufacturing, and technology sectors.',
  },
  {
    question: 'Do you support digital transformation programs?',
    answer: 'Yes. Our team helps organizations modernize legacy systems, cloud platforms, data architectures, and customer-facing solutions with a clear transformation roadmap.',
  },
  {
    question: 'Can your team work alongside internal engineering groups?',
    answer: 'Absolutely. We often work as an embedded partner, product engineering team, or advisory capability that extends internal delivery capacity.',
  },
]
