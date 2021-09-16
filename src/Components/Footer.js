import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      {/* footer logo */}
      <Row className="footerLogoRow">
        <Col xl={8} md={10} sm={11} xs={11}>
          <Col>
            <a href="/" className="footerLogo">
              Ionic Diary
            </a>
          </Col>
        </Col>
      </Row>
      {/* footer links */}
      <Row>
        <Col xl={8} md={10} sm={11} xs={11} className="footerLinksCol">
          <Col xl={3} md={3} sm={6} xs={12}>
            <h5>Ürünler</h5>
            <a href="/">Lorem</a>
            <a href="/">Ipsum Dolor</a>
            <a href="/">Dolor Sit Amet</a>
            <a href="/">Sova</a>
          </Col>
          <Col xl={3} md={3} sm={6} xs={12}>
            <h5>Ionic Hakkında</h5>
            <a href="/">Lorem</a>
            <a href="/">Ipsum Dolor</a>
            <a href="/">Dolor Sit Amet</a>
            <a href="/">Sova</a>
          </Col>
          <Col xl={3} md={3} sm={6} xs={12}>
            <h5>Destek</h5>
            <a href="/">Lorem</a>
            <a href="/">Ipsum Dolor</a>
            <a href="/">Dolor Sit Amet</a>
            <a href="/">Sova</a>
          </Col>
          <Col xl={3} md={3} sm={6} xs={12}>
            <h5>İletişim</h5>
            <a href="/">Lorem</a>
            <a href="/">Ipsum Dolor</a>
            <a href="/">Dolor Sit Amet</a>
            <a href="/">Sova</a>
          </Col>
        </Col>
      </Row>
      {/* footer copyright */}
      <Row>
        <Col xl={8} md={10} sm={11} xs={11} className="footerCopyrightCol">
          <Col xl={8} md={8} sm={12} xs={12} className="footerCopyright">
            <p className="text-muted">
              © 2021 IONIC. Immortalize your day.
            </p>
            <p className="text-muted">
              Teknoloji severler tarafından günlük tutmayı sevenler için yapıldı.
            </p>
          </Col>
          <Col xl={4} md={4} sm={12} xs={12} className="signButtonCol">
            <Button variant="primary">Şimdi Kaydol</Button>
          </Col>
        </Col>
      </Row>
      {/* footer social media links */}
      <Row>
        <Col xl={8} md={10} sm={11} xs={11} className="footerSocialMediaCol mt-4">
          <Col xl={8} md={8} sm={12} xs={12}>
            <a className="text-muted" href="/">
              Aydınlatma Metni
            </a>
          </Col>
          <Col xl={4} md={4} sm={12} xs={12} className="footerSocialMedia">
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
          </Col>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
