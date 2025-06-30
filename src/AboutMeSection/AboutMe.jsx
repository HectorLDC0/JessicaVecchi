import './AboutMe.css';
import Esteira from '../Components/Esteira';

function AboutMe() {
  return (
    <>
      <img src='assets/outline1.svg' className='jessicaSvg' />
      <div className='mainWrapper' >
        <img src='assets/Jessica.jpg' className='jessicaImg' />
        <p className='aboutmeP'>
          Sou psicóloga há mais de 10 anos, brasileira vivendo em Dublin, e atendo principalmente pessoas que, assim como eu, estão atravessando suas próprias travessias longe de casa. Depois de anos trabalhando com psicanálise e psicologia hospitalar, me redescobri na Terapia Cognitivo-Comportamental (TCC), especialmente depois do meu diagnóstico de TDAH aos 29 anos.<br></br> <br></br> <br></br>
          Hoje, além de acolher quem busca se entender melhor, também acompanho meus pacientes na busca por mais autoestima e liberdade no dia a dia. Atendo online, brasileiros que estão espalhados por mais de 10 países.
        </p>
      </div>
      <img src='assets/outline2.svg' className='solSvg' />


      <Esteira />
    </>
  );
}

export default AboutMe;