const Header = () => {
 function handleClick() {
  document.getElementById('mobileMenu').classList.toggle('show');
}
    return (
        <header>
            {/*---- Branding ----*/}
            <div className="brand">
                {/*---- Compony's name ----*/}
                <img src="/images/branding/TextoLogoThalamus.svg" className="brand-name-text" alt="logo" />
                <img src="/images/branding/LogoThalamus.svg" className="brand-logo" alt="logo" />
            </div>
            {/*---- Menu Icon ----*/}
            <img src="/images/icons/menuIcon.svg" alt="Menu Icon" className="menuIcon" onClick={handleClick} />
            {/*---- Navbar ----*/
            /* <nav className="navbar">
                Acá va el navbar
            </nav> */}
        </header>
    )
}

export default Header;