import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
/* import leopard from "./img/leopard.png"; */

function Cv() {
  return (
    <div>
      <header>
        {/*  <img src={leopard} /> */}
        <ul>
          <li>
            <Link className="link" to="/">
              OmMig
            </Link>
          </li>
          <li>
            <Link className="currentPage" to="/Cv">
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
      <Footer />
    </div>
  );
}

export default Cv;
