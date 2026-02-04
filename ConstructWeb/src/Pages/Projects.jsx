import "./Projects.css";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container-strehim">
        <div className="strehim-text">
          <h6>ME NE DREJT NJË TË ARDHME TË SIGURTË</h6>
          <h1>BANESA TË KLASIT TË LARTË</h1>
          <p>
            Ndërtim banesash për blerës të kujdesshëm.Ndërtesa apartamentesh me
            48 njësi.
            <br />
            Na kontaktoni, do të jemi të lumtur t'ju këshillojmë!
          </p>
          <button onClick={() => navigate("/contact")} className="strehim-btn">
            KONTAKT I DREJTPËRDREJTË ME NE
          </button>
        </div>
      </div>
      <div className="box-black">
        <div className="boxblack-text">
          <h6>DERI TANI MË SHUMË SE 100,000 M2 HAPËSIRË BANIMI</h6>
          <p>
            Ne jemi të përkushtuar t'ju ofrojmë shërbime të qëndrueshme, të
            përgjegjshme dhe të sigurta. Me ne si partnerin tuaj të fortë, juve
            ju garantohet një e ardhme e sigurt.
          </p>
        </div>
      </div>
      <div className="kerkesat">
        <div className="kerkesat-box">
          <div className="separator-kerkesat"></div>
          <div className="kerkesat-text">
            <h6>POSAÇËRISHT PËR JU</h6>
            <h2>KËRKESAT</h2>
            <p>
              Një projekt i ri ndërtimi do të jetë i suksesshëm vetëm nëse
              zhvillohet sipas interesave dhe kërkesave të secilit. Këto kërkesa
              mund të ndryshojnë ndjeshëm dhe kjo duhet të merret parasysh gjatë
              fazave të konsultimit, planifikimit dhe ekzekutimit.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="kerkesat-btn"
            >
              NA KONTAKTONI!
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
export default Projects;
