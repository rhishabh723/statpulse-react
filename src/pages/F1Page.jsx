import { useParams, Navigate } from 'react-router-dom';
import { statpulseData } from '../data/statpulseData';
import Sidebar from '../components/Sidebar';
import SubHeader from '../components/SubHeader';
import SectionLayout from '../components/SectionLayout';
import ChartGrid from '../components/ChartGrid';

const SEASON_ORDER = ['2026','2025', '2024', '2023', '2022', '2021', '2020'];

function buildSeasonSwitcherItems() {
  const items = SEASON_ORDER.map((year) => ({
    to: `/f1/${year}`,
    label: year,
  }));
  items.unshift({ to: '/f1/all-time', label: 'All Time' });
  items.push({ to: '/f1/historic', label: 'Track Data' });
  return items;
}

export default function F1Page() {
  const { season, race } = useParams();
  const switcherItems = buildSeasonSwitcherItems();

  // ---- All-time summary page ----
  if (season === 'all-time') {
    const sections = statpulseData.f1Top.pages.formula_one;
    return (
      <>
        <SubHeader items={switcherItems} accent="f1" />
        <div style={{ padding: '32px 28px 80px', maxWidth: 1400 }}>
          <ChartGrid sections={sections} pageTitle="All-Time Records" />
        </div>
      </>
    );
  }

  // ---- Historic track-level data (tracks summary + per-GP pages) ----
  if (season === 'historic') {
    if (!race) {
      const sections = statpulseData.f1Top.pages.formula_one_tracks;
      const sidebarItems = statpulseData.f1Historic.nav.map((n) => ({
        to: `/f1/historic/${n.slug.replace('historic/', '')}`,
        label: n.label,
      }));
      return (
        <>
          <SubHeader items={switcherItems} accent="f1" />
          <SectionLayout sidebar={<Sidebar items={sidebarItems} accent="f1" title="By Circuit" />}>
            <ChartGrid sections={sections} pageTitle="Track-Level Data" />
          </SectionLayout>
        </>
      );
    }

    const fullSlug = `historic/${race}`;
    const sections = statpulseData.f1Historic.pages[fullSlug];
    const sidebarItems = statpulseData.f1Historic.nav.map((n) => ({
      to: `/f1/historic/${n.slug.replace('historic/', '')}`,
      label: n.label,
    }));
    const activeLabel = statpulseData.f1Historic.nav.find((n) => n.slug === fullSlug)?.label;

    return (
      <>
        <SubHeader items={switcherItems} accent="f1" />
        <SectionLayout sidebar={<Sidebar items={sidebarItems} accent="f1" title="By Circuit" />}>
          {sections ? (
            <ChartGrid sections={sections} pageTitle={activeLabel} />
          ) : (
            <div style={{ padding: 32, color: 'var(--color-text-dim)' }}>
              Circuit data not found.
            </div>
          )}
        </SectionLayout>
      </>
    );
  }

  // ---- A specific season ----
  const seasonData = statpulseData.f1Seasons[season];
  if (!seasonData) {
    return <Navigate to="/f1/2025" replace />;
  }

  if (!race) {
    return <Navigate to={`/f1/${season}/${seasonData.nav[0].slug}`} replace />;
  }

  const sidebarItems = seasonData.nav.map((n) => ({
    to: `/f1/${season}/${n.slug}`,
    label: n.label,
  }));
  const sections = seasonData.pages[race];
  const activeLabel = seasonData.nav.find((n) => n.slug === race)?.label;

  return (
    <>
      <SubHeader items={switcherItems} accent="f1" />
      <SectionLayout sidebar={<Sidebar items={sidebarItems} accent="f1" title={`${season} Calendar`} />}>
        {sections ? (
          <ChartGrid sections={sections} pageTitle={activeLabel} />
        ) : (
          <div style={{ padding: 32, color: 'var(--color-text-dim)' }}>
            That race isn't available yet.
          </div>
        )}
      </SectionLayout>
    </>
  );
}
