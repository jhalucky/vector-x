import { motion } from "framer-motion";

interface NavbarProps {
  refs: {
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

const Navbar = ({ refs }: NavbarProps) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-4 px-6 text-white bg-black"
    >
      <div className="mx-auto flex justify-between items-center">
        <div className="ml-2 md:ml-6 mt-3">
            <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-purple-500 logo"
            >
            VECTOR-X
            </motion.h1>
            </div>

        <div className="mr:2 md:mr-6 mt-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(refs.contactRef)}
          className="px-3 md:px-6 py-2 ml-6 bg-purple-500 rounded-full hover:bg-purple-500 shadow-lg text-white font-semibold transition text-sm md:text-base"
        >
          Contact
        </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

