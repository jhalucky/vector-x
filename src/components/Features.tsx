const features = [
    { title: "Smart Search", desc: "Find products quickly using AI-powered filters." },
    { title: "Secure Payments", desc: "Transactions are safe, fast, and encrypted." },
    { title: "Custom Profiles", desc: "Personalize your buying or selling experience." },
  ];
  
  const Features = () => (
    <section className="min-h-screen flex flex-col justify-center bg-purple-500 text-white px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Powerful Features</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-8 rounded-2xl bg-purple-900/80 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Features;
  
  