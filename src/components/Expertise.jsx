import { motion } from 'framer-motion';
import { Sparkles, Droplets, Pill, FlaskConical } from 'lucide-react';

const categories = [
  {
    title: 'Skincare',
    icon: <Droplets size={32} strokeWidth={1.5} />,
    desc: 'Lotions, creams, serums, and deep-cleansing formulations.',
  },
  {
    title: 'Haircare',
    icon: <Sparkles size={32} strokeWidth={1.5} />,
    desc: 'Shampoos, conditioners, hair masks, and scalp treatments.',
  },
  {
    title: 'Cosmetics',
    icon: <FlaskConical size={32} strokeWidth={1.5} />,
    desc: 'Color cosmetics, foundations, and beauty enhancements.',
  },
  {
    title: 'Pharma',
    icon: <Pill size={32} strokeWidth={1.5} />,
    desc: 'Topical ointments, gels, and active pharmaceutical ingredients.',
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Product <span className="text-gradient">Expertise</span></h2>
          <p className="text-gray-400 font-light tracking-wide">Specialized areas of formulation and development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 relative overflow-hidden transition-all duration-500 cursor-pointer hover:border-primary/50 gold-glow-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-primary mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-primary-light transition-all duration-500 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-champagne mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
