import React from "react";

export const Project = ({ description, title, img, code, url }) => {
  return (
    <>
      <div className="project">
        <div className="project-img">
          <img src={img} alt="mac icon" />
        </div>
        <div className="project-description">
          <span className="title">{title}</span>
          <p>{description}</p>
          <a href={code} target="blank" className="btn btn-secondary ">
            Ver Código
          </a>
          <a href={url} target="blank" className="btn btn-primary">
            Ver Proyecto
          </a>
        </div>
      </div>
    </>
  );
};
