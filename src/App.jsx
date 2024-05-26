import "./app.scss"
import NavBar  from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
// import TestFrameMotion from "./TestFrameMotion";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Home">
      <NavBar/>
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio 1</section>
    <section>Portfolio 2</section>
    <section>Portfolio 3</section>
    <section id="About">About</section>
    <section id="Contact">Contact</section>

    {/* <TestFrameMotion/>
    <TestFrameMotion/> */}
  </div>;

};

export default App;
