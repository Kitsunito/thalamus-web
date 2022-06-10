import { useState } from "react";
const ContactFormMobile = () => {

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
        <section className='contactForm'>
            <h2>Contactanos</h2>
            <form action="">
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
                    <input type="email" />
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
        </section>
    )
}

export default ContactFormMobile