import React from "react";

export const Button = ({ title }) => {
  const getCv = () => {
    window.open(
      "https://drive.google.com/file/d/10y7h6oe32YupCcdwuLY07Swb4n89BPem/view?usp=sharing"
    );
  };
  return (
    <>
      <button className="btn btn-primary" title={title} onClick={getCv}>
        {title}
      </button>
    </>
  );
};
