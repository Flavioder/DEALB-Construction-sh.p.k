import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";
function Contact() {
  return (
    <>
      <Header />
      <div className="container-contact">
        <div className="overlay"></div>

        <div className="content-contact">
          <img src="/images/logo.png" alt="Logo" className="logo-contact" />

          <h1>Eletroteknik D&E </h1>
          <p>Telefon: +355 69 866 7811 | Email: elektroteknik.de@gmail.com</p>
          <p>Drejtor Menaxhues: Dritan Turtulli</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
