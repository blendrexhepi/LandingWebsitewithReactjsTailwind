import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Service from "./components/Service";

function App() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-800 ">
      <Navbar />
      <Hero />
      <Service />
      <Portfolio />
      <About />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
