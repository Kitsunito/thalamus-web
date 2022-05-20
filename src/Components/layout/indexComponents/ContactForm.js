import React from 'react'

const ContactForm = () => {
    return (
        <section className='contactForm'>
            <h2>Contactanos</h2>
            <form action="">
                <label for="name">Nombre</label>
                <input type="text" />
                <label for="email">Email</label>
                <input type="email" />
                <label for="message">Mensaje</label>
                <textarea type="text" cols="30" rows="10" ></textarea>
            </form>
        </section>
    )
}

export default ContactForm