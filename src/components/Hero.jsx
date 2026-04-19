import { motion } from 'framer-motion';
import { FileText, Sparkles } from 'lucide-react';
import imgProfile from '../assets/Img.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-champagne/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary-dark/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40 blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Text Section (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-dark-lighter/50 backdrop-blur-md text-primary-light text-sm font-medium tracking-wide uppercase"
            >
              <Sparkles size={16} className="text-primary" />
              <span>Research & Development Expert</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-serif"
            >
              Hi, I'm <span className="text-gradient drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Sudiksha Jha</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed"
            >
              <span className="text-gray-200 font-medium">Cosmetic & Pharma Product Developer</span> passionate about creating innovative formulations and high-end beauty solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="https://www.linkedin.com/in/sudiksha-jha-302204242/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-dark rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
              >
                View LinkedIn
              </a>
              <a
                href="/Sudiksha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 glass text-champagne rounded-full font-medium transition-all hover:bg-white/5 hover:border-primary/50 gold-glow-hover"
              >
                <FileText size={18} className="group-hover:text-primary transition-colors" />
                View CV
              </a>
            </motion.div>
          </div>

          {/* Image Section (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-1 bg-gradient-to-tr from-primary via-champagne to-primary-dark shadow-[0_0_50px_rgba(212,175,55,0.2)] group hover:shadow-[0_0_80px_rgba(212,175,55,0.4)] transition-shadow duration-500"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative bg-dark">
                <img
                  src={imgProfile}
                  alt="Sudiksha Jha"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Subtle warm overlay to blend with dark/gold theme */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(26,15,15,0.8)] rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-primary/70 uppercase tracking-widest mb-2 font-medium hidden md:block">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
