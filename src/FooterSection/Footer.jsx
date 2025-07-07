import './Footer.css'

function Footer() {
    return (
        <>
            <img src='assets/Hero_bluePattern.svg' className='division' />

            <footer class="footer">
                <img src='assets/footerPattern.svg' className='footersvg' />
                <div class="footer-content">
                    <div class="logo-section">
                        <div class="logo-container">
                            <img src='assets/JessicaLogo2.svg' />
                        </div>
                    </div>

                    <div className='text'>
                        <p>Toda mudança começa com um primeiro passo. Se você sente que é tempo de olhar pra dentro com mais carinho e consciência, me chama!</p>
                    </div>

                    <div class="links-section">

                        <div class="legal-links">
                            <a href="https://wa.me/353838587900?text=Olá%2C%20gostaria%20de%20mais%20informações.">+353 83 874 7398</a>
                            <a href="https://www.instagram.com/jessicavecchi.psi/">@jessicavecchi.psi</a>
                            <a href="mailto:jessicavecchi@gmail.com">jessicavecchi@gmail.com</a>
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