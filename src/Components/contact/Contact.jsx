import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "85258525ai2",
      "template_id",
      form.current,
      "6XliOnjwhjONIWpfn"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contactez Moi!</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>innossdiaks3@gmail.com</h5>
            <a href="mailto:innossdiaks3@gmail.com" target="_blank">
              Envoyez moi un message
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookSquare className="contact_option-icon" />
            <h4>Facebook</h4>
            <h5>Cullinan Diakiese</h5>
            <a href="https://web.facebook.com/innoss.diaks" target="_blank">
              Envoyez moi un message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+243 818309686</h5>
            <a
              href="https://api.whatsapp.com/send?phone+243818309686"
              target="_blank"
            >
              Envoyez moi un message
            </a>
          </article>
        </div>
        {/* FIN DE L'OPTION CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom complet"
            required
          />
          <input type="email" name="email" placeholder="Votre Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyez votre message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
