import React from "react";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <>
      <footer class="footer" id="contact">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="./images/logo.svg" alt="JC" width="70" height="20" />
          </div>

          <Social />
          <div class="footer-copyright">
            <p>Hecho con el 💓 por Jaime</p>
            <p>Copyright 2021 - Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
