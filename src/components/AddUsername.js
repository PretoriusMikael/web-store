import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUserName } from "../store/usernameSlice";
import "../styles/Login.css";
import { useNavigate } from "react-router";

// Function to validate form values
const validate = (values) => {
  const errors = {};
  
  if (!values.userFirstname) {
    errors.userFirstname = "Required"; // Error message if first name is not provided
  }

  if (!values.userSurname) {
    errors.userSurname = "Required"; // Error message if surname is not provided
  }

  return errors; // Return the errors object
};

const AddUsername = ({ onSuccess }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const navigate = useNavigate(); // Get the navigate function from react-router

  // Initialize formik with form values, validation, and submit handler
  const formik = useFormik({
    initialValues: {
      userFirstname: "",
      userSurname: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(addUserName(values)); // Dispatch the addUserName action with form values
      formik.resetForm(); // Reset the form after submission
      if (onSuccess) {
        onSuccess(); // Call the onSuccess callback if provided
      }
    },
  });

  // Function to handle navigation to the register page
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
            onChange={formik.handleChange} // Update formik values on input change
            onBlur={formik.handleBlur} // Handle input blur for formik validation
            value={formik.values.userFirstname} // Set input value from formik
            className="input"
          />
          {formik.errors.userFirstname ? (
            <div className="error">{formik.errors.userFirstname}</div> // Show error message if validation fails
          ) : null}
        </div>
        <div>
          <label htmlFor="userSurname">Surname</label>
          <input
            id="userSurname"
            name="userSurname"
            type="text"
            onChange={formik.handleChange} // Update formik values on input change
            onBlur={formik.handleBlur} // Handle input blur for formik validation
            value={formik.values.userSurname} // Set input value from formik
            className="input"
          />
          {formik.errors.userSurname ? (
            <div className="error">{formik.errors.userSurname}</div> // Show error message if validation fails
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
