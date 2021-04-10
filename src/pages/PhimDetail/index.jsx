import movieApi from "API/movieAPI";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {Button, Col, Container, Row} from "reactstrap";
import star1 from "../../assets/img/star1.png";
import star12 from "../../assets/img/star12.png";
import "./PhimDetail.scss";
import {PICK_LICH} from "reducers/movieSlice";
import {Link} from "react-router-dom";

export default function PhimDetail(props) {
  const {phimId} = useParams();
  const [phim, setPhim] = useState([]);
  const [cumRap, setCumRap] = useState([]);
  const [lichChieu, setLichChieu] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieApi.getDetail(phimId);
        setPhim(data);
        setCumRap(data.heThongRapChieu[0].cumRapChieu);
        setLichChieu(data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim);
        // console.log(data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim);
      } catch (error) {
        console.log("Failed to fetch phim : ", error);
      }
    })();
  }, [phim, cumRap, lichChieu]);

  const handleCumRap = (rap) => {
    console.log(rap);
    const newRap = rap;
    setCumRap(newRap.cumRapChieu);
  };

  const handleRap = (rap) => {
    console.log(rap);
    const newRap = rap;
    setLichChieu(newRap.lichChieuPhim);
  };

  // console.log(cumRap);

  return (
    <section className="phim">
      <Container fluid="true" className="background-gradient">
        <div className="phim__mainMaxWidth">
          <Col xs="auto">
            <img className="phim__img" src={phim.hinhAnh} alt="phim" />
          </Col>
          <Col>
            <div className="phim__caption">
              <span>{phim.ngayKhoiChieu}</span>
              <h6 style={{fontSize: 24}}>{phim.tenPhim}</h6>
              <span>128 phút - 0 IMDb</span>
              <br />
              <Button color="danger">Mua vé</Button>
            </div>
          </Col>
          <Col xs="auto">
            <div style={{marginTop: 50}}>
              <div className="phim__point">
                <div className="phim__circleBorder"></div>
                <p className="phim__percent">{phim.danhGia}</p>
              </div>
              <div>
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star12} alt="star" />
              </div>
              <span style={{color: "white"}}>112 người đánh giá</span>
            </div>
          </Col>
        </div>
      </Container>

      <div style={{maxWidth: 870, margin: "0px auto"}}>
        <h3 style={{textAlign: "center", margin: "40px 0px"}}>Lịch Chiếu</h3>
        <Row>
          <Col sm="3 p-0">
            <div>
              <ul style={{listStyle: "none"}}>
                {phim?.heThongRapChieu?.map((CumRap) => (
                  <li className="left" key={CumRap.maHeThongRap} onClick={() => handleCumRap(CumRap)}>
                    <img className="icon" src={CumRap.logo} alt={CumRap.logo} />
                    <div className="tenrap">{CumRap.tenHeThongRap}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col sm="4 p-0">
            <div className="scroll">
              <ul className="CumRap">
                {cumRap?.map((Rap) => (
                  <li className="mid" key={Rap.maCumRap} onClick={() => handleRap(Rap)}>
                    <span>{Rap.tenCumRap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col sm="5 p-0">
            <di className="scroll">
              <ul className="lichchieu">
                {lichChieu?.map((lich) => (
                  <li
                    className="right"
                    onClick={() => {
                      dispatch(PICK_LICH(lich.ngayChieuGioChieu));
                    }}
                  >
                    <Link to="/chonghe" key={lich.maLichChieu} className="lichChieu">
                      {lich.ngayChieuGioChieu}
                    </Link>
                  </li>
                ))}
              </ul>
            </di>
          </Col>
        </Row>
      </div>
    </section>
  );
}
