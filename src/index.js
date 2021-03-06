import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Tjanster from "./Components/Tjanster";
import Kontakt from "./Components/Kontakt";
import Fritid from "./Components/Fritid";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Tjanster" element={<Tjanster />} />
        <Route path="/Fritid" element={<Fritid />} />
        <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
