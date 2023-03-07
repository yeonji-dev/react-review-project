import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate, Outlet} from "react-router-dom";

const NavbarComponent = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => { navigate("/") }}>깡총깡총</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate("/") }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/features") }}>Features</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/cart") }}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;