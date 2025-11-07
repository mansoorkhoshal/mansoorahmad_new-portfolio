import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimoinals";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
