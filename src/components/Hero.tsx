import { motion } from "framer-motion";
import "@fontsource-variable/onest";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black">
        

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
      >
        We Build <span className="text-purple-500">Imaginations</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
      >
        Turning ideas into powerful digital experiences — websites, chatbots,
        and automation that transform your vision into reality.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        className="px-10 py-4 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition text-lg font-semibold"
      >
        Let’s Collaborate
      </motion.button>
    </section>
  );
};

export default Hero;

