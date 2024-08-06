import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUserName } from "../store/usernameSlice";
import "../styles/Login.css";
import { useNavigate } from "react-router";

const validate = (values) => {
  const errors = {};
  
  if (!values.userFirstname) {
    errors.userFirstname = "Required";
  }

  if (!values.userSurname) {
    errors.userSurname = "Required";
  }

  return errors;
};

const AddUsername = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();   

  const formik = useFormik({
    initialValues: {
      userFirstname: "",
      userSurname: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(addUserName(values));
      formik.resetForm();
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const handleRegister = () => {
    navigate("/register");
  };

  return (
      <form onSubmit={formik.handleSubmit} className="form">
        <h2 className="form-title">Login:</h2>
        <div>
          <label htmlFor="userFirstname">First Name</label>
          <input
            id="userFirstname"
            name="userFirstname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userFirstname}
            className="input"
          />
          {formik.errors.userFirstname ? (
            <div className="error">{formik.errors.userFirstname}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="userSurname">Surname</label>
          <input
            id="userSurname"
            name="userSurname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userSurname}
            className="input"
          />
          {formik.errors.userSurname ? (
            <div className="error">{formik.errors.userSurname}</div>
          ) : null}
        </div>
        <button type="submit" className="button">
          Log in
        </button>
        <p className="or">
        <strong>OR</strong>
      </p>
      <button type="button" onClick={handleRegister} className="button">
        Register
      </button>
      </form>
  );
};

export default AddUsername;
