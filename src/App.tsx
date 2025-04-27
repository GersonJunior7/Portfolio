import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Skills from "./components/skills/Header/Skills";

function App() {
  return (
    <div className="body">
      <Header />
      <Banner />
      <About />
      <Skills />
    </div>
  );
}

export default App;
