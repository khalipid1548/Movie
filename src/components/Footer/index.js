import React from "react";
import {Container, Row, Col} from "reactstrap";
import "./footer.scss";
import bhd from "../../assets/img/bhd.png";
import cgv from "../../assets/img/cgv.png";
import cinestar from "../../assets/img/cinestar.png";
import galaxy from "../../assets/img/galaxy.png";
import lotte from "../../assets/img/lotte.png";
import android from "../../assets/img/android.png";
import apple from "../../assets/img/apple.png";
import face from "../../assets/img/face.png";
import zalo from "../../assets/img/zalo.png";
import zion from "assets/img/zion.jpg";
import cong from "assets/img/congthuong.png";

export default function index() {
  return (
    <Container fluid={true} className="footer">
      <div className="footer-maxwidth">
        <Row>
          <Col sm="4" xs="12">
            <p style={{color: "#fff"}}>TIX</p>
            <div className="d-flex">
              <Col xs="6">
                <p className="styleA">FAQ</p>
                <p h className="styleA">
                  Brand Guidelines
                </p>
              </Col>
              <Col xs="6">
                <p className="styleA">Thỏa thuận sử dụng</p>
                <p className="styleA">Chính sách bảo mật</p>
              </Col>
            </div>
          </Col>
          <Col sm="4" xs="12">
            <p style={{color: "#fff"}}>Đối Tác</p>
            <div className="d-flex" style={{marginBottom: 15}}>
              <p style={{marginRight: 15}}>
                <img src={cgv} alt="" style={{width: "30px", height: "30px"}} />
              </p>
              <p style={{marginRight: 15}}>
                <img src={bhd} alt="" style={{width: "30px", height: "30px"}} />
              </p>
              <p style={{marginRight: 15}}>
                <img src={galaxy} alt="" style={{width: "30px", height: "30px"}} />
              </p>
              <p style={{marginRight: 15}}>
                <img src={cinestar} alt="" style={{width: "30px", height: "30px"}} />
              </p>
              <p style={{marginRight: 15}}>
                <img src={lotte} alt="" style={{width: "30px", height: "30px"}} />
              </p>
            </div>
          </Col>
          <Col sm="4" xs="12">
            <div className="d-flex">
              <Col xs="6">
                <p>MOBILE APP</p>
                <p style={{marginRight: 10}}>
                  <img src={apple} alt="" style={{width: "25px", height: "30px"}} />
                </p>
                <p style={{marginRight: 10}}>
                  <img src={android} alt="" style={{width: "30px", height: "30px"}} />
                </p>
              </Col>
              <Col xs="6">
                <p>SOCIAL</p>
                <p style={{marginRight: 10}}>
                  <img src={face} alt="" style={{width: "30px", height: "30px"}} />
                </p>
                <p style={{marginRight: 10}}>
                  <img src={zalo} alt="" style={{width: "30px", height: "30px"}} />
                </p>
              </Col>
            </div>
          </Col>
        </Row>
        <hr className="hrFooter" />
        <Row>
          <Col sm="1">
            <img src={zion} alt="zion" className="imgFooter" />
          </Col>
          <Col sm="9" className="px-4">
            <span className="d-block text-white">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span className="d-block">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900 545 436
              <br />
              Email: <p style={{color: "#FB4226"}}>support@tix.vn</p>
            </span>
          </Col>
          <Col sm="2">
            <p>
              <img className="bo" src={cong} alt="congthuong" />
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
