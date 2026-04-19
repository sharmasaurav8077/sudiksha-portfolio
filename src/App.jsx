import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Equipment from './components/Equipment';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 bg-dark pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      <Background3D />

      <div className="relative z-10">
        <Navbar />
        
        <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Skills />
        <Equipment />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
      </div>
    </div>
  );
}

export default App;
