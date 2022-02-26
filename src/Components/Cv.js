import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import djurpassning from "./img/djurpassning.jpg";
import smadjurshotell from "./img/smadjurshotell.jpg";
import promenader from "./img/promenader.jpg";

function Cv() {
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
            <Link className="currentPage" to="/Cv">
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
        <span>Tjänster</span>
      </h1>

      <div className="tjansterInfo">
        <h1 className="tjansterH1">Våra tjänster</h1>
        <p className="tjansterP">
          Har ni smådjur och ska åka ivåg? Lång semester eller en kort, hos oss
          kan ni lämna ert djur för djurpassning på vårat smådjurshotell.
          <br />
          Vi passar även hund och katt. Utöver denna tjänst tar vi även med din
          hund på promenader.
        </p>
      </div>
      <div className="tjansterContainer">
        <img className="tjansterImg" src={djurpassning} alt="katter" />
        <img className="tjansterImg" src={smadjurshotell} alt="sköldpadda" />
        <img className="tjansterImg" src={promenader} alt="hund" />
      </div>
      <Footer />
    </div>
  );
}

export default Cv;
