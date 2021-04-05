import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "reactstrap";
import cgv from "../../assets/img/cgv.png";
import bhd from "../../assets/img/bhd.png";
import lotte from "../../assets/img/lotte.png";
import cinestar from "../../assets/img/cinestar.png";
import megaGS from "../../assets/img/megags.png";
import galaxy from "../../assets/img/galaxy.png";
import "./LichChieuCum.scss";

import movieApi from "API/movieAPI";

export default function LichChieuCum() {
  const [heThongRap, setHeThongRap] = useState([]);
  const [filters, setFilters] = useState("CGV");

  const handleClick = (maRap) => {
    // console.log(maRap);
    setFilters(maRap);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await movieApi.getCumRapTheoHeThong(filters);
        setHeThongRap(data);
        // console.log(data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, [filters]);

  return (
    <section className="rap">
      <Container>
        <Row>
          <Col sm="1 p-0">
            <div>
              <ul style={{listStyle: "none"}}>
                <li
                  className="left"
                  onClick={() => {
                    handleClick("CGV");
                  }}
                >
                  <img className="icon" src={cgv} alt="cgv" />
                </li>
                <li
                  className="left"
                  onClick={() => {
                    handleClick("BHDStar");
                  }}
                >
                  <img className="icon" src={bhd} alt="bhd" />
                </li>
                <li
                  className="left"
                  onClick={() => {
                    handleClick("LotteCinima");
                  }}
                >
                  <img className="icon" src={lotte} alt="lotte" />
                </li>
                <li
                  className="left"
                  onClick={() => {
                    handleClick("CineStar");
                  }}
                >
                  <img className="icon" src={cinestar} alt="cinestar" />
                </li>
                <li
                  className="left"
                  onClick={() => {
                    handleClick("MegaGS");
                  }}
                >
                  <img className="icon" src={megaGS} alt="megaGS" />
                </li>
                <li
                  className="left"
                  onClick={() => {
                    handleClick("Galaxy");
                  }}
                >
                  <img className="icon" src={galaxy} alt="galaxy" />
                </li>
              </ul>
            </div>
          </Col>
          <Col sm="4 p-0">
            <div className="scroll">
              <ul className="CumRap">
                {heThongRap?.map((rap) => (
                  <li className="mid" key={rap.maCumRap}>
                    <span>{rap.tenCumRap}</span> <br />
                    <span className="dia-chi">{rap.diaChi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col sm="7 p-0">
            <div>
              <ul style={{listStyle: "none", paddingLeft: 0}}>
                <li className="mid">Chưa Có Lịch Chiếu</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
