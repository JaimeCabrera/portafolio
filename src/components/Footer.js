import React from "react";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="./images/logo.svg" alt="JC" width="70" height="20" />
          </div>

          <Social />
          <div className="footer-copyright">
            <p>Hecho con el 💓 por Jaime</p>
            <p>Copyright 2021 - Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
