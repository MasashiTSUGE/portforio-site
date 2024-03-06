import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { EnvelopeAt, Github } from 'react-bootstrap-icons';
const footer = () => {
  return (
    <>
      <footer className="bg-body-secondary">
        <Container className="d-flex justify-content-center align-items-center">
          <p className="flex-fill mx-4 pt-3">&copy;Masashi TSUGE</p>
          <a className="link-dark mx-3" href="https://github.com/MasashiTSUGE/" target="_blank" rel="noopener noreferrer">
            <span className="d-none d-md-inline">Github</span>
            <Github className="mx-1" />
          </a>
          <a href="mailto:zhezhiyazhi@gmail.com" className="link-dark mx-3">
            <span className="d-none d-md-inline">連絡はこちらへ</span>
            <EnvelopeAt className="mx-1" />
          </a>
        </Container>
      </footer>
    </>
  );
};

export default footer;
