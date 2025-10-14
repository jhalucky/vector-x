import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  { name: "Free", price: "$0", features: ["Basic access", "Limited listings"] },
  { name: "Pro", price: "$29", features: ["Unlimited listings", "Premium support"] },
  { name: "Enterprise", price: "$99", features: ["Advanced analytics", "Custom integrations"] },
];

const Pricing = () => {
  // Default selected is middle one (index 1)
  const [selected, setSelected] = useState(1);

  return (
    <section className="max-w-6xl min-h-screen mx-auto text-center px-6 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {plans.map((plan, index) => {
          const isSelected = selected === index;
          return (
            <motion.div
              key={plan.name}
              onClick={() => setSelected(index)}
              layout
              whileHover={{ scale: 1.05 }}
              animate={{ scale: isSelected ? 1.15 : 1 }}
              className={`cursor-pointer p-8 rounded-2xl border-2 ${
                isSelected
                  ? "border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.7)]"
                  : "border-gray-300 dark:border-gray-700"
              } bg-gray-900 text-white w-64 flex flex-col items-center transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-indigo-400 mb-4">{plan.price}</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  isSelected
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
