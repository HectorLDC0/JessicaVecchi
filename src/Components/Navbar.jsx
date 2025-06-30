import './Navbar.css'


function Nav() {
    return (
        <nav>

            <div className="container">
                <input className="label-check" id="label-check" type="checkbox" />
                <label htmlFor="label-check" className="hamburger-label">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </label>
            </div>

            <img src="/assets/Logo.svg" alt="Logo" />
        </nav>
    )
}

export default Nav; 