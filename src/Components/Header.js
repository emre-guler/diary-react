import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Header = () => {
    const [responsive,setResponsive] = useState(false);
  return (
    <header className="header-container">
      {/* Header Logo */}
      <div className="logo">
        <a href="/">Ionic Diary</a>
      </div>
      {/* Header Links */}
      <div className="headerLinks">
        <a href="/">Anasayfa</a>
        <a href="/">İletişim</a>
        <a href="/">Hakkımızda</a>
      </div>
      {/* Sign Buttons */}
      <div className="signButtons">
        <Button variant="light">Kayıt Ol</Button>
        <Button variant="primary">Giriş Yap</Button>
      </div>
      <div className="responsiveMenu" onClick={()=>{setResponsive(!responsive)}}>
        <HiOutlineDotsVertical className={responsive ? "responsiveMenuDots responsiveActive":"responsiveMenuDots"} />
      </div>
    </header>
  );
};
export default Header;
