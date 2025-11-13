import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
// import FullProjects from './sections/Projects'; // FullProjects is now a separate page, don't render on home
import HomeProjects from './sections/HomeProjects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-text-light antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <HomeProjects /> {/* ONLY the 3 featured projects appear here */}
        {/* The FullProjects list is now a separate link and won't clutter the main page */}
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;