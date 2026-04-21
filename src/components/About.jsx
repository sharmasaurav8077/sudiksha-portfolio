import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass p-3 gold-glow-hover group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Research Laboratory" 
                className="w-full h-full object-cover rounded-xl filter sepia-[0.3] hover:sepia-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
              Driven by <span className="text-gradient">Science</span>,<br />
              Inspired by <span className="text-gradient">Elegance</span>.
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Based in India, I am an R&D Chemist with specialized experience in formulating and developing premium skincare, haircare, cosmetic, and pharmaceutical products. My professional focus is to bridge the gap between rigorous scientific research and tangible, high-quality luxury consumer products.
              </p>
              <p>
                Currently pursuing an MSc in Biotechnology at Dr. KN Modi University, I am committed to continuous learning and the application of advanced analytical techniques to develop industry-leading solutions.
              </p>
              <p>
                I thrive in demanding professional environments that require precision, where I can utilize my analytical expertise, adaptability, and collaborative skills to drive product innovation from a mere concept to a luxurious market reality.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Experience', value: '2+ Yrs' },
                { label: 'Projects', value: '2.5K+' },
                { label: 'Formulations', value: '1K+' },
                { label: 'Awards', value: '2' },
              ].map((stat, i) => (
                <div key={i} className="glass rounded-xl p-5 text-center border-t border-t-primary/30 hover:border-t-primary transition-colors duration-300 group">
                  <div className="text-3xl font-serif font-bold text-champagne mb-2 group-hover:text-white transition-colors">{stat.value}</div>
                  <div className="text-xs text-primary tracking-widest uppercase font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
