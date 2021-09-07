import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import logo from "../assets/pics/kitap.jpg";
import { ImFilePicture } from "react-icons/im";

const Content = () => {
  return (
    <section>
      <Row className="contentNotLogin">
        <Col className="contentText" xl={7} md={6} sm={6}>
          <h1>Kendi sanal günlüğünüzü oluşturun.</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas magna aliquet nulla mollis gravida. Aenean cursus, quam id
            gravida porta, mi augue porttitor nisi, vel molestie metus enim
            pretium velit.
          </span>
        </Col>
        <Col className="contentPicture" xl={5} md={6} sm={6}>
          <img src={logo} alt="Kitap" />
        </Col>
      </Row>
      <Row className="contentPropRow">
        <Col className="contentPropHead" xl={8} md={8} sm={8}>
          <h2>Günlük Özellikleri</h2>
          <span>
            Sanal günlüğünüzü özelliştirebilmeniz için bir kaç seçenek.
          </span>
        </Col>
        <Col className="contentProps" xl={8} md={8} sm={8}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <span className="propPicBackground">
                  <ImFilePicture
                    style={{ color: "purple", fontSize: "20px" }}
                  />
                </span>
              </Card.Subtitle>
              <Card.Title>Fotoğraflar</Card.Title>
              <Card.Text>
                Sanal günlüğünüze, kaydettiğiniz fotoğrafları koyup
                kişiselleştirebilirsiniz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Content;
