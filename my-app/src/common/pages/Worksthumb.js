import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import Modal from './Modal';

const Worksthumb = ({ thumbdata, Fader }) => {
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  return (
    <div className="bg-primary-subtle border border-secondary-subtle rounded pb-4">
      <Container style={Fader ? { opacity: 0, transition: 'opacity 0.15s linear' } : { opacity: 1, transition: 'opacity 0.15s linear' }}>
        <Row className="mb-4">
          <Col xs="auto">
            <h3 className="pt-4 mb-0">{thumbdata.title}</h3>
          </Col>
          <Col className="d-flex align-items-end pb-1 ps-0">
            {thumbdata.html && <FaHtml5 size={24} color="var(--bs-teal)" />}
            {thumbdata.css && <FaCss3Alt size={24} color="var(--bs-teal)" />}
            {thumbdata.javascript && <IoLogoJavascript size={24} color="var(--bs-teal)" />}
            {thumbdata.php && <FaPhp size={24} color="var(--bs-teal)" />}
          </Col>
        </Row>
        <Row className="mh-50 mx-auto mb-4">
          <img src={thumbdata.thumb} alt="alt" className="img-fluid w-100 object-fit-contain" />
        </Row>
        <Row>
          <p>{thumbdata.comment}</p>
        </Row>
        <Row>
          <Col>
            <Button className="mx-2" onClick={handleShow}>
              詳しく見る
            </Button>
            <Modal show={show} onHide={handleHide} content={thumbdata} />
            <Button as="a" href={thumbdata.link} target="_blank" rel="noopener noreferre" className="mx-2">
              サンプルページ
            </Button>
            <Button as="a" href={thumbdata.source} target="_blank" rel="noopener noreferre" className="mx-2">
              ソースコード(Github)
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Worksthumb;
