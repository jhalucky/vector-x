import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface NavbarProps {
  refs: {
    homeRef: React.RefObject<HTMLDivElement | null>;
    featuresRef: React.RefObject<HTMLDivElement | null>;
    pricingRef: React.RefObject<HTMLDivElement | null>;
    testimonialsRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
}


const Navbar = ({ refs }: NavbarProps) => {
  const navBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".nav-orb", {
        x: "random(-40, 40)",
        y: "random(-20, 20)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, navBgRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      ref={navBgRef}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full py-4 px-6 text-white backdrop-blur-md bg-black/60 shadow-lg z-50 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="nav-orb absolute top-0 left-10 w-32 h-32 bg-purple-600/30 rounded-full blur-[60px]" />
        <div className="nav-orb absolute bottom-0 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]" />
      </div>

      <div className="mx-auto ml-5 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold tracking-wide text-purple-400 logo"
        >
          VECTOR-X
        </motion.h1>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(refs.contactRef)}
          className="px-4 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition text-[10px] md:text-[10px] font-medium shadow-md"
        >
          Connect with us
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
