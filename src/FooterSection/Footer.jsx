import './Footer.css'

function Footer() {
    return (
        <>
        <img src='assets/Hero_bluePattern.svg'  className='division'/>

            <footer class="footer">
                 <img src='assets/footerPattern.svg'  className='footersvg'/>
                <div class="footer-content">
                    <div class="logo-section">
                        <div class="logo-container">
                            <img src='assets/JessicaLogo2.svg' />
                        </div>
                    </div>

                    <div class="links-section">
                        <div class="legal-section">
                            <div class="legal-links">
                                <a href="https://wa.me/353838587900?text=Olá%2C%20gostaria%20de%20mais%20informações.">+353 83 874 7398</a>
                                <a href="https://www.instagram.com/jessicavecchi.psi/">@jessicavecchi.psi</a>
                                <a href="mailto:jessicavecchi@gmail.com">jessicavecchi@gmail.com</a>
                            </div>
                        </div>

                        <div class="newsletter-section">
                            <p class="newsletter-description">Se inscreva e receba textos semanais<br></br>para acompanhar sua jornada!.</p>
                            <form class="newsletter-form">
                                <input type="email" name="email" placeholder="Seu email aqui" class="email-input" autocomplete="off" required />
                                <button type="submit" class="subscribe-button">Eu quero!</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='copyrightWrapper'>
                    <div>
                        <h4>© 2025 Jessica Vecchi - Todos os direitos reservados.</h4>
                    </div>
                    <div className='us'>
                        <h4><a href="https://www.linkedin.com/in/juliagarbozza-graphicdesigner/">Design: Júlia Garbozza</a></h4>
                        <h4><a href="https://www.linkedin.com/in/hectordiel/">Desenvolvido por: Hector Diel</a></h4>
                    </div>
                </div>
            </footer >

        </>
    )
}

export default Footer; 