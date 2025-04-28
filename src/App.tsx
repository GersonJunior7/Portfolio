import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Project from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="body">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
