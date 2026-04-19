import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Gold Medal',
    event: 'Debate Competition',
    year: '2023',
    icon: <Trophy size={32} strokeWidth={1.5} className="text-primary-light" />,
    color: 'from-primary-light/30 to-transparent',
    border: 'border-primary-light/50',
    glow: 'shadow-[0_0_20px_rgba(243,229,171,0.3)]'
  },
  {
    title: 'Silver Medal',
    event: 'Poster Competition',
    year: 'Previous',
    icon: <Award size={32} strokeWidth={1.5} className="text-gray-300" />,
    color: 'from-gray-300/20 to-transparent',
    border: 'border-gray-300/40',
    glow: 'shadow-[0_0_20px_rgba(209,213,219,0.2)]'
  },
  {
    title: 'Coordinator Certificate',
    event: 'Event Management',
    year: 'Various',
    icon: <Star size={32} strokeWidth={1.5} className="text-primary" />,
    color: 'from-primary/30 to-transparent',
    border: 'border-primary/50',
    glow: 'shadow-[0_0_20px_rgba(212,175,55,0.3)]'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-dark-lighter/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Key <span className="text-gradient">Achievements</span></h2>
          <p className="text-gray-400 font-light tracking-wide">Recognition for academic and extracurricular excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass rounded-2xl p-8 border border-white/5 hover:${item.border} hover:${item.glow} transition-all duration-500 relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${item.color} rounded-bl-full opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 rounded-full inline-block backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-champagne transition-colors">{item.title}</h3>
                <p className="text-gray-400 mb-4 font-light">{item.event}</p>
                <div className="text-xs tracking-wider uppercase font-medium text-white/60 bg-white/5 px-4 py-1.5 rounded-full inline-block border border-white/10 group-hover:border-white/20 transition-colors">
                  {item.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
