import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h4>Services offerts</h4>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>RESEAUX / BASE DES DONNEES</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>IT Essential</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Resaux local (LAN)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Reseaux sans-fils (Wi-Fi)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Reseaux Ad-Hoc</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Conception & Réalisation des Base de Données</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Maintenance Reseaux & Base des données</p>
            </li>
          </ul>
        </article>
        {/* FIN DU UI/UX  */}
        <article className="service">
          <div className="service_head">
            <h3>Developpement Web</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Les Bases & Concepts</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Conception & Maket (Figma & DreamWeaver)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Site Vitrine</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Site Portfolio (Portefeuille)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Site Evenementiel</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Site E - Commerce</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Application Web (Client - Serveur)</p>
            </li>
          </ul>
        </article>
        {/* FIN DU Devellopement Web  */}
        <article className="service">
          <div className="service_head">
            <h3>Developpement Mobile</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Les Bases & Concepts</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Conception & Maket (Figma & Flutter Flow)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Application E - Commerce</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Application Standard</p>
            </li>
          </ul>
        </article>
        {/* FIN DU Devellopement mobile  */}
        <article className="service">
          <div className="service_head">
            <h3>Analyse des donneés & Informatique Decisionnel</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Les Bases & Concepts</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Excel d'Entreprise & Visualisation des donnés</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Analyse avec E-views</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Aide à la prise des décisions</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
