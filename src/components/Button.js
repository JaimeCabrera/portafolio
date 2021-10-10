import React from "react";

export const Button = ({ title }) => {
  return (
    <>
      <button className="btn btn-primary" title="Descargar curriculum">
        {title}
      </button>
    </>
  );
};
