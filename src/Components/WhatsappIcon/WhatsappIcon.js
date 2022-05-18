import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappIcon = () => {

    const element = <FontAwesomeIcon icon={faWhatsapp} />

    return (
        <>
            {/*---- Whatsapp API Link ----*/}
            <a href="https://api.whatsapp.com/send/?phone=573213212112&text=Hola%21+Quer%C3%ADa+consultar+por+los+planes+que+tienen.&app_absent=0">
                {element}
            </a> 
        </>
        )
        
}

export default WhatsappIcon;
