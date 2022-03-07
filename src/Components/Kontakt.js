import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Form from "./Form";

function Kontakt() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link className="link" to="/">
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
            <Link className="currentPage" to="/Kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </header>
      <h1>
        <span>Kontakt</span>
      </h1>
      <Form />
      <Footer />
    </div>
  );
}

export default Kontakt;
