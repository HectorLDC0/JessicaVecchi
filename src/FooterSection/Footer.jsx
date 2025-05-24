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
                                <div class="section-title">Legal</div>
                                <a href="#xxx">Imprint</a>
                                <a href="#xxx">Privacy Policy</a>
                                <a href="#xxx">Terms of Use</a>
                            </div>
                        </div>

                        <div class="newsletter-section">
                            <div class="section-title">Newsletter</div>
                            <p class="newsletter-description">Subscribe to our newsletter.</p>
                            <form class="newsletter-form">
                                <input type="email" name="email" placeholder="Enter your email" class="email-input" autocomplete="off" required />
                                    <button type="submit" class="subscribe-button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>
                <div class="copyright">© 2025 Your Company - All rights reserved.</div>
            </footer>
        </>
    )
}

export default Footer; 