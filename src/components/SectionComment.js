import React from "react";
import arrow_down from "../assets/icons/arrow-down.svg";

export const SectionComment = () => {
  return (
    <>
      <section className="comment">
        <h2>
          <p>
            A lo largo de mi carrera como Frontend, he tenido el privilegio de
            trabajar en proyectos retadores e increíbles
          </p>
          <p className="comment_info">
            Aquí hay algunos que me gustaría compartir.
          </p>
          <a className="info-icon" href="#ff">
            <img src={arrow_down} width="80" height="80" alt="flecha abajo" />
          </a>
        </h2>
      </section>
    </>
  );
};
