import './App.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import backgroundUrl from '../public/images/Westerlund2.png';
import data from './data.js';
import ItemComponents from "./components/ItemComponents";
import {useState} from "react";

function App() {
    let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div className="main-bg" style={{backgroundImage: 'url('+process.env.PUBLIC_URL + '/images/Westerlund2.png' + ')'}}></div>
        <div className="container">
            <div className="row">
                {shoes && shoes.map((item) => (
                    <ItemComponents item={item}/>
                ))}
            </div>
        </div>


    </div>
  );
}

export default App;
