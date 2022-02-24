import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Hobby from "./Appfunction";

function Fritid() {
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
            <Link className="currentPage" to="/Fritid">
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
      <Hobby />
      <Footer />
    </div>
  );
}

export default Fritid;
