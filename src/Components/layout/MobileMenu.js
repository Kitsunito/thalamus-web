import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const MobileMenu = () => {
  return (
    <div className="mobileMenu">
      <div className="menu-links">
        <Link to="/nosotros"><h2>SOBRE NOSOTROS</h2></Link>
        <hr />
        <Link to="/ejercicios"><h2>EJERCICIOS</h2></Link>
        <hr />
        <Link to="/planes"><h2>PLANES</h2></Link>
        <hr />
        <Link to="/futuro-thalamus"><h2>FUTURO <span>THALAMUS</span> </h2></Link>
      </div>
      <div className="menu-social">
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  )
}

export default MobileMenu