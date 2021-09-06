import React from 'react'
import { Button } from "react-bootstrap";
const Header = () => {
    return (
        <header className="Header">
            {/* Header Logo */}
            <div className="logo">
                <a href="/">Ionic Diary</a>
            </div>
            {/* Header Links */}
            <div className="headerLinks">
                < a href="/">Anasayfa</a>
                < a href="/">İletişim</a>
                < a href="/">Hakkımzıda</a>
            </div>
            {/* Sign Buttons */}
            <div className="signButtons">
                <Button variant = "light">Kayıt Ol</Button>
                <Button variant = "primary">Giriş Yap</Button>
            </div>
        </header>
    );
};
export default Header
