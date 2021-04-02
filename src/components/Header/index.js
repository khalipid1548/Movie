import React from "react";
// import { Link } from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import logo from "assets/img/logo.png";
import ava from "assets/img/avatar.png";
import "./header.scss";

export default function Header() {
  return (
    <div>
      <Container className="themed-container" fluid={true}>
        <Row className="justify-content-between">
          <Col xs="auto">
            <img src={logo} alt="" style={{width: "50px", height: "50px"}} />
          </Col>
          <Col xs="auto">
            <ul className="d-flex top-bar">
              <li>
                <p className="mid-head">Lịch Chiếu</p>
              </li>
              <li>
                <p className="mid-head">Cụm Rạp</p>
              </li>
              <li>
                <p className="mid-head">Tin Tức</p>
              </li>
              <li>
                <p className="mid-head">Ứng dụng</p>
              </li>
            </ul>
          </Col>
          <Col xs="auto">
            <div className="d-flex">
              <a style={{textDecoration: "none"}} href="#" className="d-flex position-relative">
                <img src={ava} alt="logo" className="logo" />
                <p className="t__r">Đăng Nhập</p>
              </a>
              <a style={{textDecoration: "none"}} href="#">
                <p className="t__r">Hồ Chí Minh</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
