import { Link } from 'react-router-dom';

const Header = () => {
    function handleClickLogo() {
        if (document.getElementById('mobileMenu').classList.contains('show')) {
            document.getElementById('mobileMenu').classList.toggle('show');
        }
    }

    function handleClickMenu() {
        document.getElementById('mobileMenu').classList.toggle('show');
    }

    if (window.innerWidth < 1200) {
        return (
            <header className='headerMobile'>
                {/*---- Branding ----*/}
                <div className="brand">
                    {/*---- Compony's name ----*/}
                    <Link to="/" onClick={handleClickLogo}>
                        <img src="/images/branding/TextoLogoThalamus.svg" className="brand-name-text" alt="logo" />
                        <img src="/images/branding/LogoThalamus.svg" className="brand-logo" alt="logo" />
                    </Link>
                </div>
                {/*---- Menu Icon ----*/}
                <img src="/images/icons/menuIcon.svg" alt="Menu Icon" className="menuIcon" onClick={handleClickMenu} />
            </header>
        )
    } else {
        return (
            <header className='headerDesktop'>
                {/*---- Branding ----*/}
                <div className="brand">
                    {/*---- Compony's name ----*/}
                    <Link to="/" onClick={handleClickLogo}>
                        <img src="/images/branding/TextoLogoThalamus.svg" className="brand-name-text" alt="logo" />
                        <img src="/images/branding/LogoThalamus.svg" className="brand-logo" alt="logo" />
                    </Link>
                </div>
                {/*---- Nav Bar ----*/}
                <div className='navBar'>
                    <Link to="/"><h2 >INICIO</h2></Link>
                    <Link to="/nosotros"><h2 >SOBRE <span>NOSOTROS</span></h2></Link>
                    <Link to="/ejercicios"><h2 >EJERCICIOS</h2></Link>
                    <Link to="/planes"><h2 >PLANES</h2></Link>
                </div>
            </header>
        )
    }
}

export default Header;