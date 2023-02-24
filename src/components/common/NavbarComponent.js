import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
                        <Nav.Link href="#features"><Link to={"/detail"}>Features</Link></Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;