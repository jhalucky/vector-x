import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black text-white">
      <Navbar
        refs={{ homeRef, featuresRef, pricingRef, testimonialsRef, contactRef }}
      />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm">
        © {new Date().getFullYear()} VECTOR-X. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
