import React from "react";
// import { Link } from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import logo from "assets/img/logo.png";
import ava from "assets/img/avatar.png";
import "./header.scss";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "reducers/userSlice";

export default function Header() {
  const history = useHistory();
  const {currentUser} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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
              {currentUser.taiKhoan ? (
                <>
                  <div style={{cursor: "pointer"}}>
                    <p className="t__r">{currentUser.taiKhoan}</p>
                  </div>
                  <div style={{cursor: "pointer"}} onClick={handleLogout}>
                    <p className="t__r">Đăng Xuất</p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{cursor: "pointer"}} className="d-flex position-relative" onClick={handleLogin}>
                    <img src={ava} alt="logo" className="logo" />
                    <p className="t__r">Đăng Nhập</p>
                  </div>
                  <div style={{cursor: "pointer"}} onClick={handleRegister}>
                    <p className="t__r">Đăng Ký</p>
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
