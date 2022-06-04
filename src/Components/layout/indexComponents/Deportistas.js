import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Deportistas = () => {
  return (
    <section className="carrousel">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1500}
        bullets={false}
        fillParent={true}
      >
        <div className='carrousel-deportistas'>
          <img src="/images/profiles/IgnacioMaestroPuch.png" alt="" srcset="" />
          <h3>junto a <span>IGNACIO</span></h3>
        </div>
        <div>
          <p>Mi nombre es Ignacio Maestro Puch, naci el 13/03/08 y tengo 14.
            Empecé a los 11 en una escuelita llamada edmofut, donde me vieron de independiente. donde salí goleador del torneo. En 2015 entro a Atlético donde practico un año y medio fútbol y rugby, siguiendo con el primero por pedido del club. En 2018 me fui a Alemania a jugar pero me lesione las dos rodillas y tuve que parar 8 meses.
            Al mes y medio de volver entro a primera sin tocar reserva,lo que me costo mucho adaptarme ya era un ritmo totalmente distinto. Comienzo a entrenar en Thalamus lo cual me ayuda mucho a mejorar. Este año me convocaron a la selección.
          </p>
        </div>

        <div className='carrousel-deportistas'>
          <img src="/images/profiles/SantosWagner.png" alt="" srcset="" />
          <h3>junto a <span>SANTOS</span></h3>
        </div>
        <div>
          <p>Mi nombre es Santos Wagner, tengo 16 años y naci el 22/04/2006.
            Empecé a jugar al rugby a los 5-6 años en Tucumán Rugby. Actualmente juego en M16.
            Mi objetivo es ganar los torneos qué hay en el año con mi división y mejorar como persona y jugador.
            Mi sueño es jugar en los pumas y vivir del rugby profesional en el futuro.</p>
        </div>

        <div className='carrousel-deportistas'>
          <img src="/images/profiles/LucianaGarciaGalo.png" alt="" srcset="" />
          <h3>junto a <span>LUCIANA</span></h3>
        </div>
        <div>
          <p>Me llamo Luciana Garcia Galo, tengo 16 años y naci el 28/09/2005.
            Empece a jugar al hockey a los 5 años. Ahora estoy en el club tucuman rugby.
            Como capitana desde 2018 al 2021, años que tambien salimos campeonas (mejor jugadora en la final-goleadora en 2019)
            Debute en la primera del club el 17/07/2021
            A los 12 años me convocaron al seleccionado tucumano sub 12 formando parte de los siguientes hasta el seleccionado mayores. Mi objetivo es salir campeona con el club y mi
            sueño, jugar un mundial y un juego olimpico</p>
        </div>

        <div className='carrousel-deportistas'>
          <img src="/images/profiles/JoaquinMecle.png" alt="" srcset="" />
          <h3>junto a <span>JOAQUIN</span></h3>
        </div>
        <div>
          <p>Joaquin Mecle
            Fecha de nacimiento: 16/03/2007. 15 años
            Jugador de San Martin de Tucuman
            Puesto 7/9/11
            Comencé a jugar al fútbol a los 6 años en la escuelita Play 5.
            Pase por varias escuelas formativas como  Valladares y Unico Sport hasta que en el año 2018 decidí probar en San Martín.
            Entreno todos los días en el club y 3 veces por semana en el gimnasio con la rutina para mi y que los profes van adecuando de acuerdo a mis avances y necesidades.
            Mi objetivo es llegar a debutar en primera y entreno todos los dias para logra eso.</p>
        </div>
      </AutoplaySlider>
    </section>
  )
}

export default Deportistas