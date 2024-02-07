import React, { Component } from "react";
import {
  Button,
  Container,
  FormControl,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Catalog from '../Pages/Catalog';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import Home from '../Pages/Home';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">Royal hotel</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/catalog">Catalog</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/registration">Registration</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Поиск</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/catalog" element={<Catalog/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/registration" element={<Registration/>} />
          </Routes>
        </Router>
      </>
    );
  }
}
