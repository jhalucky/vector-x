// import { useState } from "react";
// import { motion } from "framer-motion";

// const plans = [
//   { name: "Free", price: "$0", features: ["Basic access", "Limited listings"] },
//   { name: "Pro", price: "$29", features: ["Unlimited listings", "Premium support"] },
//   { name: "Enterprise", price: "$99", features: ["Advanced analytics", "Custom integrations"] },
// ];

// const Pricing = () => {
//   // Default selected is middle one (index 1)
//   const [selected, setSelected] = useState(1);

//   return (
//     <section className="max-w-6xl min-h-screen mx-auto text-center px-6 flex flex-col items-center justify-center">
//       <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
//       <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
//         {plans.map((plan, index) => {
//           const isSelected = selected === index;
//           return (
//             <motion.div
//               key={plan.name}
//               onClick={() => setSelected(index)}
//               layout
//               whileHover={{ scale: 1.05 }}
//               animate={{ scale: isSelected ? 1.15 : 1 }}
//               className={`cursor-pointer p-8 rounded-2xl border-2 ${
//                 isSelected
//                   ? "border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.7)]"
//                   : "border-gray-300 dark:border-gray-700"
//               } bg-gray-900 text-white w-64 flex flex-col items-center transition-all duration-300`}
//             >
//               <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
//               <p className="text-4xl font-extrabold text-indigo-400 mb-4">{plan.price}</p>
//               <ul className="text-gray-300 space-y-2 mb-6">
//                 {plan.features.map((f) => (
//                   <li key={f}>• {f}</li>
//                 ))}
//               </ul>
//               <button
//                 className={`px-6 py-2 rounded-full font-semibold transition ${
//                   isSelected
//                     ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg"
//                     : "bg-gray-700 hover:bg-gray-600 text-white"
//                 }`}
//               >
//                 Choose Plan
//               </button>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const plans = [
  {
    name: "Starter",
    price: "$19/mo",
    tagline: "Perfect for individuals & freelancers",
    features: [
      "Basic website setup",
      "1 project per month",
      "Standard support",
      "Community access",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Professional",
    price: "$49/mo",
    tagline: "For small teams & creators",
    features: [
      "Up to 5 projects",
      "Priority email support",
      "Access to all templates",
      "Basic analytics",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    tagline: "For growing businesses",
    features: [
      "Unlimited projects",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced analytics dashboard",
    ],
    color: "from-pink-500 to-red-500",
  },
];

const Pricing = () => {
  const [selected, setSelected] = useState(1);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    const blobs = bgRef.current.querySelectorAll(".blob");

    blobs.forEach((blob) => {
      gsap.to(blob, {
        x: () => Math.random() * 100 - 50,
        y: () => Math.random() * 100 - 50,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      id="pricing"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Animated BG */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden -z-10">
        <div className="blob absolute top-10 left-20 w-72 h-72 bg-indigo-500/30 blur-[120px] rounded-full"></div>
        <div className="blob absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 blur-[150px] rounded-full"></div>
        <div className="blob absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Pricing Plans
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mb-12 text-center max-w-xl"
      >
        Choose the perfect plan to power your creative and development needs.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center z-10">
        {plans.map((plan, i) => {
          const isActive = selected === i;
          return (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(i)}
              className={`relative cursor-pointer flex flex-col items-center p-8 rounded-3xl w-72 backdrop-blur-md border transition-all duration-300 ${
                isActive
                  ? "border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.5)] scale-105"
                  : "border-gray-700 hover:border-gray-500"
              } bg-gradient-to-br from-gray-900 to-black`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 rounded-3xl pointer-events-none`}
              />
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{plan.tagline}</p>
              <p className="text-4xl font-extrabold text-indigo-400 mb-6">
                {plan.price}
              </p>
              <ul className="text-gray-300 space-y-2 mb-8 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-indigo-400">•</span> {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition bg-gradient-to-r ${plan.color} hover:opacity-90 shadow-lg`}
              >
                {isActive ? "Selected" : "Choose Plan"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
