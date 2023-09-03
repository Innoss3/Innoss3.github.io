import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Services offerts</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX DESIGN</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* FIN DU Devellopement mobile  */}
      </div>
    </section>
  );
};

export default Services;
