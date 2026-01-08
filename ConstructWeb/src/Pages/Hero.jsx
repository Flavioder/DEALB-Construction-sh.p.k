import "./Home.css";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h5>STREHIM PËR NEVOJA TË LARTA</h5>
          <div className="separator"></div>
          <h1>NE NDËRTOJMË SHTËPINË TUAJ</h1>
          <p>
            Që nga viti 1983, ne kemi zhvilluar mbi 100,000 metra katrorë
            hapësirë ​​banimi rreth Hamburgut. Portofoli ynë përfshin projekte
            zhvillimi të klasit të parë, pronat tona ekzistuese me qira, si dhe
            depo dhe punishte për bizneset. Na kontaktoni - do të ishim të
            lumtur t'ju këshillojmë!
          </p>

          <button onClick={() => navigate("/contact")} className="hero-btn">
            KONTAKT I DREJTPËRDREJTË ME NE
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="overlay"></div>
      </div>
    </section>
  );
}

export default Hero;
