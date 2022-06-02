import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const DeportistasDesktop = () => {
  return (
    <section className="carrouselDesktop">
      <AwesomeSlider
      bullets={false}
      >
        <div className="carrouselDesktopContainer">
          <div className='perfil perfilDeportista-BG'>
            <img src="/images/profiles/JavierCamandona.png" alt="" srcset="" />
            <h3>con <span>JAVIER</span></h3>
          </div>
          <div className='descripcion'>
            <p>Con 23 años, egresado del colegio San Francisco. Actualmente esta cursando la carrera de Prof de educación física en la Fac de ed física de tucuman y una diplomatura en entrenamiento y nutrición de manera on line. Desde ya hace 3 años empezo a trabajar como entrenador, lo cual es lo que lo apasiona, y busco seguir aprendiendo. Hace un mes entro a trabajar en <span>Thalamus</span>, algo que quería desde hace un tiempo.</p>
          </div>
        </div>
        <div className="carrouselDesktopContainer">
          <div className='perfil perfilDeportista-BG'>
            <img src="/images/profiles/JavierCamandona.png" alt="" srcset="" />
            <h3>con <span>JAVIER</span></h3>
          </div>
          <div className='descripcion'>
            <p>Con 23 años, egresado del colegio San Francisco. Actualmente esta cursando la carrera de Prof de educación física en la Fac de ed física de tucuman y una diplomatura en entrenamiento y nutrición de manera on line. Desde ya hace 3 años empezo a trabajar como entrenador, lo cual es lo que lo apasiona, y busco seguir aprendiendo. Hace un mes entro a trabajar en <span>Thalamus</span>, algo que quería desde hace un tiempo.</p>
          </div>
        </div>
      </AwesomeSlider>
    </section >
  )
}

export default DeportistasDesktop