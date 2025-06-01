import './AboutMe.css';
import FadeWrapper from '../Components/FadeWrapper';

function AboutMe() {
  return (
    <>
      <div className="bb"></div>
      
      {/* Primeira seção - fade in ao carregar */}
      <FadeWrapper type="load" delay={500}>
        <img></img>
        <h1>Ola!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia vero fugiat id illum quo quidem, laboriosam nihil eum labore neque! Quas aspernatur nesciunt veritatis obcaecati reprehenderit! Inventore alias nesciunt excepturi.</p>
      </FadeWrapper>

      {/* Parte 2 - cada item com fade in no scroll */}
      <div className='statusWrapper'>
        <FadeWrapper type="scroll" delay={100} direction="up">
          <div>
            <img></img>
            <div>
              <h1>Ola!</h1>
              <p>muitos anos psicologando e bla bla</p>
            </div>
          </div>
        </FadeWrapper>

        <FadeWrapper type="scroll" delay={200} direction="left">
          <div>
            <img></img>
            <div>
              <h1>Ola!</h1>
              <p>muitos anos psicologando e bla bla</p>
            </div>
          </div>
        </FadeWrapper>

        <FadeWrapper type="scroll" delay={400} direction="right">
          <div>
            <img></img>
            <div>
              <h1>Ola!</h1>
              <p>muitos anos psicologando e bla bla</p>
            </div>
          </div>
        </FadeWrapper>
      </div>
    </>
  );
}

export default AboutMe;