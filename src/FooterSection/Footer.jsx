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
                                <a href="#xxx">+353 83 874 7398</a>
                                <a href="#xxx">@jessicavecchi.psi</a>
                                <a href="#xxx">jessicavecchi@gmail.com</a>
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
                        <h4>Design: Júlia Garbozza</h4>
                        <h4>Desenvolvido por: Hector Diel</h4>
                    </div>
                </div>
            </footer >

        </>
    )
}

export default Footer; 