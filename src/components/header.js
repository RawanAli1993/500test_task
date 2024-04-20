import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src='https://github.com/RawanAli1993/500test_task/blob/master/src/components/Icons/Vector.png?raw=true' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Пункт 1<img src='https://github.com/RawanAli1993/500test_task/blob/master/src/components/Icons/Vector%20(Stroke).png?raw=true' width='18' height='18'/></Nav.Link>
              <Nav.Link href="#about">Пункт 2</Nav.Link>
              <Nav.Link href="#services">Пункт 3</Nav.Link>
              <Nav.Link href="#team">Пункт 4</Nav.Link>
              <Nav.Link href="#blog">Пункт 5</Nav.Link>



            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}