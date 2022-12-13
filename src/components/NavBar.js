import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function CuisineNavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Search" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">By categories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">By area</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">By ingredients</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Favoris</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
