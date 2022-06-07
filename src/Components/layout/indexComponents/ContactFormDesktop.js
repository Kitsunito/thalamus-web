import { motion } from "framer-motion";
import { titlesVariants } from "../../../animations";
import { useInView } from "react-intersection-observer";


const ContactFormDesktop = () => {

    const { ref, inView } = useInView();

    return (
        <section ref={ref} className='contactForm'>
            <h2>Contactanos</h2>
            <div className="contactForm-container">
                <div>
                    <form action="">
                        <div className="input">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="message">Mensaje</label>
                            <textarea type="text" cols="30" rows="10" ></textarea>
                        </div>
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
                {inView ? <motion.div
                    variants={titlesVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                    <h3>SEGUIR CUANDO NO PUEDES MAS</h3>
                    <h3>ES LO QUE TE HACE </h3>
                    <h3><span>DIFERENTE</span> A LOS DEMAS</h3>
                </motion.div> :
                    null}
            </div>
        </section>
    )
}

export default ContactFormDesktop



