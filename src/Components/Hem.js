import React, { useState } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import Button from "./Buttons";
import Footer from "./Footer";
import girl from "./img/girl4.jpg";

function Hem() {
  return (
    <div className="container">
      <header>
        <ul>
          <li>
            <Link className="currentPage" to="/">
              Hem
            </Link>
          </li>
          <li>
            <Link className="link" to="/Tjanster">
              Tjänster
            </Link>
          </li>
          <li>
            <Link className="link" to="/Fritid">
              Intressen
            </Link>
          </li>
          <li>
            <Link className="link" to="/Kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </header>
      <h1>
        <span>Hem</span>
      </h1>

      <h1 className="aboutH1">Välkommen till en sida med Klös!</h1>
      <img className="girl" src={girl} alt="girl" />

      <Button />
      <Footer />
    </div>
  );
}

export default Hem;
