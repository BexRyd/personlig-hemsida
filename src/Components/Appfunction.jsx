import React from "react";
import Entry from "./Entry";
import Hobbies from "./hobbies";

function createEntry(hobbyTerm) {
  return (
    <Entry
      key={hobbyTerm.id}
      emoji={hobbyTerm.emoji}
      hobby={hobbyTerm.hobby}
      text={hobbyTerm.text}
    />
  );
}

function Hobby(props) {
  return (
    <div>
      <h1>
        <span>Intressen</span>
      </h1>
      <dl className="hobbyContainer">{Hobbies.map(createEntry)}</dl>
    </div>
  );
}

export default Hobby;
