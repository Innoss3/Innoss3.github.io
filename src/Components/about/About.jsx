import React from "react";
import "./about.css";
import ME from "../../assets/fonts/img/IMG-20230628-WA0001.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>experience</h5>
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
          <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repellendus architecto omnis vitae quisquam alias laudantium
            delectus autem itaque sunt rem, totam placeat molestiae veritatis
            exercitationem quia accusamus magnam eveniet.
          </p>
          <a href="#contact" className="btn btn-primary">
            Allons discutez
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
