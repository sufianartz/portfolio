import React from "react";
import "./portfolio.css";
import IMG1 from "../assets/portfolio1.png";
import IMG2 from "../assets/portfolio2.png";
import IMG3 from "../assets/portfolio3.png";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.jpg";
import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Amazon-Clone",
    github: "https://github.com/sufianartz/amazon-clone",
    demo: "https://animated-tapioca-c1f263.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Facebook-Clone",
    github: "https://github.com/sufianartz/connectnow",
    demo: "https://stately-youtiao-9e0589.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Contact MGT System",
    github: "https://github.com/sufianartz/cms",
    demo: "https://github.com/sufianartz/cms",
  },
  {
    id: 4,
    image: IMG4,
    title: "ADNEC Flyer Design",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788499",
  },
  {
    id: 5,
    image: IMG5,
    title: "Diet App UI/UX",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788503",
  },
  {
    id: 6,
    image: IMG6,
    title: "The Hoop Gang logo Design",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788505",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="h5__white">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
