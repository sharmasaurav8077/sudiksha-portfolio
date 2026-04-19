import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'R&D Chemist',
    company: 'Lilium Cosmetic Pvt Ltd',
    period: 'Current',
    description: [
      'Worked in the analytical department and Research & Development.',
      'Extensive experience in the formulation and development of skincare, haircare, and cosmetic products.',
      'Spearheaded pharmaceutical product development and compliance testing.',
    ],
  },
  {
    role: 'Assistant Chemist',
    company: 'Pritam International Pvt Ltd',
    period: 'Previous',
    description: [
      'Worked in R&D, Formulation & Development (F&D), and New Product Development (NPD) departments.',
      'Assisted in stability testing, scaling up formulations, and quality control procedures.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-dark-lighter/40 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Professional <span className="text-gradient">Experience</span></h2>
          <p className="text-gray-400 font-light tracking-wide">My journey in cosmetic and pharmaceutical research</p>
        </motion.div>

        <div className="relative border-l border-primary/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[-37px] top-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#d4af37]"></div>
              
              <div className="md:ml-12 glass p-8 rounded-2xl hover:border-primary/40 gold-glow-hover transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-champagne transition-colors">{exp.role}</h3>
                    <div className="text-primary mt-1 text-lg font-medium">{exp.company}</div>
                  </div>
                  <div className="mt-3 md:mt-0 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-champagne inline-block w-fit tracking-wide font-medium">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 font-light leading-relaxed">
                      <span className="text-primary mr-3 mt-1 text-lg">✧</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
