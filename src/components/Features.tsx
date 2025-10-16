import { useEffect, useRef } from "react";
import gsap from "gsap";

const features = [
  { title: "Smart Search", desc: "Find products quickly using AI-powered filters." },
  { title: "Secure Payments", desc: "Transactions are safe, fast, and encrypted." },
  { title: "Custom Profiles", desc: "Personalize your buying or selling experience." },
];

const Features = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".feature-orb", {
        x: "random(-50, 50)",
        y: "random(-30, 30)",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.6,
      });
    }, bgRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black"
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="feature-orb absolute top-10 left-20 w-64 h-64 bg-purple-700/20 rounded-full blur-[100px]" />
        <div className="feature-orb absolute bottom-10 right-16 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 drop-shadow-lg">
        Powerful Features
      </h2>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
        {features.map((f) => (
          <div
            key={f.title}
            className="relative p-8 rounded-2xl bg-black/40 border border-purple-700/40 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-700/10 via-transparent to-blue-600/10 opacity-60" />
            <h3 className="text-2xl font-semibold mb-4 text-purple-400 z-10 relative">
              {f.title}
            </h3>
            <p className="text-gray-300 z-10 relative">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
