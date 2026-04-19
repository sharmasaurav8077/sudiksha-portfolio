import { motion } from 'framer-motion';
import { Beaker, Shield, Activity, Search, Thermometer, Microscope } from 'lucide-react';

const equipment = [
  { name: 'Laminar Air Flow', desc: 'Sterile environment handling', icon: <Shield size={24} strokeWidth={1.5} /> },
  { name: 'Centrifuge', desc: 'Sample separation & analysis', icon: <Activity size={24} strokeWidth={1.5} /> },
  { name: 'Autoclave', desc: 'Equipment sterilization', icon: <Thermometer size={24} strokeWidth={1.5} /> },
  { name: 'Microscope', desc: 'Microscopic examination', icon: <Microscope size={24} strokeWidth={1.5} /> },
  { name: 'pH Meter', desc: 'Acidity/Alkalinity measurement', icon: <Beaker size={24} strokeWidth={1.5} /> },
  { name: 'Viscometer', desc: 'Fluid viscosity analysis', icon: <Search size={24} strokeWidth={1.5} /> }
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Lab <span className="text-gradient">Equipment</span></h2>
          <p className="text-gray-400 font-light tracking-wide">Proficiency in handling advanced analytical instruments</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl text-center group hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-primary/50 gold-glow-hover"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 text-primary group-hover:text-champagne shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-champagne transition-colors">{item.name}</h3>
              <p className="text-sm text-gray-400 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
