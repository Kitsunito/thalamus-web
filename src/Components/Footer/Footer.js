import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            {/*---- Developers ----*/}
            <div className="footer-devs">
                <p className="footer-devs-intro">dev by</p>
                <p className="footer-devs-names">Marcos Labra & Pablo Quiña</p>
            </div>
            {/*---- Copyright ----*/}
            <div className="footer-copyright">
                <p>® Copyrght Thalamus 2022</p>
            </div>
            {/*---- Social Media ----*/}
            <div className="footer-social">
                <FontAwesomeIcon icon={faWhatsappSquare} />
                <FontAwesomeIcon icon={faInstagramSquare} />
            </div>
        </footer>
    )
}

export default Footer;