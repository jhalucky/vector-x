const testimonials = [
    { name: "Aarav Singh", text: "This marketplace helped me grow my business 3x faster!" },
    { name: "Priya Sharma", text: "A clean and intuitive design. Love the simplicity!" },
    { name: "John Doe", text: "Smooth transactions and excellent support!" },
  ];
  
  const Testimonials = () => (
    <section className="min-h-screen flex flex-col items-center justify-center bg-purple-500 text-white px-6">
      <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <p className="italic text-gray-600 dark:text-gray-400 mb-4">“{t.text}”</p>
            <h3 className="font-semibold">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
  export default Testimonials;
  