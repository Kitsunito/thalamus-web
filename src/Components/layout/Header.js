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

    return (
        <header>
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
            {/*---- Navbar ----*/
            /* <nav className="navbar">
                Acá va el navbar
            </nav> */}
        </header>
    )
}

export default Header;