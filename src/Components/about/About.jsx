import React from "react";
import "./about.css";
import HeaderSocials from "../about/HeaderSocials";
import ME from "../../assets/fonts/img/IMG-20230628-WA0001.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h4>experience</h4>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Ans de Travail</small>
            </article>
            <article className="about_card">
              <FiUser className="about_icon" />
              <h5>Clients</h5>
              <small>10K+ dans le monde</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>40K+ de Réalisations</small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Allons discutez
          </a>
        </div>
      </div>
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
      <HeaderSocials />
    </section>
  );
};

export default about;
