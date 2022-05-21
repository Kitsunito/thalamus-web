import React from 'react'

const ContactForm = () => {
    return (
        <section className='contactForm'>
            <h2>Contactanos</h2>
            <form action="">
                <div className="input">
                    <label for="name">Nombre</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label for="email">Email</label>
                    <input type="email" />
                </div>
                <div className="input">
                    <label for="message">Mensaje</label>
                    <textarea type="text" cols="30" rows="10" ></textarea>
                </div>
                <button type="submit">ENVIAR</button>
            </form>
        </section>
    )
}

export default ContactForm