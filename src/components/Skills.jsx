import { motion } from 'framer-motion';

const skills = [
  'Teamwork',
  'Time Management',
  'Communication',
  'Adaptability',
  'Analytical Thinking',
  'Problem Solving',
  'Research Methodology',
  'Quality Control'
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-dark-lighter/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Core <span className="text-gradient">Skills</span></h2>
            <p className="text-gray-400 mb-6 font-light leading-relaxed">
              Beyond technical formulation, I bring strong interpersonal and organizational skills to every laboratory environment, ensuring efficient project execution and collaborative success.
            </p>
          </motion.div>

          <div className="w-full md:w-2/3 flex flex-wrap gap-4 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 glass rounded-full border border-primary/20 text-gray-300 hover:text-champagne hover:border-primary/60 hover:bg-primary/10 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-default font-medium tracking-wide"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
