import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black">
        

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-5xl mb-5"
      >
        We Build 
        <div className="mt-5 mb-5">
        <span className="text-purple-500 text-7xl tagline mt-5">Imaginations</span>
        </div>
      </motion.h1>

  

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        className="px-10 py-4 bg-purple-500 text-white rounded-xl shadow-lg hover:bg-purple-600 transition text-lg font-semibold mt-10"
      >
        Let’s Collaborate
      </motion.button>
    </section>
  );
};

export default Hero;

