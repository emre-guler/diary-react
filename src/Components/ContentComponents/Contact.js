import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import contactLogo from "../../assets/pics/contact.png";

const Contact = () => {
  return (
    <div>
      <Row className="aboutUpperRow">
        <Col className="aboutUpperCol" xl={8} md={8} sm={8} xs={8}>
          <h1>İletişim Bilgilerimiz</h1>
        </Col>
      </Row>
      <Row className="aboutMiddleRow">
        <Col className="aboutMiddleCol" xl={8} md={8} sm={8} xs={8}>
          <p>
            Sayfanın sonundaki Proje Formu'nu kullanarak proje taleplerinize
            dair ön bilgilendirme yapabilir, İletişim Formu yoluyla soru ve
            görüşlerinizi bizlerle paylaşabilir, telefon ve adres
            bilgilerimizden bizimle iletişime geçebilirsiniz.
          </p>
        </Col>
      </Row>
      <Row className="aboutMiddleRow1">
        <Col xl={4} md={4} sm={4} xs={4}><img className="aboutContactImg" src={contactLogo} alt="İletişim Fotoğrafı"/></Col>
        <Col xl={4} md={4} sm={4} xs={4} className="aboutInformations">
            <p><b>Adres:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec posuere sem, tempor cursus ipsum. Vivamus non interdum mi. Nunc quis elit massa.</p>
            <p><b>Telefon:</b> (+90) 545 945 11 81</p>
            <p><b>E-posta:</b> info@ionic.com.tr</p>
        </Col>
      </Row>
      <Row className="aboutFormRow">
          İLETİŞİM
      </Row>
    </div>
  );
};

export default Contact;
