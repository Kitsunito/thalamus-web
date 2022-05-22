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
                <a href="https://wa.me/+5493816263576" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://www.instagram.com/thalamus_altorendimiento/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </footer>
    )
}

export default Footer;