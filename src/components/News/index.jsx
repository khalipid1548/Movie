import React from "react";
import {Col, Container, Row} from "reactstrap";
import comment from "../../assets/img/comment.png";
import like from "../../assets/img/like.png";
import news1 from "../../assets/img/news1.jpg";
import news2 from "../../assets/img/news2.jpg";
import news3 from "../../assets/img/news3.png";
import news4 from "../../assets/img/news4.jpg";
import news5 from "../../assets/img/news5.png";
import news6 from "../../assets/img/news6.png";
import news7 from "../../assets/img/news7.png";
import news8 from "../../assets/img/news8.jpg";
import "./News.scss";

export default function News() {
  return (
    <div className="news">
      <Container>
        <Row className="justify-content-center">
          <h3 className="mx-3 text-danger">Điện Ảnh 24h</h3>
          <h3 className="mx-3 ">Review</h3>
          <h3 className="mx-3 ">Khuyến Mãi</h3>
        </Row>

        <Row className="my-4">
          <Col xs="6">
            <div className="p-0">
              <img src={news1} alt="tintuc" className="news__imgtop" />
              <h6 className="news__titletop">Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h6>
              <p className="news__captop">
                Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một
                rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
              </p>
              <div>
                <img className="news__icon" src={like} alt="like" />
                <img className="news__icon" src={comment} alt="comment" />
              </div>
            </div>
          </Col>
          <Col xs="6">
            <div className="p-0">
              <img src={news2} alt="tintuc" className="news__imgtop" />
              <h6 className="news__titletop">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h6>
              <p className="news__captop">
                Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính
                thức khai trương tại 360 Giải Phóng!
              </p>
              <div>
                <img className="news__icon" src={like} alt="like" />
                <img className="news__icon" src={comment} alt="comment" />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="4">
            <div className="p-0">
              <img src={news3} alt="tintuc" className="news__imgbot" />
              <h6 className="news__titletop">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h6>
              <p className="news__captop">
                Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính
                thức khai trương tại 360 Giải Phóng!
              </p>
              <div>
                <img className="news__icon" src={like} alt="like" />
                <img className="news__icon" src={comment} alt="comment" />
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4">
            <div className="p-0">
              <img src={news4} alt="tintuc" className="news__imgbot" />
              <h6 className="news__titletop">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h6>
              <p className="news__captop">
                Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính
                thức khai trương tại 360 Giải Phóng!
              </p>
              <div>
                <img className="news__icon" src={like} alt="like" />
                <img className="news__icon" src={comment} alt="comment" />
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div className="d-flex my-2">
              <img className="news__imgMIN" src={news5} alt="tin tuc" />
              <p className="news__capMin">Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</p>
            </div>
            <div className="d-flex my-2">
              <img className="news__imgMIN" src={news6} alt="tin tuc" />
              <p className="news__capMin">Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</p>
            </div>
            <div className="d-flex my-2">
              <img className="news__imgMIN" src={news7} alt="tin tuc" />
              <p className="news__capMin">Review: Spider-Man: Into The Spider-Vesre </p>
            </div>
            <div className="d-flex my-2">
              <img className="news__imgMIN" src={news8} alt="tin tuc" />
              <p className="news__capMin">
                Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
