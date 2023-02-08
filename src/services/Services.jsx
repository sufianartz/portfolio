import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5 className="h5__white">What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of web applications using React JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>LReact JS-based UI/UX design and development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building custom React JS components and widgets</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementation of responsive design using React JS</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of React JS with other technologies and platforms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintenance and support of existing React JS applications</p>
            </li>
          </ul>
        </article>

        {/* End of UI */}
        {/* <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article> */}

        {/* END OF WEB */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo design and branding</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website design and layout</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Brochures, Flyers, Billboards, Social media posts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photo editing and manipulation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Real Estate posts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Infographic design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
