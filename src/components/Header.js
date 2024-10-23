import React from 'react';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/logo.jpg';



export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary nav-link:hover ">
        <Container fluid>
          <div ><a href='http://localhost:3000/Home'><img src={logo} /></a></div>
          <a className="navbar-brand " href="/">Intense Group</a>

          <Navbar.Toggle aria-controls="navbarScroll" className='.navbar_Details' />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navbar_Details"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#http://localhost:3000/Home" >Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <NavDropdown title="Companies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Intense Technologies</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Intense Firen
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Intense Foods </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Intense Art</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>



</>
  )
}