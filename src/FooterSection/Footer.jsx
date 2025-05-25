import './Footer.css'

function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-content">
                    <div class="logo-section">
                        <div class="logo-container">
                            <h1>logo</h1>
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
                            <p class="newsletter-description">Se inscreva e receba textos semanais para acompanhar sua jornada!.</p>
                            <form class="newsletter-form">
                                <input type="email" name="email" placeholder="Seu email aqui" class="email-input" autocomplete="off" required />
                                    <button type="submit" class="subscribe-button">Eu quero!</button>
                            </form>
                        </div>
                    </div>
                </div>

                
                <div class="copyright">© 2025 Jessica Vecchi - Todos os direitos reservados.</div>
            </footer>
        </>
    )
}

export default Footer; 