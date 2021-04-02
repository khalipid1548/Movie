import axiosClient from "./index";

const movieApi = {
  get() {
    const url = "/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=3&soPhanTuTrenTrang=16";
    return axiosClient.get(url);
  },

  getDetail(idPhim) {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idPhim}`;
    return axiosClient.get(url);
  },

  getCumRapTheoHeThong(maRap) {
    const url = `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`;
    return axiosClient.get(url);
  },

  //   add(data) {
  //     const url = "/AddTask";
  //     return axiosTodo.post(url, {taskName: data});
  //   },
};

export default movieApi;
