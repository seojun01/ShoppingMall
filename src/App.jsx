import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";

const ItemContainer = (props) => {
  return (
    <Col sm>
      <img src={props.src} width="80%" />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </Col>
  );
};

const DetailComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* main page background image */}
              <div className="main-bg"></div>

              {/* itemContainer */}
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
            </>
          }
        />
        <Route path="/detail" element={<DetailComponent />} />
      </Routes>
    </div>
  );
}

export default App;
