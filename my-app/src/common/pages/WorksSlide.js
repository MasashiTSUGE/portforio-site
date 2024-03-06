import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from './Modal';

const WorksSlide = ({ workdata, FocusCardChange }) => {
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <div>
      <Card
        className="col mb-2 mh-25"
        onMouseEnter={() => {
          FocusCardChange(workdata);
        }}
      >
        <div className="row g-0 justify-content-between">
          <div className="col-3 w-25 ratio ratio-1x1">
            <Card.Img className="image-fluid object-fit-cover " src={workdata.thumb} />
          </div>
          <div className="col-9">
            <Card.Body className="p-2">
              <Card.Title className="ps-2 mt-2 mb-3">{workdata.title}</Card.Title>
              <Card.Text className="ps-2">{workdata.description}</Card.Text>
              <Button className="col-6 col-md-4 fs-6 ms-auto me-2 d-block" variant="primary" onClick={handleShow}>
                詳しく見る
              </Button>
              <Modal show={show} onHide={handleHide} content={workdata} />
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WorksSlide;
