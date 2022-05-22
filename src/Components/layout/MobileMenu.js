import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const MobileMenu = () => {
  function handleClick() {
    if (document.getElementById('mobileMenu').classList.contains('show')) {
      document.getElementById('mobileMenu').classList.toggle('show');
    }
  }
  return (
    <div className="mobileMenu" id="mobileMenu">
      <div className="menu-links">
        <Link to="/nosotros"><h2 onClick={handleClick}>SOBRE <span>NOSOTROS</span></h2></Link>
        <hr />
        <Link to="/ejercicios"><h2 onClick={handleClick}>EJERCICIOS</h2></Link>
        <hr />
        <Link to="/planes"><h2 onClick={handleClick}>PLANES</h2></Link>
        <hr />
        <Link to="/futuro-thalamus" onClick={handleClick}><h2>FUTURO <span>THALAMUS</span> </h2></Link>
      </div>
      <div className="menu-social">
        <a href="https://wa.me/+5493816263576?text=%C2%A1Hola!%20Queria%20consultar%20para%20empezar%20a%20entrenar%20con%20ustedes" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href="https://www.instagram.com/thalamus_altorendimiento/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  )
}

export default MobileMenu