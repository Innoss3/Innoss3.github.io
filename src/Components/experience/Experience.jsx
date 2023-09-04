import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h4> Experience professionnelle</h4>
      <h2>Mes experiences</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experimenter</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediare</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediare</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experimenter</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experimenter</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Vuejs</h4>
                <small className="text-light">Intermediare</small>
              </div>
            </article>
          </div>
        </div>
        {/* FIN DU FRONTEND  */}
        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experimenter</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Intermediare</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediare</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experimenter</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experimenter</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediare</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
import "./experience.css";

export default experience;
