import { useEffect } from "react";
import Navbar from "@/components/features/Navbar";
import LandingPage from "./components/features/LandingPage";
import SponsorsSection from "./components/Sponsors/SponsorsSection";
import FaqsSection from "./components/features/FaqsSection";
import FooterPage from "./components/features/FooterPage";
import About from "@/components/features/About";
import backgroundImage from "@/assets/landing-page-image.png";
import Location from "@/components/features/Location";


function App() {
  useEffect(() => {
    // Optional: Hide scrollbar for consistent look
    const style = document.createElement("style");
    style.textContent = `
      /* Hide scrollbar for Chrome, Safari and Opera */
      *::-webkit-scrollbar {
        display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="relative custom-gradient flex flex-col min-h-svh w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <section id="home">
        <LandingPage />
      </section>
      <section id="home">
        <About />
      </section>
      <section id="location">
          <Location />
      </section>
      <section id="sponsors">
        <SponsorsSection />  
      </section>
      <section id="faqs">
        <FaqsSection />
      </section>
      <FooterPage />
    </div>
  );
}

export default App;