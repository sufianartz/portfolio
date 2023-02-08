import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from'../assets/professional.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Sufian</h1>
      <h5 className="textlight">Front-End Developer</h5>
  <CTA/>
<HeaderSocials/>
    
  <div className="me">
<img className="me__img" src={ME} alt='me'/>
    </div>
<a href="#contact" className="scroll__down">Scroll Down</a>


  </div>

    </header>
  );
};

export default Header;
