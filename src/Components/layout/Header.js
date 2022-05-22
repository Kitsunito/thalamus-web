import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            {/*---- Branding ----*/}
            <div className="brand">
                {/*---- Compony's name ----*/}
                <Link to="/">
                    <img src="/images/branding/TextoLogoThalamus.svg" className="brand-name-text" alt="logo" />
                    <img src="/images/branding/LogoThalamus.svg" className="brand-logo" alt="logo" />
                </Link>
            </div>
            {/*---- Menu Icon ----*/}
            <img src="/images/icons/menuIcon.svg" alt="Menu Icon" className="menuIcon" />
            {/*---- Navbar ----*/
            /* <nav className="navbar">
                Acá va el navbar
            </nav> */}
        </header>
    )
}

export default Header;