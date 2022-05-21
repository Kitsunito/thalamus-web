import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Entrenadores = () => {
  return (
    <section className="carrousel">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
        bullets={false}
        fillParent={true}
      >
        <div className='carrousel-entrenadores'>
          <img src="/images/profiles/JavierCamandona.png" alt="" srcset="" />
          <h3>con <span>JAVIER</span></h3>
        </div>
        <div className='carrousel-entrenadores'>
          <img src="/images/profiles/CandelaMadariaga.png" alt="" srcset="" />
          <h3>con <span>CANDELA</span></h3>
        </div>
      </AutoplaySlider>
    </section>
  )
}

export default Entrenadores