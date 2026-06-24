import { motion } from 'framer-motion';
import './InfoPage.css';

const LINKS = [
  { label: 'Email', href: 'mailto:rhishabh23@gmail.com', sub: 'rhishabh23@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rhishabh-deshpande/', sub: 'in/rhishabh-deshpande' },
  { label: 'GitHub', href: 'https://github.com/rhishabh723?tab=repositories', sub: '@rhishabh723' },
  { label: 'X', href: 'https://x.com/RhishabhRD7', sub: '@RhishabhRD7' },
  { label: 'Resume', href: '/docs/Rhishabh Deshpande.pdf', sub: 'PDF download' },
];

export default function Contact() {
  return (
    <div className="info-page">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="info-eyebrow">Contact</p>
        <h1 className="info-title">Let's talk sports data</h1>
        <p className="info-body" style={{ maxWidth: 520, marginBottom: 36 }}>
          If you find value in this work or want to collaborate, reach out through
          any of the links below.
        </p>

        <div className="contact-grid">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-card-label">{link.label}</span>
              <span className="contact-card-sub">{link.sub}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
