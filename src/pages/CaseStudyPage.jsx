import { useParams, Link } from 'react-router-dom';
import { statpulseData } from '../data/statpulseData';
import './CaseStudyPage.css';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = statpulseData.nbaCaseStudies[slug];

  if (!study) {
    return (
      <div className="case-study-page">
        <p>That case study isn't available yet.</p>
        <Link to="/">← Back home</Link>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <h1 className="case-study-page-title">{study.title}</h1>
      <div className="case-study-pdf-wrap">
        <iframe src={study.pdfUrl} title={study.title} />
      </div>
    </div>
  );
}