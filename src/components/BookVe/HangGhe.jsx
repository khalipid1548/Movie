import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DAT_GHE} from "reducers/movieSlice";

export default function HangGhe({hangGhe, soHangGhe}) {
  const {danhSachGheDangDat} = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  const renderGhe = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaBook = "";
      let disabled = false;
      // ghế bị ngkhac book
      if (ghe.daDat) {
        cssGheDaBook = "gheDuocChon";
        disabled = true;
      }
      // xét ghế đang book
      let cssGheDangBook = "";
      let indexGheDangBook = danhSachGheDangDat.findIndex((gheDangBook) => gheDangBook.soGhe === ghe.soGhe);
      if (indexGheDangBook !== -1) {
        cssGheDangBook = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            dispatch(DAT_GHE(ghe));
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaBook} ${cssGheDangBook}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  const renderSoHang = () => {
    return hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button key={index} className="rowNumber">
          {hang.soGhe}
        </button>
      );
    });
  };

  const renderHangGhe = () => {
    if (soHangGhe === 0) {
      return (
        <div className="mt-5">
          {hangGhe.hang}
          {renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {hangGhe.hang}
          {renderGhe()}
        </div>
      );
    }
  };

  return (
    <div className="text-light text-left ml-5 mt-3" style={{fontSize: 30}}>
      {renderHangGhe()}
    </div>
  );
}
