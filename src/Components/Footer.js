import React from 'react'
import { Button } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <a href="/">Ionic</a>
            </div>
            <br></br>
            <br></br>
            <div className="row footer-parts">
                <div className="footer-part col-12 col-sm-6 col-md-3">
                    <h5 className="fw-bold header-text footer-part-header" href="/">Hakkımızda</h5>
                    <a className="footer-part-item" href="/">Ekip</a>
                    <br></br>
                    <a className="footer-part-item" href="/">Kariyer</a>
                    <br></br>
                    <a className="footer-part-item" href="/">Vizyonumuz</a>
                    <br></br>
                </div>
                <div className="footer-part col-12 col-sm-6 col-md-3">
                    <h5 className="fw-bold header-text footer-part-header" href="/">Destek</h5>
                    <a className="footer-part-item" href="/">Ekip</a>
                    <br></br>
                    <a className="footer-part-item" href="https://discord.gg/DKSZwhEsys">Discord</a>
                    <br></br>
                </div>
                <div className="footer-part col-12 col-sm-6 col-md-3">
                    <h5 className="fw-bold header-text footer-part-header" href="/">İletişim</h5>
                    <a className="footer-part-item" href="/">Basın</a>
                    <br></br>
                    <a className="footer-part-item" href="/">Partnerlikler</a>
                    <br></br>
                </div>
            </div>
            <div className="footer-cr-area row">
                <div className="cr-text col-6 col-md-4 text-center text-md-start">
                    <div className="text-muted copyright">© 2021 Ionic. Digital Diary</div>
                    <div className="text-muted createdby">Teknoloji manyakları tarafından günlük tutmayı severler için yapıldı.</div>
                </div>
                <div className="cr-text col-6 col-md-4 text-center text-md-start">
                    <Button variant = "primary">Şimdi Kaydol</Button>
                </div>
            </div>
            <div className="footer-sc-lght-area row">
                <a className="lght-txt text-muted col-12 col-md-8 text-center text-md-start" href="/kvkk">Aydınlatma Metni</a>
                <br></br>
            </div>
        </footer>
    )
}

export default Footer
