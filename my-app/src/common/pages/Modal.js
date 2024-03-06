import React from 'react';
import { Modal as BootstrapModal, Button, Container } from 'react-bootstrap';

function Modal({ show, onHide, content }) {
  return (
    <BootstrapModal show={show} onHide={onHide} size="lg" centered>
      <BootstrapModal.Header className="bg-body-tertiary" closeButton>
        <BootstrapModal.Title id="contained-modal-title-vcenter">{content.title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Container>
          <img src={content.thumb} alt="alt" className="img-fluid w-100 object-fit-contain mb-2" />
          <p>{content.comment}</p>
          <p>{content.rule}</p>
        </Container>
      </BootstrapModal.Body>
      <BootstrapModal.Footer className="bg-body-tertiary">
        <Button as="a" href={content.link} target="_blank" rel="noopener noreferre" className="mx-2">
          サンプルページ
        </Button>
        <Button as="a" href={content.source} target="_blank" rel="noopener noreferre" className="mx-2">
          ソースコード(Github)
        </Button>
        <Button onClick={onHide}>閉じる</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
