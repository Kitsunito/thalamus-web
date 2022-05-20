import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';


const MobileMenu = () => {
  return (
    <div className="mobileMenu">
      <div className="menu-links">
        <h2>SOBRE NOSOTROS</h2>
        <hr />
        <h2>EJERCICIOS</h2>
        <hr />
        <h2>PLANES</h2>
        <hr />
        <h2>FUTURO <span>THALAMUS</span> </h2>
      </div>
      <div className="menu-social">
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  )
}

export default MobileMenu