import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import contactLogo from "../../assets/pics/contact.png";

const Contact = () => {
  return (
    <div>
      <Row className="contactUpperRow">
        <Col className="contactUpperCol" xl={8} md={8} sm={8} xs={8}>
          <h1>İletişim Bilgilerimiz</h1>
        </Col>
      </Row>
      <Row className="contactMiddleRow">
        <Col className="contactMiddleCol" xl={8} md={8} sm={8} xs={8}>
          <p>
            Sayfanın sonundaki Proje Formu'nu kullanarak proje taleplerinize
            dair ön bilgilendirme yapabilir, İletişim Formu yoluyla soru ve
            görüşlerinizi bizlerle paylaşabilir, telefon ve adres
            bilgilerimizden bizimle iletişime geçebilirsiniz.
          </p>
        </Col>
      </Row>
      <Row className="contactMiddleRow1">
        <Col xl={6} md={6} sm={12} xs={12}>
          <img
            className="contactImg"
            src={contactLogo}
            alt="İletişim Fotoğrafı"
          />
        </Col>
        <Col className="contactInformations" xl={4} md={4} sm={10} xs={10}>
          <p>
            <b>Adres:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Morbi nec posuere sem, tempor cursus ipsum. Vivamus non
            interdum mi. Nunc quis elit massa.
          </p>
          <p>
            <b>Telefon:</b> (+90) 545 945 11 81
          </p>
          <p>
            <b>E-posta:</b> info@ionic.com.tr
          </p>
        </Col>
      </Row>
      <Row className="contactFormRow">
        <Col xl={10} md={8} sm={12} xs={12}>
          <h1 className="contactHeader">İletişim</h1>
        </Col>
        <Col xl={12} md={12} sm={12} xs={12} className="contactFormInputCol">
          <Col xl={7} md={11} sm={11} xs={11} className="contactFormInputs">
            <label for="fullname">
              Adınız - Soyadınız{" "}
              <span className="text-danger">
                <b>*</b>
              </span>
            </label>
            <input
              type="text"
              id="fullname"
              className="contactFullName"
              input
            />
            <label for="email">
              E-posta{" "}
              <span className="text-danger">
                <b>*</b>
              </span>
            </label>
            <input type="text" id="email" className="contactEmail" input />
            <label for="message">
              Mesajınız{" "}
              <span className="text-danger">
                <b>*</b>
              </span>
            </label>
            <textarea id="message"></textarea>
            <Button className="contactFormButton" variant="success">GÖNDER</Button>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
