import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Project from "../Projects/Projects";
import Skills from "../Skills/Skills";

function Home() {
  return (
    <div className="body">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Project />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
