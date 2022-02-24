import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          <img src={props.emoji} alt="hobbies" />
        </span>
        <span>{props.hobby}</span>
      </dt>
      <dd>{props.text}</dd>
    </div>
  );
}

export default Entry;
