const ContactFormDesktop = () => {
    return (
        <section className='contactForm'>
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
                <div>
                    <h3>SEGUIR CUANDO NO PUEDES MAS</h3>
                    <h3>ES LO QUE TE HACE </h3>
                    <h3><span>DIFERENTE</span> A LOS DEMAS</h3>
                </div>
            </div>
        </section>
    )
}

export default ContactFormDesktop