import './Hero.css'
import Nav from '../Components/Navbar'

function Hero() {
    return (
        <>
            <Nav />
            <img className="yellow" src="/assets/Hero_YellowPattern.svg" alt="sun" />
            <div className="heroWrapper">
                <h1>Escolher a si mesma<br />e um ato de <strong>coragem</strong></h1>
<<<<<<< HEAD
                <button><h2>vamos conversar?</h2></button>
=======
                <button>vamos conversar?</button>
>>>>>>> 65a397f6b6a86a4ba332491836d7a6424e88fc8d
            </div>
            <img className="blue" src="/assets/Hero_bluePattern.svg" alt="Blue pattern" />
        </>

    )
}

export default Hero;