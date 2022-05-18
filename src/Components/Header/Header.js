

const Header = () => {
    return (
        <header>
            {/*---- Branding ----*/}
            <div className="brand">
                {/*---- Compony's name ----*/}
                <div className="brand-name">
                    <img src="/branding/brand512.svg" className="brand-name-text" alt="logo" />
                </div>
                {/*---- Compony's logo ----*/}
                <div className="brand-logo">
                <img src="/branding/logo192.svg" className="App-logo" alt="logo" />
                </div>
            </div>
            {/*---- Navbar ----*/}
            <nav className="navbar">
                Acá va el navbar
            </nav>
        </header>
    )
}

export default Header;