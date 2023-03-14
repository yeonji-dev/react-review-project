import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate, Outlet} from "react-router-dom";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const NavbarComponent = () => {
    const navigate = useNavigate();

    const result = useQuery(['user'], () =>
        axios.get('https://codingapple1.github.io/userdata.json').then((res) => {
            return res.data;
        }),
        {staleTime: 2000}//refetch
    );

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
                    <Nav className="me-auto">
                        <Nav.Link>
                        {result.isLoading && `로딩중`}
                        {result.error && `에러남`}
                        {result.data && result.data.name}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;