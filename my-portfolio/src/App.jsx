import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import useLenis from './hooks/useLenis';

function App() {
  useLenis();

  return (
    // reducedMotion="user": Motion drops transform animations when the OS asks for reduced motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;
