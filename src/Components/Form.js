import React, { useState } from "react";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setformData((previusValue) => {
      return previusValue + formData;
    });
    console.log(formData);
  };

  const [formData, setformData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    text: "",
  });

  const [formSent, setFormSent] = useState(false);

  return (
    <div>
      {!formSent ? (
        <form onSubmit={handleSubmit} className="form" id="form">
          <label htmlFor="Fname" className="form-label">
            Förnamn
          </label>
          <br />
          <input
            onChange={(e) =>
              setformData({ ...formData, Fname: e.target.value })
            }
            value={formData.Fname}
            type="text"
            className="form-control"
            id="Fname"
            placeholder="Förnamn"
            required
          />
          <label htmlFor="Lname" className="form-label">
            <br />
            Efternamn
          </label>
          <br />

          <input
            onChange={(e) => {
              setformData({ ...formData, Lname: e.target.value });
            }}
            value={formData.Lname}
            type="text"
            placeholder="Efternamn"
            id="Lname"
            required
          />

          <br />
          <label htmlFor="email" className="form-label">
            <br />
            Email
          </label>
          <br />

          <input
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            type="email"
            placeholder="Email"
            id="email"
            required
          />
          <br />
          <textarea
            onChange={(e) => setformData({ ...formData, text: e.target.value })}
            value={formData.text}
            name="comment"
            form="form"
            id="textArea"
            required
          ></textarea>
          <br />

          <button type="submit">Skicka</button>
        </form>
      ) : (
        <div className="formSent">
          <h1>Skickat!</h1>
          <p>Tack för ditt mejl! Vi kontaktar er så fort som möjligt</p>
        </div>
      )}
    </div>
  );
}

export default Form;
