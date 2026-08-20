import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default App;