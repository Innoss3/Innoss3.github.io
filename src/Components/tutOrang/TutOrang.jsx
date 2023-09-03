import React, { useRef, useState } from "react";
import "./tutOrang.css";
import AVTR1 from "../../assets/fonts/img/etape1.png";
import AVTR2 from "../../assets/fonts/img/etape2.png";
import AVTR3 from "../../assets/fonts/img/etape3.png";
import AVTR4 from "../../assets/fonts/img/etape4.png";
import AVTR5 from "../../assets/fonts/img/etape5.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const data = [
  {
    avatar: AVTR1,
    name: "Etape 1",
    review: `Allez sur votre application de telephone tapez *140# et appuyez sur yes `,
  },
  {
    avatar: AVTR2,
    name: "Etape 2",
    review: `Vous verrez ce menu s'affichez avec trois options:
      1. la première vous servira à consultez votre compte orange fidelite et votre status clients\n
      2. La deuxieme option vous aiderez à consultez les cadeaux des fidelités qu'orange vous offrirez\n
      3. la troisième option c'est votre cible qui va vous permettre de convertir vos points de fidélite \n
      Tapez 3 et entrez `,
  },
  {
    avatar: AVTR3,
    name: "Etape 3",
    review: `Le menu vous proposerez encore trois options dans laquelle il faut choisir celle qui vous interressera entre
       les sms, les forfaits des apelles et les mégabytes pour internet`,
  },
  {
    avatar: AVTR4,
    name: "Etape 4",
    review: `Dans la quatrième étape vous verrez les differntes offres des conversions equivalents au nombre des points que vous detenez dans votre compte,
       Mais attention si vous choisissez une offre qui est superieur au points que vous avez dans votre compte?
        Sachez que l'operation aurait échoué`,
  },
  {
    avatar: AVTR5,
    name: "Etape 5",
    review: `Dans la toute dernière étape on vous demanderez un code pin, pour l'obtenir?\n
       ecrivez moi sur mon compte facebook ou whatsapp en privée, \n
        pour cela allez dans la section contact et cliquez sur l'un de reseaux sociaux pour me contactez en privée`,
  },
];

const tutOrang = () => {
  return (
    <section id="tuto">
      <h5>UTILISEZ VOS POINTS DE FIDELITE</h5>
      <h2>ORANGE</h2>

      <Swiper
        className="container tuto_container"
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="tuto">
              <div className="tuto_avatar">
                <img src={avatar} alt="Avatar One" id="img_tuto" />
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

export default tutOrang;
