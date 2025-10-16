"use client";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Error sending message.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-3xl min-h-screen mx-auto text-center px-6 pb-20 flex flex-col justify-center">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Have a question or partnership idea? We’d love to hear from you!
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-500">{status}</p>}
    </section>
  );
};

export default Contact;
