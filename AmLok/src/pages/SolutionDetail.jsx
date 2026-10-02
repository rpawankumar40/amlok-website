import { useParams } from 'react-router-dom';
import DetailPage from '../components/details/DetailPage';
import { serviceCategories, solutions } from '../data/siteData';
import { solutionDetailContent } from '../data/detailPageData';
import NotFound from './NotFound';

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((item) => item.slug === slug);
  const content = solutionDetailContent[slug];

  if (!solution || !content) return <NotFound />;

  const relatedSolutions = content.related
    .map((relatedSlug) => solutions.find((item) => item.slug === relatedSlug))
    .filter(Boolean);
  const relatedServices = serviceCategories.filter((item) => content.related.includes(item.slug));

  return (
    <DetailPage
      kind="solution"
      item={solution}
      content={content}
      relatedServices={relatedServices}
      relatedSolutions={relatedSolutions}
    />
  );
}