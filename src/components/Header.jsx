import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          我的博客
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              首页
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              关于
            </Nav.Link>
            <Nav.Link as={Link} to="/posts/">
              文章
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
