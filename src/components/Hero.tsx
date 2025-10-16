import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".orb", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5,
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black overflow-hidden"
    >
      {/* --- Animated Orbs --- */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb absolute top-20 left-10 w-64 h-64 bg-purple-600/30 rounded-full blur-[40px]" />
        <div className="orb absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[20px]" />
        <div className="orb absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/25 rounded-full blur-[120px]" />
      </div>

      {/* --- Text + Button --- */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl mb-5 leading-tight relative z-10"
      >
        We Build
        <div className="mt-5 mb-5">
          <span className="text-purple-500 block text-6xl sm:text-7xl md:text-8xl break-words tagline">
            Imaginations
          </span>
        </div>
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 sm:px-10 py-4 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition text-lg font-semibold mt-8 relative z-10"
      >
        Let’s Collaborate
      </motion.button>
    </section>
  );
};

export default Hero;
