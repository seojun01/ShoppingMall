import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { ItemContainer, DetailComponent } from "./components";
import axios from "axios";

const EventPage = () => {
  return (
    <>
      <div className="eventPage">
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    </>
  );
};

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            ShoeShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
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
                          id={a.id}
                          title={a.title}
                          price={a.price}
                        ></ItemContainer>
                      );
                    })}
                  </Row>
                </Container>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((res) => {
                      let copyData = [...shoes, ...res.data];
                      setShoes(copyData);
                    })
                    .catch(() => {
                      console.log("Data request failed");
                    });
                }}
              >
                데이터 요청
              </button>
            </>
          }
        />
        {/* Detail 페이지 */}
        <Route path="/detail/:id" element={<DetailComponent shoes={shoes} />} />

        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
