import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarCustom = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Booking Ballroom</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar>
);
export default NavbarCustom;
