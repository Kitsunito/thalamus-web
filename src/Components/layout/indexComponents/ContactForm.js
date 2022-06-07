
import ContactFormDesktop from './ContactFormDesktop'
import ContactFormMobile from './ContactFormMobile'

const ContactForm = () => {
    return window.innerWidth > 1200 ? <ContactFormDesktop /> : <ContactFormMobile /> 

}

export default ContactForm