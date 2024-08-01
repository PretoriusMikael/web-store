import React from "react";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 8 characters long";
  }

  return errors;
};

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Login data:", values);
      // Handle form submission
      navigate("/landing");
    },
  });

  const handleCreateAnAccount = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h2 className="form-title">Log in</h2>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="input"
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="input"
        />
        {formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" className="button">
        Login
      </button>
      <p className="or">
        <strong>OR</strong>
      </p>
      <button type="button" onClick={handleCreateAnAccount} className="button">
        Create an account
      </button>
    </form>
  );
};

export default Login;
