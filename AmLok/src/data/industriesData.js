import bankingImage from '../assets/industries/banking-financial-services.avif';
import healthcareImage from '../assets/industries/healthcare-life-sciences.avif';
import retailImage from '../assets/industries/retail-ecommerce.avif';
import manufacturingImage from '../assets/industries/manufacturing.avif';
import telecomImage from '../assets/industries/telecommunications.avif';
import technologyImage from '../assets/industries/technology-software.avif';
import logisticsImage from '../assets/industries/logistics-transportation.avif';
import energyImage from '../assets/industries/energy-utilities.avif';

export const industryCards = [
  {
    id: 'banking-financial-services',
    slug: 'banking-financial-services',
    number: '01',
    name: 'Banking & Financial Services',
    route: '/industries/banking-financial-services',
    description: 'Build secure digital banking experiences and modern financial platforms that turn trusted data into better decisions.',
    image: bankingImage,
    imageAlt: 'Digital banking platform connecting secure payments, account services, and financial analytics',
    capabilities: ['Digital Banking', 'Payments & Transaction Platforms', 'Risk & Financial Analytics', 'Secure Data Integration', 'Core Banking Modernization'],
  },
  {
    id: 'healthcare-life-sciences',
    slug: 'healthcare-life-sciences',
    number: '02',
    name: 'Healthcare & Life Sciences',
    route: '/industries/healthcare-life-sciences',
    description: 'Connect patient experiences, clinical systems, and healthcare data with secure digital platforms.',
    image: healthcareImage,
    imageAlt: 'Connected healthcare technology platform linking patient services, clinical data, and remote monitoring',
    capabilities: ['Patient Engagement Platforms', 'Telemedicine & Remote Care', 'Clinical Data Integration', 'Healthcare Analytics', 'Interoperability & Security'],
  },
  {
    id: 'retail-ecommerce',
    slug: 'retail-ecommerce',
    number: '03',
    name: 'Retail & E-Commerce',
    route: '/industries/retail-ecommerce',
    description: 'Unify digital commerce, personalized customer journeys, and fulfillment operations across channels.',
    image: retailImage,
    imageAlt: 'Digital commerce ecosystem linking storefront, personalized customer journey, inventory, and fulfillment analytics',
    capabilities: ['Digital Commerce Platforms', 'Customer Experience & Personalization', 'Product & Catalog Systems', 'Inventory Visibility', 'Omnichannel Analytics'],
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    number: '04',
    name: 'Manufacturing',
    route: '/industries/manufacturing',
    description: 'Connect factory operations, industrial assets, and supply networks for more intelligent production.',
    image: manufacturingImage,
    imageAlt: 'Connected smart factory with industrial equipment, IoT sensors, production monitoring, and predictive maintenance',
    capabilities: ['Smart Factory & Industry 4.0', 'Industrial IoT Integration', 'Predictive Maintenance', 'Production Analytics', 'Supply Chain Visibility'],
  },
  {
    id: 'telecommunications',
    slug: 'telecommunications',
    number: '05',
    name: 'Telecommunications',
    route: '/industries/telecommunications',
    description: 'Modernize network operations and customer platforms for data-driven, connected services at scale.',
    image: telecomImage,
    imageAlt: 'Telecommunications network connecting 5G towers, customer systems, and real-time network analytics',
    capabilities: ['5G & Network Modernization', 'OSS/BSS Platforms', 'Network Analytics', 'Customer Experience Systems', 'Service Orchestration'],
  },
  {
    id: 'technology-software',
    slug: 'technology-software',
    number: '06',
    name: 'Technology & Software',
    route: '/industries/technology-software',
    description: 'Engineer and operate resilient digital products, SaaS platforms, and cloud-native ecosystems.',
    image: technologyImage,
    imageAlt: 'Software platform architecture connecting application interfaces, APIs, cloud services, and delivery pipelines',
    capabilities: ['Product Engineering', 'SaaS Platform Development', 'Cloud & Platform Engineering', 'API Ecosystems', 'DevOps & Reliability'],
  },
  {
    id: 'logistics-transportation',
    slug: 'logistics-transportation',
    number: '07',
    name: 'Logistics & Transportation',
    route: '/industries/logistics-transportation',
    description: 'Improve movement of goods and fleets with connected logistics platforms and real-time operational insight.',
    image: logisticsImage,
    imageAlt: 'Logistics network connecting distribution warehouses, tracked vehicles, optimized routes, and shipment data',
    capabilities: ['Fleet Management', 'Shipment Tracking', 'Route Optimization', 'Warehouse & Fulfillment Systems', 'Supply Chain Analytics'],
  },
  {
    id: 'energy-utilities',
    slug: 'energy-utilities',
    number: '08',
    name: 'Energy & Utilities',
    route: '/industries/energy-utilities',
    description: 'Connect grid assets, field operations, and energy data to support resilient, intelligent utility services.',
    image: energyImage,
    imageAlt: 'Smart energy grid connecting renewable generation, substations, utility assets, and live monitoring',
    capabilities: ['Smart Grid & Metering', 'Energy Analytics', 'Asset Performance Management', 'Industrial IoT', 'Operations Modernization'],
  },
];