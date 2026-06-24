import { motion } from 'framer-motion';

// Signature element: an animated telemetry/heartbeat trace that draws itself
// once on load, then idles with a subtle traveling glint. Ties directly to
// "StatPulse" without being a literal heartbeat cliche.
export default function PulseMark({ size = 28 }) {
  const path = 'M0 12 H7 L11 4 L16 20 L20 8 L23 12 H32';

  return (
    <svg
      width={size}
      height={size * (24 / 32)}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke="var(--color-pulse)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />
    </svg>
  );
}
