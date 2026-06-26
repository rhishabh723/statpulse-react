import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
const CASE_STUDIES = [
  { slug: 'kj-case-study', title: 'Case Study 1: Keyont George 2026 Offseason Analytics Guide' },
  { slug: 'jj-case-study', title: 'Case Study 2: Jalen Johnson 2024 Offseason Analytics Guide' },
  { slug: 'ks-case-study', title: 'Case Study 3: Jalen Suggs 2024 Offseason Analytics Guide' },
  { slug: 'vj-case-study', title: 'Case Study 4: VJ Edgecombe College Stats' },
];

// Hardcoded rather than imported from statpulseData so the Home page
// (eagerly loaded) doesn't pull the full ~1MB data module into the main bundle.
// const FEATURED_F1_URL =
//   'https://rhishabh723.github.io/statpulse-html/plots/Points/2025/Trended%20Team%20Points%20for%20the%202025%20F1%20Season.html';
// const FEATURED_NBA_URL =
//   'https://rhishabh723.github.io/statpulse-html/plots/Player%20Box%20Scores/2024/Leaders%20In%20Total%20PTS%20For%20The%202023-24%20Season.html';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="hero-eyebrow">Sports analytics, built from raw data up</p>
          <h1 className="hero-title">
            Reading the game
            <br />
            through the numbers.
          </h1>
          <p className="hero-sub">
            NBA box scores and Formula 1 timing data, pulled, modeled, and visualized
            race by race, season by season. Six years of F1 history. Every category
            of NBA box score. Updated as the seasons play out.
          </p>
          <div className="hero-ctas">
            <Link to="/f1/2025" className="cta cta--f1">
              Explore F1
            </Link>
            <Link to="/nba" className="cta cta--nba">
              Explore NBA
            </Link>
          </div>
        </motion.div>

      </section>
      <section className="case-studies">
        <h2 className="case-studies-title">NBA Case Studies</h2>
        <div className="case-studies-list">
          {CASE_STUDIES.map((study) => (
            <Link key={study.slug} to={`/nba/case-studies/${study.slug}`} className="case-study-link">
              {study.title}
            </Link>
          ))}
        </div>
      </section>

{/* Commenting the featured links from before */}
      {/* <section className="featured-grid">
        <motion.div
          className="featured-card featured-card--f1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="featured-card-head">
            <span className="featured-tag featured-tag--f1">Formula 1 · 2025</span>
            <h2>Team points, trended across the season</h2>
          </div>
          <div className="featured-frame">
            <iframe
              src={FEATURED_F1_URL}
              title="2025 F1 team points"
              loading="lazy"
              frameBorder="0"
            />
          </div>
          <Link to="/f1/2025" className="featured-link">
            See full 2025 season →
          </Link>
        </motion.div>

        <motion.div
          className="featured-card featured-card--nba"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="featured-card-head">
            <span className="featured-tag featured-tag--nba">NBA · 2023–24</span>
            <h2>Season leaders in total points</h2>
          </div>
          <div className="featured-frame">
            <iframe
              src={FEATURED_NBA_URL}
              title="NBA points leaders"
              loading="lazy"
              frameBorder="0"
            />
          </div>
          <Link to="/nba" className="featured-link">
            See full player box scores →
          </Link>
        </motion.div>
      </section> */}

      <section className="about-teaser">
        <div>
          <h2>Built by someone who works with this data for a living</h2>
          <p>
            I'm a Manager of Business Intelligence and Analytics with a background in sports
            data pipelines, dashboards, and storytelling through visualization. StatPulse is
            where that work happens off the clock.
          </p>
          <Link to="/about" className="about-teaser-link">
            More about me →
          </Link>
        </div>
      </section>
    </div>
  );
}
