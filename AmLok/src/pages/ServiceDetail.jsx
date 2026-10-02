import { useParams } from 'react-router-dom';
import DetailPage from '../components/details/DetailPage';
import { serviceCategories, solutions } from '../data/siteData';
import { serviceDetailContent } from '../data/detailPageData';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceCategories.find((item) => item.slug === slug);
  const content = serviceDetailContent[slug];

  if (!service || !content) return <NotFound />;

  const relatedServices = content.related
    .map((relatedSlug) => serviceCategories.find((item) => item.slug === relatedSlug))
    .filter(Boolean);
  const relatedSolutions = solutions.filter((item) => content.related.includes(item.slug));

  return (
    <DetailPage
      kind="service"
      item={service}
      content={content}
      relatedServices={relatedServices}
      relatedSolutions={relatedSolutions}
    />
  );
}