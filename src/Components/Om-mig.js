import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import girl from "./img/girl.jpg";

function OmMig() {
  return (
    <div className="container">
      <header>
        <ul>
          <li>
            <Link className="currentPage" to="/">
              OmMig
            </Link>
          </li>
          <li>
            <Link className="link" to="/Cv">
              Cv
            </Link>
          </li>
          <li>
            <Link className="link" to="/Fritid">
              Fritid
            </Link>
          </li>
          <li>
            <Link className="link" to="/Kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </header>
      <h1 className="aboutH1">Välkommen till en sida med Klös!</h1>
      <img className="girl" src={girl} alt="girl" />
      <div className="aboutContainer">
        <p className="about">Kattgalen Tjej!</p>
        <p className="about">Djur intresserad</p>
        <p className="about">Frontend developper</p>
        <p className="about">Sport intresserad</p>
      </div>
      <Footer />
    </div>
  );
}

export default OmMig;
