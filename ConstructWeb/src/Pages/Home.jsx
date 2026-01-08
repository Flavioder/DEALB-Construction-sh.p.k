import "./Home.css";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="landing-page">
        <Header />

        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
export default Home;
