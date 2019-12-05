import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./Components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " JOSE HECTOR BORUNDA",
      headerLinks: [
        { title: "HOME", path: "/" },
        { title: "ABOUT", path: "/about" },
        { title: "CONTACT", path: "/contact" }
      ],
      home: {
        title: "Be Creative",
        subtitle: "Projects that make a difference",
        text: "see below my proejcts "
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Please send me an email"
      }
    };
  }
  render() {
    return [
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jose Hector Borunda</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="Navbar-toggle" />
            <Navbar.Collapse id="Navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />
        </Container>
      </Router>
    ];
  }
}

export default App;
