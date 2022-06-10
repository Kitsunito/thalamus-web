import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const EntrenadoresDesktop = () => {
  return (
    <section className="carrouselDesktop">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={4000}
        bullets={false}
      >
        <div className="carrouselDesktopContainer">
          <div className='perfil perfilEntrenador-BG'>
            <img src="/images/profiles/JuanNovillo.webp" alt="" srcset="" />
            <h3>con <span>JUAN</span></h3>
          </div>
          <div className='descripcion'>
            <p>
              Juan Leon Novillo, nacido el 08/07/1992, es Profesor De Educación Física  y esta finalizando una Licenciatura en Alto Rendimiento deportivo en la universidad abierta interamericana.
              Su preferencia es ser entrenador personal de deportistas de alto rendimiento, niños con ganas de progresar, apasionado del movimiento y el cerebro humano, siendo especialista en el movimiento y rendimiento deportivo.
              Fue Preparador físico en divisiones infantiles y juveniles en TRC. Entrenador personal de diferentes deportistas de diferentes disciplinas. Hoy es socio,  entrenador de <span>Thalamus</span> Centro De Alto Rendimiento y entrenador online.
            </p>
          </div>
        </div>

        <div className="carrouselDesktopContainer">
          <div className='perfil perfilEntrenador-BG'>
            <img src="/images/profiles/JorgeDominguez.webp" alt="" srcset="" />
            <h3>con <span>JORGE</span></h3>
          </div>
          <div className='descripcion'>
            <p> Jorge Dominguez, nacido el 19/05/1991, es Profesor De Educación Física, con preferencia en el entrenamiento personal de deportistas.
              Fue Preparador físico en divisiones infantiles y juveniles en TRC. Entrenador personal de diferentes deportistas, y hoy es socio y entrenador de <span>Thalamus</span> Centro De Alto Rendimiento.
              Realizo cursos en EPFA (Pablo añon-Ariel Couceiro), Halterofilia (Horacio Digiuni), Fuerza efectiva y evaluaciones (Jorge González Güedes), Fuerza y potencia (Horacio Anselmi), Método complex y contraste (Pablo Añon). </p>
          </div>
        </div>

        <div className="carrouselDesktopContainer">
          <div className='perfil perfilEntrenador-BG'>
            <img src="/images/profiles/CandelaMadariaga.webp" alt="" srcset="" />
            <h3>con <span>CANDELA</span></h3>
          </div>
          <div className='descripcion'>
            <p>Candela Madariaga, con 27 años, nacida San Miguel de Tucumán. Egresada del Colegio El Salvador en 2012 y de la Facultad de Ed. Física de la UNT en 2021. Trabaja en <span>Thalamus</span> desde 2020, y entrena ahí desde sus inicios. Previamente trabajó en Dinamo y  como profe en la escuelita de fútbol del Colegio Boisdron desde 2016 hasta 2020, actualmente en la Academia de Fútbol DELCO y como Dt de dos equipos de fútbol amateur que participan en el Torneo Las Cañas, El Farça y Patronato. Juega al fútbol desde su infancia, pasando por clubes como San Martín, Argentinos del Norte, Uthgra, entre otros. Actualmente se desempeña en fútbol sala en el club All Boys.</p>
          </div>
        </div>

        <div className="carrouselDesktopContainer">
          <div className='perfil perfilEntrenador-BG'>
            <img src="/images/profiles/JavierCamandona.webp" alt="" srcset="" />
            <h3>con <span>JAVIER</span></h3>
          </div>
          <div className='descripcion'>
            <p>Javier Camandona, con 23 años, egresado del colegio San Francisco. Actualmente esta cursando la carrera de Prof de educación física en la Fac de ed física de tucuman y una diplomatura en entrenamiento y nutrición de manera on line. Desde ya hace 3 años empezo a trabajar como entrenador, lo cual es lo que lo apasiona, y busco seguir aprendiendo. Hace un mes entro a trabajar en <span>Thalamus</span>, algo que quería desde hace un tiempo.</p>
          </div>
        </div>

      </AutoplaySlider>
    </section >
  )
}

export default EntrenadoresDesktop