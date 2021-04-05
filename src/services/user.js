import axios from "axios";
import * as yup from "yup";

export const signUpUserSchemata = yup.object().shape({
  taiKhoan: yup.string().required("bắt buộc điền vào ô trống"),
  matKhau: yup.string().required("bắt buộc điền vào ô trống"),
  hoTen: yup.string().required("bắt buộc điền vào ô trống"),
  email: yup.string().required("bắt buộc điền vào ô trống").email("điền đúng email"),
  soDT: yup
    .string()
    .required("bắt buộc điền vào ô trống")
    .matches(/^[0-9]+$/),
});

class UserService {
  register(data) {
    return axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }

  login(user) {
    return axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }
}
export default UserService;
