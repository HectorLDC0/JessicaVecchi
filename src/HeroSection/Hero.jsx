import './Hero.css'
import Nav from '../Components/Navbar'

function Hero() {
    return (
        <>
            <Nav />
            <img className="yellow" src="/assets/Hero_YellowPattern.svg" alt="sun"/>
            <img className="blue" src="/assets/Hero_bluePattern.svg" alt="Blue pattern"/>
        </>

    )
}

export default Hero;