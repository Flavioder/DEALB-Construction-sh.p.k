import "./Services.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <>
      <section className="services">
        <div className="services-container">
          <h1>SHËRBIMET TONA</h1>
          <div className="services-grid">
            <div className="services-card">
              <img
                src="/public/FotoWebit/csm_10-07-tiny-house-massiv-2023-07-05-082145-w1600-q70_8320966b02.jpg"
                alt="Service image"
              />
              <div className="overlay-card">
                <h2>STREHIM</h2>
                <p>
                  Ndërtimi i banesave për nevoja të nivelit <br /> të lartë.
                </p>
                <button onClick={() => navigate("/projects")}>
                  MËSO MË SHUMË
                </button>
              </div>
            </div>

            <div className="services-card">
              <img
                src="./public/FotoWebit/csm_news-bauweise-haus-massiv-2025-03-07-073312_d7e3aaf2a3.jpg"
                alt="Service image"
              />
              <div className="overlay-card">
                <h2>NDËRTESAT E REJA</h2>
                <p>
                  Shtëpi njëfamiljare dhe shumëfamiljare,
                  <br /> shtëpi me tarraca, shtëpi gjysmë të <br />
                  shkëputura, shtëpi njëfamiljare.
                </p>
                <button>MËSO MË SHUMË</button>
              </div>
            </div>

            <div className="services-card">
              <img
                src="/public/FotoWebit/klimaneutral-massiv-bauen-skills-bw-wissen-massivbau-energie.webp"
                alt="Service image"
              />
              <div className="overlay-card">
                <h2>STREHIM</h2>
                <p>
                  Ndërtimi i banesave për nevoja të nivelit <br /> të lartë.
                </p>
                <button>MËSO MË SHUMË</button>
              </div>
            </div>

            <div className="services-card">
              <img src="./public/FotoWebit/efh2009gr.jpg" alt="Service image" />
              <div className="overlay-card">
                <h2>INVESTIMET</h2>
                <p>
                  Do të ishim të lumtur t'ju kishim në plan <br /> si huadhënës
                  të ndërmjetëm për <br /> projektet tona.
                </p>
                <button>MËSO MË SHUMË</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
