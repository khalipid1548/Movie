import React, {Component} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {userService} from "services";
import {signUpUserSchemata} from "services/user";
// import {Redirect} from "react-router-dom";

class Register extends Component {
  _handleSubmit = (val) => {
    userService
      .register(val)
      .then((res) => {
        // console.log(res);
        alert("đăng ký thành công");
        // return <Redirect to="/" />;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Đăng ký</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maNhom: "GP01",
          }}
          validationSchema={signUpUserSchemata}
          onSubmit={this._handleSubmit}
        >
          {(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài Khoản</label>
                <Field type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} />
                <ErrorMessage name="taiKhoan" />
              </div>
              <div className="form-group">
                <label>mật khẩu</label>
                <Field type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange} />
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label>Họ tên</label>
                <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange} />
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label>email</label>
                <Field type="text" className="form-control" name="email" onChange={formikProps.handleChange} />
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <Field type="text" className="form-control" name="soDT" onChange={formikProps.handleChange} />
                <ErrorMessage name="soDT" />
              </div>

              <button>submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default Register;
