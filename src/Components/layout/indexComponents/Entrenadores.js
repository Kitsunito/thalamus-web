import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Entrenadores = () => {
  return (
    <section className="carrousel">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={4000}
        bullets={false}
        fillParent={true}
      >
        <div className='carrousel-entrenadores'>
          <img src="/images/profiles/JavierCamandona.png" alt="" srcset="" />
          <h3>con <span>JAVIER</span></h3>
        </div>
        <div>
          <p>Con 23 años, egresado del colegio San Francisco. Actualmente esta cursando la carrera de Prof de educación física en la Fac de ed física de tucuman y una diplomatura en entrenamiento y nutrición de manera on line. Desde ya hace 3 años empezo a trabajar como entrenador, lo cual es lo que lo apasiona, y busco seguir aprendiendo. Hace un mes entro a trabajar en <span>Thalamus</span>, algo que quería desde hace un tiempo.</p>
        </div>
        <div className='carrousel-entrenadores'>
          <img src="/images/profiles/CandelaMadariaga.png" alt="" srcset="" />
          <h3>con <span>CANDELA</span></h3>
        </div>
        <div>
          <p>Con 27 años, nacida San Miguel de Tucumán. Egresada del Colegio El Salvador en 2012 y de la Facultad de Ed. Física de la UNT en 2021. Trabaja en <span>Thalamus</span> desde 2020, y entrena ahí desde sus inicios. Previamente trabajó en Dinamo y  como profe en la escuelita de fútbol del Colegio Boisdron desde 2016 hasta 2020, actualmente en la Academia de Fútbol DELCO y como Dt de dos equipos de fútbol amateur que participan en el Torneo Las Cañas, El Farça y Patronato. Juega al fútbol desde su infancia, pasando por clubes como San Martín, Argentinos del Norte, Uthgra, entre otros. Actualmente se desempeña en fútbol sala en el club All Boys.</p>
        </div>
      </AutoplaySlider>
    </section>
  )
}

export default Entrenadores