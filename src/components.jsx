import "./App.css";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import data from "./data";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Table } from "react-bootstrap";

const ItemContainer = (props) => {
  return (
    <Col sm>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.id + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </Col>
  );
};

const DetailComponent = (props) => {
  let { id } = useParams();
  let findProduct = props.shoes.find((x) => x.id == id);
  let [tab, setTab] = useState(0);
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
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      {/* 탭 UI */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

const TabContent = (props) => {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab];
};

const Cart = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Hello</th>
            <th>Hello</th>
            <th>Hello</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export { ItemContainer, DetailComponent, Cart };
