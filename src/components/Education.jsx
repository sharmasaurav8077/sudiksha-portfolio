import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'MSc Biotechnology',
    institution: 'Dr. KN Modi University',
    status: 'Pursuing',
    highlight: 'Advanced research methodologies'
  },
  {
    degree: 'BSc Biotechnology',
    institution: 'CCS University',
    status: '75%',
    highlight: 'Foundation in biological sciences'
  },
  {
    degree: 'Intermediate',
    institution: 'High School Board',
    status: '66%',
    highlight: 'Science Stream'
  },
  {
    degree: 'High School',
    institution: 'High School Board',
    status: '62%',
    highlight: 'General Sciences'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Academic <span className="text-gradient">Background</span></h2>
          <p className="text-gray-400 font-light tracking-wide">My educational journey in science and technology</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-primary/50 gold-glow-hover flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:text-primary-light group-hover:scale-110 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <GraduationCap size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-champagne transition-colors">{edu.degree}</h3>
                  <div className="text-gray-400 mt-1 font-light">{edu.institution}</div>
                </div>
              </div>
              <div className="md:text-right ml-20 md:ml-0 flex flex-col items-start md:items-end">
                <span className="px-5 py-1.5 rounded-full bg-primary/10 text-primary-light text-sm font-medium mb-2 border border-primary/30 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                  {edu.status}
                </span>
                <span className="text-sm text-gray-500 font-light tracking-wide">{edu.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
