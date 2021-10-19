import React from "react";

export const ContactForm = () => {
  return (
    <>
      <form action="" method="" className="form">
        <div className="form-content">
          <h2 className="title">Hablemos</h2>
          <p>
            Si está interesado en trabajar conmigo en su próximo proyecto, no
            dude en ponerse en contacto conmigo.
          </p>
          <div className="form-control">
            <label>Nombre Completo </label>
            <input
              name="name"
              id="form-name"
              type="text"
              placeholder="Jaime"
              required
            />
          </div>
          <div className="form-control">
            <label>Correo Electrónico </label>
            <input
              name="email"
              id="form-email"
              type="email"
              placeholder="email@email.com"
              required
            />
          </div>
          <div className="form-control">
            <label>Mensaje </label>
            <textarea
              name="message"
              id="form-message"
              type="text"
              cols="30"
              rows="5"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </>
  );
};
