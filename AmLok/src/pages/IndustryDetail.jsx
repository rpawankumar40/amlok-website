import { useParams } from 'react-router-dom';
import IndustryDetailPage from '../components/details/IndustryDetailPage';
import { industries } from '../data/siteData';
import { industryDetailContent } from '../data/detailPageData';
import NotFound from './NotFound';

const industryNamesBySlug = {
  'banking-financial-services': 'Banking & Financial Services',
  'healthcare-life-sciences': 'Healthcare',
  'retail-ecommerce': 'Retail & E-Commerce',
  manufacturing: 'Manufacturing',
  telecommunications: 'Telecommunications',
  'technology-software': 'Technology',
  'logistics-transportation': 'Logistics',
  'energy-utilities': 'Energy',
};

function slugToLabel(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function IndustryDetail() {
  const { slug } = useParams();
  const content = industryDetailContent[slug];

  if (!content) return <NotFound />;

  const configuredName = industryNamesBySlug[slug] || slugToLabel(slug);
  const sourceIndustry = industries.find((item) => item.name === configuredName);

  console.log("sourceIndustry", sourceIndustry, industries, configuredName)

  const item = {
    name: sourceIndustry?.name || configuredName,
    description: sourceIndustry?.description || content.landscape,
    image: sourceIndustry?.image || '',
    imageAlt: sourceIndustry?.imageAlt || `${configuredName} industry`,
    industryServiceCards: sourceIndustry?.industryServiceCards || [],
  };

  return <IndustryDetailPage item={item} content={content} />;
}
