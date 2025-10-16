import { motion } from "framer-motion";
import { Code2, PenTool, Video, FileText } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive, high-performance, and visually stunning websites that drive growth.",
    icon: <Code2 size={40} className="text-purple-400" />,
  },
  {
    title: "Graphic Designing",
    desc: "Transforming ideas into visuals through creative branding, logos, and digital design.",
    icon: <PenTool size={40} className="text-purple-400" />,
  },
  {
    title: "Video Editing",
    desc: "Crafting compelling video content with cinematic editing and smooth storytelling.",
    icon: <Video size={40} className="text-purple-400" />,
  },
  {
    title: "Content Creation",
    desc: "Delivering impactful digital content tailored for social media, brands, and marketing.",
    icon: <FileText size={40} className="text-purple-400" />,
  },
];

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-purple-950 to-black text-white px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Our <span className="text-purple-400">Creative Services</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-900/30 backdrop-blur-md border border-purple-800/50 rounded-2xl p-8 text-center shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            <div className="flex justify-center mb-5">{s.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-purple-300">{s.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
