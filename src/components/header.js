import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src="/home/rawan/Desktop/500_test/500website/500test_task/src/components/Icons/Vector.png"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Ab</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#review">Review</Nav.Link>

            

              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>


            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}