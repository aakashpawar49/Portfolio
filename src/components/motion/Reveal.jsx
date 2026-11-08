import { motion } from 'motion/react';
import { EASE } from '@/lib/motion';

// Fades and lifts its children into place the first time they scroll into view.
const Reveal = ({ children, delay = 0, y = 28, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export default Reveal;
