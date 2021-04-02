import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {HUY_GHE} from "reducers/movieSlice";

export default function ThongTinBookVe() {
  const {danhSachGheDangDat} = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mt-5">
        <button className="gheDuocChon"> </button>{" "}
        <span className="text-light" style={{fontSize: "30px"}}>
          ghế đã book
        </span>
        <br />
        <button className="gheDangChon"> </button>{" "}
        <span className="text-light" style={{fontSize: "30px"}}>
          ghế đang book
        </span>
        <br />
        <button className="ghe" style={{marginLeft: 0}}>
          {" "}
        </button>{" "}
        <span className="text-light" style={{fontSize: "30px"}}>
          ghế chưa book
        </span>
      </div>
      <div className="mt-5">
        <table className="table" border="2">
          <thead>
            <tr className="text-light" style={{fontSize: "30px"}}>
              <th>số ghế</th>
              <th>giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-warning">
            {danhSachGheDangDat.map((gheDangDat, idx) => (
              <tr key={idx}>
                <td>{gheDangDat.soGhe}</td>
                <td>{gheDangDat.gia.toLocaleString()}</td>
                <td
                  onClick={() => {
                    dispatch(HUY_GHE(gheDangDat.soGhe));
                  }}
                >
                  Huỷ
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="text-warning">
            <tr>
              <td>Tổng Tiền</td>
              <td>{danhSachGheDangDat.reduce((tongTien, gheDangDat, idx) => (tongTien += gheDangDat.gia), 0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
