import { motion } from "framer-motion";
import { title2Variants } from "../../../animations";
import { useInView } from "react-intersection-observer";
import { useState } from "react";


const ContactFormDesktop = () => {

    const { ref, inView } = useInView();

        //-----States-----
    //Instanciamos un estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

        //-----Functions-----
    /*Esta función gestiona el contenido de los inputs almacenando los valores en 
    el estado formData*/
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <section ref={ref} className='contactForm'>
            <h2>Contactanos</h2>
            <div className="contactForm-container">
                <div>
                    <form name="frmContacto" method="post" action="sendbymail.php">
                        <div className="input">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" 
                                name="name" 
                                onChange={handleChange}
                                value={formData.name}
                                id="name"
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                                name="email" 
                                onChange={handleChange}
                                value={formData.email}
                                id="email"
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="message">Mensaje</label>
                            <textarea type="text" 
                                cols="30" 
                                rows="10" 
                                name="message" 
                                onChange={handleChange}
                                value={formData.message}
                                id="message" 
                            />
                        </div>
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
                {inView ? <motion.div
                    variants={title2Variants}
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



