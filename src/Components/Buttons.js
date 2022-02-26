import React, { useState } from "react";
import ReactDom from "react-dom";

function Button() {
  const [infoMe, setInfoMe] = useState(false);
  const [infoExperience, setInfoExperience] = useState(false);
  const [infoEducation, setInfoEducation] = useState(false);

  function buttonInfo(e) {
    if (e.target.innerHTML == "Vem är jag?") {
      setInfoMe(true);
    } else {
      setInfoMe(false);
    }
  }
  function btnInfoExperience(e) {
    if (e.target.innerHTML == "Erfarenhet") {
      setInfoExperience(true);
    } else {
      setInfoExperience(false);
    }
  }
  function btnInfoEducation(e) {
    if (e.target.innerHTML == "Utbildning") {
      setInfoEducation(true);
    } else {
      setInfoEducation(false);
    }
  }

  return (
    <div className="buttons">
      {!infoMe ? (
        <button className="meBtn" onClick={buttonInfo}>
          Vem är jag?
        </button>
      ) : (
        <button
          style={{ backgroundColor: "black", color: "pink" }}
          className="meBtn"
          onClick={buttonInfo}
        >
          Stäng
        </button>
      )}

      {!infoExperience ? (
        <button className="meBtn" onClick={btnInfoExperience}>
          Erfarenhet
        </button>
      ) : (
        <button
          style={{ backgroundColor: "black", color: "pink" }}
          className="meBtn"
          onClick={btnInfoExperience}
        >
          Stäng
        </button>
      )}

      {!infoEducation ? (
        <button className="meBtn" onClick={btnInfoEducation}>
          Utbildning
        </button>
      ) : (
        <button
          style={{ backgroundColor: "black", color: "pink" }}
          className="meBtn"
          onClick={btnInfoEducation}
        >
          Stäng
        </button>
      )}

      {infoMe ? (
        <div className="moreInfoMe">
          <h1 className="moreInfoh1">Vem är då jag!?</h1>
          <p className="moreInfoP">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      ) : null}

      {infoExperience ? (
        <div className="moreInfoExperience">
          <h1 className="moreInfoh1">Min Erfarenhet</h1>
          <p className="moreInfoP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      ) : null}

      {infoEducation ? (
        <div className="moreInfoEducation">
          <h1 className="moreInfoh1">Min Utbildning</h1>
          <p className="moreInfoP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Button;
