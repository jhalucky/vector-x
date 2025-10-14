const Contact = () => (
    <section className="max-w-3xl min-h-screen mx-auto text-center px-6 pb-20">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Have a question or partnership idea? We’d love to hear from you!
      </p>
      <form className="grid gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent" />
        <textarea placeholder="Your Message" rows={4} className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent" />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
  export default Contact;
  