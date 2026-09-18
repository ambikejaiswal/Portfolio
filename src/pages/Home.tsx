import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Certificate from "../components/Certification";

const Home = () => {
  return (
    <div className="pt-15">
      <Navbar />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Certificate />
      <Footer />
    </div>
  );
};

export default Home;
