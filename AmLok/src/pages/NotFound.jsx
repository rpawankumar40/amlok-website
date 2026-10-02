import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';

export default function NotFound() {
  return (
    <div className="page-content">
      <section className="page-section">
        <div className="container narrow detail-not-found">
          <SectionHeading
            eyebrow="Page Not Found"
            title="The requested AmLok page could not be found."
            text="The link may be outdated, or the page may have moved."
          />
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </div>
  );
}