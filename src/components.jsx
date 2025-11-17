import "./App.css";
import { useState } from "react";
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

export { ItemContainer, DetailComponent };
