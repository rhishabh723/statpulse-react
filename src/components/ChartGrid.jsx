import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ChartGrid.css';

function LazyFrame({ src, height, width, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Preserve the chart's native aspect ratio inside a fluid-width card.
  const aspectRatio = `${width} / ${height}`;

  return (
    <div className="chart-frame-wrap" ref={ref} style={{ aspectRatio }}>
      {!loaded && (
        <div className="chart-frame-skeleton" aria-hidden="true">
          <span>{label || 'Loading chart…'}</span>
        </div>
      )}
      {visible && (
        <iframe
          src={src}
          title={label || 'Chart'}
          loading="lazy"
          frameBorder="0"
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      )}
    </div>
  );
}

export default function ChartGrid({ sections, pageTitle }) {
  return (
    <div className="chart-grid">
      {pageTitle && <h1 className="chart-grid-title">{pageTitle}</h1>}

      {sections.map((section, sIdx) => (
        <motion.section
          key={sIdx}
          className="chart-section"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {section.h1 && !pageTitle && <h2 className="chart-section-title">{section.h1}</h2>}
          {section.h1 && pageTitle && <h3 className="chart-section-subtitle">{section.h1}</h3>}

          <div className="chart-card-row">
            {section.items.map((item, iIdx) => (
              <div className="chart-card" key={iIdx}>
                {item.h2 && <div className="chart-card-label">{item.h2}</div>}
                <LazyFrame
                  src={item.src}
                  height={item.height}
                  width={item.width}
                  label={item.h2 || section.h1}
                />
              </div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
