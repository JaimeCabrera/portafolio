import React from "react";
import { Button } from "./Button";
import { Social } from "./Social";

import dev from "../assets/images/dev.png";

export const SectionInfo = () => {
  return (
    <section className="info" id="main">
      <div className="card">
        <img alt="persona" src={dev} className="person" />
      </div>
      <div className="info-content">
        <h3>!Hola a todos¡</h3>
        <h1>Soy Jaime</h1>
        <p className="info-description">
          Frontend Developer que le encanta implementar diseños que inspiran y
          atraen a las personas, ademas tambien me apasiona el backend.
        </p>
        <Social />
        <Button title="descargar curriculum" />
      </div>
    </section>
  );
};
