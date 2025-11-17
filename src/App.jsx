import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data";

const ItemContainer = (props) => {
  return (
    <Col sm>
      <img src={props.src} width="80%" />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </Col>
  );
};

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="itemContainer">
        <Container>
          <Row>
            {shoes.map((a, i) => {
              return (
                <ItemContainer
                  key={i}
                  src={a.url}
                  title={a.title}
                  price={a.price}
                ></ItemContainer>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* <div className="container">
        <ItemContainer
          src={"https://codingapple1.github.io/shop/shoes1.jpg"}
          title={shoes[0].title}
          price={shoes[0].price}
        ></ItemContainer>
        <Container>
        <Row>
        <Col sm>
        <img
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        width="80%"
        />
        <h4>{shoes[0].title}</h4>
              <p>{shoes[0].content}</p>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
}

export default App;
