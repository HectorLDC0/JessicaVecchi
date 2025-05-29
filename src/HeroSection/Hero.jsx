import './Hero.css'
import Nav from '../Components/Navbar'

function Hero() {
    return (
        <>
            <Nav />
            <img className="yellow" src="/assets/Hero_YellowPattern.svg" alt="sun" />
            <div className="heroWrapper">
                <h1>Escolher a si mesma<br />e um ato de <strong>coragem</strong></h1>
                <button><h2>vamos conversar?</h2></button>
            </div>
            <img className="blue" src="/assets/Hero_bluePattern.svg" alt="Blue pattern" />
        </>

    )
}

export default Hero;