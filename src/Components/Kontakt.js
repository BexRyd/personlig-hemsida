import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Kontakt() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link className="link" to="/">
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
            <Link className="currentPage" to="/Kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </header>
      <Footer />
    </div>
  );
}

export default Kontakt;
