import './SectionLayout.css';

export default function SectionLayout({ sidebar, children }) {
  return (
    <div className="section-layout">
      {sidebar}
      {children}
    </div>
  );
}
