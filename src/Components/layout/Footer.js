import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            {/*---- Developers ----*/}
            <div className="footer-devs">
                <p className="footer-devs-intro">dev by</p>
                <p className="footer-devs-names">Marcos Labra & Pablo Quiña</p>
                <p className="footer-copyright">® Copyright Thalamus 2022</p>
            </div>
            {/*---- Social Media ----*/}
            <div className="footer-social">
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </footer>
    )
}

export default Footer;