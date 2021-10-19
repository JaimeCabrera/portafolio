import React from "react";
import { Button } from "./Button";

export const Header = () => {

 
  return (
    <>
      <header className="header">
        <span className="logo">JC</span>
        <nav className="menu">
          <ul>
            <li>
              <a className="is-active" href="#main">
                Hola
              </a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Hablemos</a>
            </li>
          </ul>
        </nav>
        <Button title="Curriculum"/>
      </header>
    </>
  );
};
