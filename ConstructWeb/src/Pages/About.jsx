import "./About.css";
function About() {
  return (
    <>
      <section className="about">
        <div className="container-about">
          <div className="about-text">
            <p>
              Grupi RAST është një kompani e menaxhuar nga pronari me seli në
              Schleswig-Holstein.
            </p>
            <h1>
              NË MËNYRË TË PAVARUR <br />
              DHE STUDENT I PAVARUR.
            </h1>
            <p>
              Një ekip i dedikuar prej 16 planifikuesish dhe zhvilluesish
              pronash mbështet ekspertizën tonë. Ekipi ynë prej 4 menaxherësh
              ndërtimi është përgjegjës për zbatimin.
            </p>
          </div>
          <div className="image">
            <img src="./public/FotoWebit/01.jpg" alt="foto" />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
