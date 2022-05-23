import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const FuturoThalamus = () => {
    return (
        <main className="futuroThalamus">
            <section>
                <div>
                    <h2>FUTURO <span>THALAMUS</span> </h2>
                    <p>Desde Thalamus buscamos que el deportista aprenda a creer en un <span>PROCESO</span> a corto,
                        mediano y largo plazo sobre todo. Buscamos generarle un hábito de <span>CONSTANCIA</span> a
                        través del deporte y el entrenamiento pero que después se transforma en algo
                        aplicable al dia a dia. Y por último que entienda que para poder cumplir sus
                        objetivos debe saber lo que significa el valor del <span>ESFUERZO</span>, que por más talento
                        y capacidades que tenga debe entender que esta parte es fundamental en un proceso
                        de entrenamiento de Alto Rendimiento. Nuestros entrenadores buscan generar un
                        vínculo con los deportistas y brindarles todas las herramientas que estén a su
                        alcance.</p>
                </div>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={1000}
                    bullets={false}
                    className='futuro-slider'
                >
                    <div><img src="/images/futuroThalamus/image0.jpeg" alt="" /></div>
                    <div><img src="/images/futuroThalamus/image1.jpeg" alt="" /></div>
                    <div><img src="/images/futuroThalamus/image2.jpeg" alt="" /></div>
                    <div><img src="/images/futuroThalamus/image3.jpeg" alt="" /></div>
                    <div><img src="/images/futuroThalamus/image4.jpeg" alt="" /></div>
                </AutoplaySlider>

            </section>
        </main>
    )
}

export default FuturoThalamus