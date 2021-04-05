import React from "react";
import {Formik, Form, Field} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {login} from "reducers/userSlice";
import {Redirect} from "react-router";

export default function Login() {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.userReducer);

  return (
    <>
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        className="w-50 mx-auto"
        onSubmit={(value) => {
          dispatch(login(value));
        }}
      >
        {(formikProps) => (
          <Form className="container">
            <h1>Đăng nhập</h1>
            <div className="form-group">
              <label htmlFor="">Tài khoản</label>
              <Field name="taiKhoan" onChange={formikProps.handleChange} type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">mật khẩu</label>
              <Field name="matKhau" onChange={formikProps.handleChange} type="password" className="form-control" />
            </div>
            <button className="btn btn-success">Đăng nhập</button>
          </Form>
        )}
      </Formik>
      {currentUser.hoTen ? <Redirect to="/" /> : null}
    </>
  );
}
