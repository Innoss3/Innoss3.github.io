import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/fonts/img/FB_IMG_16841476649678987.jpg";
import IMG2 from "../../assets/fonts/img/FB_IMG_16841469973854669.jpg";
import IMG3 from "../../assets/fonts/img/FB_IMG_16841800363966193.jpg";
import IMG4 from "../../assets/fonts/img/FB_IMG_16840567807801925.jpg";
import IMG5 from "../../assets/fonts/img/FB_IMG_16841470223266597.jpg";
import IMG6 from "../../assets/fonts/img/FB_IMG_16840558044869117.jpg";

// FAUX PAS UTILISER CES IMAGES EN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Maket 1",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Maket 2",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Maket 3",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maket 4",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Maket 5",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Maket 6",
    github: "#",
    demo: "#",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes Traveaux Recent</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
