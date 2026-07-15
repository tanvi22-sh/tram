import Navbar from "./components/navbar";
import Herosection from "./components/hero-section/hero-section";
import MidHero from "./components/mid-hero/mid-hero";
import OfferSection from "./components/offer/OfferSection";
import PhotoSection from "./components/photo-section/photo-section";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <div data-aos="fade-down">
        <Navbar />
      </div>

      {/* Hero */}
      <div data-aos="fade-up">
        <Herosection />
      </div>

      {/* Services */}
      <div data-aos="fade-right">
        <MidHero />
      </div>

      {/* Portfolio */}
      <div data-aos="fade-left">
        <OfferSection />
      </div>

      {/* Testimonials */}
      <div data-aos="zoom-in">
        <PhotoSection />
      </div>

      {/* Footer */}
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;
