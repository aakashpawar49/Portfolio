// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-text-light antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}

export default App;