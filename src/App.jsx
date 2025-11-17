import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";
import { ItemContainer, DetailComponent } from "./components";

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
