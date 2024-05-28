import "./app.scss";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
// import TestFrameMotion from "./TestFrameMotion";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  
  return (
    <div>
      <section id="Home">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Services2">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      
        <Portfolio />
      
      <section id="About">About</section>
      <section id="Contact">Contact</section>

      {/* <TestFrameMotion/>
    <TestFrameMotion/> */}
    </div>
  );
};

export default App;
