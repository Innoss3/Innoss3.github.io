import React, { useRef, useState } from "react";
import "./temoignage.css";
import AVTR1 from "../../assets/fonts/img/IMG-20230903-WA0000.jpg";
import AVTR2 from "../../assets/fonts/img/FB_IMG_16937728455023934.jpg";
import AVTR3 from "../../assets/fonts/img/IMG-20230601-WA0022.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Grace Tshim's",
    review: `Je suis l'un des collaborateurs de ID DIAKIESE
    Je connais ce gars ça fait déja 5 ans 
    il est vraiment super dans les domaines citez ci-haut `,
  },
  {
    avatar: AVTR2,
    name: "Josué ISWA",
    review: `Je suis Josué ISWA Develloper web & mobile
    Je connais ce gars dans des nombreuses réalisations 
    c'est un doué fantastic et super intéressant`,
  },
  {
    avatar: AVTR3,
    name: "Corneille KWETE",
    review: `Je suis Monsieur Corneille
    J'ai connu ce gars lors d'une conférence je vous rassure 
    il est vraiment super dans les domaines des réseaux & base des donnés`,
  },
];

const temoignage = () => {
  return (
    <section id="temoignage">
      <h4>Avis des clients</h4>
      <h2>Temoignages</h2>

      <Swiper
        className="container temoignage_container"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="temoignage">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default temoignage;
