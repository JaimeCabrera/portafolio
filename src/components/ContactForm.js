import React from "react";

export const ContactForm = () => {
  return (
    <>
      <form action="" method="" class="form">
        <div class="form-content">
          <h2 class="title">Hablemos</h2>
          <p>
            Si está interesado en trabajar conmigo en su próximo proyecto, no
            dude en ponerse en contacto conmigo.
          </p>
          <div class="form-control">
            <label for="form-name">Nombre Completo </label>
            <input
              name="name"
              id="form-name"
              type="text"
              placeholder="Juan"
              autofocus
              required
            />
          </div>
          <div class="form-control">
            <label for="form-email">Correo Electronico </label>
            <input
              name="email"
              id="form-email"
              type="email"
              placeholder="email@email.com"
              required
            />
          </div>
          <div class="form-control">
            <label for="form-message">Mensaje </label>
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
          <button class="btn btn-primary" type="submit">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </>
  );
};
