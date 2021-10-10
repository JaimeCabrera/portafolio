import { Header } from "./components/Header";
import { Project } from "./components/Project";
import { SectionComment } from "./components/SectionComment";
import { SectionInfo } from "./components/SectionInfo";
import { Footer } from "./components/Footer";
import ot_image from "./assets/images/ot.PNG";
import sl_image from "./assets/images/sl.PNG";
import otb_image from "./assets/images/otb.PNG";
import portafolio_image from "./assets/images/portafolio.PNG";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <div className="App" id="main">
      <Header />
      <SectionInfo />
      <SectionComment />
      <section id="projects">
        <Project
          description="Proyecto front y backend el frontend esta hecho con Vuejs, Boostrap
            y backend esta hecho en node con Mysql, Sequelize, jwt el despliegue
            del backend esta hecho en Heroku, el front end en github-pages, las tareas se pueden enviar por correo"
          title="Organizador de tareas Frontend"
          img={ot_image}
          code="https://github.com/JaimeCabrera/prog2web"
          url="https://jaimecabrera.github.io/prog2web/"
        />
        <Project
          description="Backend del proyecto Organizador de tareas, api rest hecha con node y exprees, con una base de datos Mysql, usando el ORM Sequelize, ademas de Jwt para la autenticacion y nodemailer para el envio de correos, el backend esta en heroku"
          title="Organizador de Tareas Backend"
          img={otb_image}
          code="https://github.com/JaimeCabrera/prog2api"
          url="https://apiprog2.herokuapp.com/"
        />
        <Project
          description="Catalogo de productos hecho con Laravel 7 y Vuejs actualmente esta desplegado el aws en un maquina virtual tiene una base de datos Mysql "
          title="Catalogo de productos"
          img={sl_image}
          code="https://github.com/JaimeCabrera/prog2api"
          url="http://18.190.130.92/"
        />
        <Project
          description="Plantilla para un portafolio hecho con html5, css"
          title="Portafolio"
          img={portafolio_image}
          code="https://github.com/JaimeCabrera/prog2api"
          url="https://jaimecabrera.github.io/portafolio-jaume/#main"
        />
      </section>
      <section className="contact" id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
