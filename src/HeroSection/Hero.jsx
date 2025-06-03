import './Hero.css'
import Nav from '../Components/Navbar'
import FadeWrapper from '../Components/FadeWrapper';

function Hero() {
    return (
        <>
            <Nav />

            <img className="yellow" src="/assets/Hero_YellowPattern.svg" alt="sun" />
            <div className="heroWrapper">
                <FadeWrapper type="scroll" delay={300} direction="down">
                    <h1>Escolher a si mesma<br />e um ato de <strong>coragem</strong></h1>
                </FadeWrapper>
                <FadeWrapper type="scroll" delay={300} direction="up">
                    <button><h2>vamos conversar?</h2></button>
                </FadeWrapper>
            </div>
            <img className="blue" src="/assets/Hero_bluePattern.svg" alt="Blue pattern" />
        </>

    )
}

export default Hero;