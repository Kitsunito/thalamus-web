import React from 'react'

const ContactForm = () => {
    return (
        <section className='contactForm'>
            <h2>Contactanos</h2>
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
        </section>
    )
}

export default ContactForm