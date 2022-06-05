import { Link } from 'react-router-dom';

//Animation
import {motion} from 'framer-motion';
import { headerVariants, brandNameVariants, logoVariants } from '../../animations';


const Header = () => {
    function handleClickLogo() {
        if (document.getElementById('mobileMenu').classList.contains('show')) {
            document.getElementById('mobileMenu').classList.toggle('show');
        }
    }

    function handleClickMenu() {
        document.getElementById('mobileMenu').classList.toggle('show');
    }

    return (
        <motion.header className={window.innerWidth > 1200 ? "headerDesktop" : "headerMobile"}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            {/*---- Branding ----*/}
            <div className="brand">
                {/*---- Compony's name ----*/}
                <Link to="/" onClick={handleClickLogo}>
                    <motion.img src="/images/branding/TextoLogoThalamus.svg" className="brand-name-text" alt="logo" 
                        variants={brandNameVariants}
                    />
                    <motion.img src="/images/branding/LogoThalamus.svg" className="brand-logo" alt="logo" 
                        variants={logoVariants}
                    />
                </Link>
            </div>
            {/*Dependiendo del tamaño mostramos el ícono del menú o el navbar*/}
            {/*---- Menu Icon ----*/}
            {window.innerWidth < 1200 ? 
                <img src="/images/icons/menuIcon.svg" alt="Menu Icon" className="menuIcon" onClick={handleClickMenu} /> :
                <div className='navBar'>
                    <Link to="/"><h2 >INICIO</h2></Link>
                    <Link to="/nosotros"><h2 >SOBRE <span>NOSOTROS</span></h2></Link>
                    <Link to="/ejercicios"><h2 >EJERCICIOS</h2></Link>
                    <Link to="/planes"><h2 >PLANES</h2></Link>
                </div>}
            
        </motion.header>
    )
}

export default Header;