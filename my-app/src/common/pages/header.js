import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Footer from '../pages/footer';
import Data from '../resource/worksdata.json';
import { NavDropdown } from 'react-bootstrap';
import Modal from './Modal';
const Header = () => {
  const workdata = [...Data.worksdata].reverse();
  const [modal, setmodal] = useState();
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  const modalchange = (e) => {
    setmodal(e);
    handleShow(true);
  };
  return (
    <>
      <Navbar key="md" expand="md" className="bg-primary" data-bs-theme="dark">
        <Container fluid className="px-md-5 col-md-10 ms-auto">
          <Navbar.Brand href="#">NavigationMenu</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>NavigationMenu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className=" flex-grow-1 pe-3">
                <Nav.Link href="#top">Top</Nav.Link>
                <Nav.Link href="#about">Profiles</Nav.Link>
                <NavDropdown title="Studies/Works" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#works">Studies/Works</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {workdata.map((data, index) => (
                    <NavDropdown.Item key={index} onClick={() => modalchange(data)}>
                      {data.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
              <Container className="fixed-bottom d-md-none">
                <Footer />
              </Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {modal && <Modal show={show} onHide={handleHide} content={modal} />}
    </>
  );
};

export default Header;
