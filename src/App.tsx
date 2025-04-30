import About from "./pages/About/About";
import Banner from "./pages/Banner/Banner";
import Contact from "./pages/Contact/Contact";
import Cta from "./pages/Cta/Cta";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Project from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

function App() {
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

export default App;
