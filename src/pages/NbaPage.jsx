import { useParams, Navigate } from 'react-router-dom';
import { statpulseData } from '../data/statpulseData';
import Sidebar from '../components/Sidebar';
import SectionLayout from '../components/SectionLayout';
import ChartGrid from '../components/ChartGrid';

export default function NbaPage() {
  const { category } = useParams();
  const { nav, pages } = statpulseData.nba;

  if (!category) {
    return <Navigate to={`/nba/${nav[1]?.slug || nav[0]?.slug}`} replace />;
  }

  const sidebarItems = nav.map((n) => ({ to: `/nba/${n.slug}`, label: n.label }));
  const sections = pages[category];
  const activeLabel = nav.find((n) => n.slug === category)?.label;

  return (
    <SectionLayout
      sidebar={<Sidebar items={sidebarItems} accent="nba" title="2023–24 Season" />}
    >
      {sections ? (
        <ChartGrid sections={sections} pageTitle={activeLabel} />
      ) : (
        <div style={{ padding: 32, color: 'var(--color-text-dim)' }}>
          That category isn't available yet.
        </div>
      )}
    </SectionLayout>
  );
}
