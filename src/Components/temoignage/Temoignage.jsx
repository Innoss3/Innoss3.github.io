import React from "react";
import "./temoignage.css";
import AVTR1 from "../../assets/fonts/img/3337.jpg";
import AVTR2 from "../../assets/fonts/img/3553341.jpg";
import AVTR3 from "../../assets/fonts/img/18132.jpg";
import AVTR4 from "../../assets/fonts/img/analyse-donnees-commerciales.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Grace Tshim's",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit pariatur. Obcaecati dolores rerum corporis ducimus provident, asperiores eum debitis quaerat odit veniam neque eligendi consequuntur, totam quae magnam corrupti!",
  },
  {
    avatar: AVTR2,
    name: "Josué ISWA",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit pariatur. Obcaecati dolores rerum corporis ducimus provident, asperiores eum debitis quaerat odit veniam neque eligendi consequuntur, totam quae magnam corrupti!",
  },
  {
    avatar: AVTR3,
    name: "Corneille KWETE",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit pariatur. Obcaecati dolores rerum corporis ducimus provident, asperiores eum debitis quaerat odit veniam neque eligendi consequuntur, totam quae magnam corrupti!",
  },
  {
    avatar: AVTR4,
    name: "Christelle KIFUGWASI",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit pariatur. Obcaecati dolores rerum corporis ducimus provident, asperiores eum debitis quaerat odit veniam neque eligendi consequuntur, totam quae magnam corrupti!",
  },
];

const temoignage = () => {
  return (
    <section id="temoignage">
      <h5>Avis des clients</h5>
      <h2>Temoignages</h2>

      <Swiper
        className="container temoignage_container"
        modules={[]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
