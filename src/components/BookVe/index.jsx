import React, {Fragment} from "react";
import "./index.css";
import ThongTinBookVe from "./ThongTinBookVe.jsx";
import data from "./danhSachGhe.json";
import HangGhe from "./HangGhe.jsx";
import {useSelector} from "react-redux";

export default function BookVe() {
  const {lichChon, phimChon} = useSelector((state) => state.movieReducer);
  return (
    <div
      className="bookingMovie"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        // backgroundImage: "url('images/bgmovie.jpg')",
        backgroundSize: "100%",
      }}
    >
      <div style={{position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.8)"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <div className="mt-3 text-light" style={{fontSize: "25px"}}>
                Màn Hình
              </div>
              <div className="mt-2" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <div className="screen"></div>
              </div>
              {data.map((hangGhe, index) => (
                <Fragment key={index}>
                  <HangGhe hangGhe={hangGhe} soHangGhe={index} />
                </Fragment>
              ))}
            </div>
            <div className="col-4 ">
              <div style={{marginTop: 60}}>
                <div style={{fontSize: "35px"}} className="text-light">
                  {phimChon}
                </div>
                <div style={{fontSize: "35px"}} className="text-light">
                  {lichChon}
                </div>

                <ThongTinBookVe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
