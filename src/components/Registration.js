import React from "react";
import { useFormik } from "formik"; // Import Formik for form handling
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../styles/Registration.css"; // Import custom CSS for the registration form

// Validation function to validate form values
const validate = (values) => {
  const errors = {};

  if (!values.firstName) { // Check if firstName is empty
    errors.firstName = "Required";
  }

  if (!values.surname) { // Check if surname is empty
    errors.surname = "Required";
  }

  if (!values.email) { // Check if email is empty
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { // Validate email format
    errors.email = "Invalid email address";
  }

  if (!values.password) { // Check if password is empty
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      values.password
    )
  ) { // Validate password format
    errors.password =
      "Must be 8 characters, at least one uppercase, one lowercase, one special number and one special character";
  }

  if (!values.confirmPassword) { // Check if confirmPassword is empty
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) { // Check if password and confirmPassword match
    errors.confirmPassword = "Password must match";
  }

  return errors; // Return errors object
};

function Registration() {
  const navigate = useNavigate(); // Get the navigate function for navigation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    }, // Initial values for the form fields
    validate, // Validation function
    onSubmit: (values) => {
      console.log("Registration data:", values); // Log form values on submit
      navigate("/"); // Navigate to the home page after form submission
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form"> {/* Form element with Formik's handleSubmit */}
      <h2 className="form-title">Create an account</h2> {/* Form title */}
      <div>
        <label htmlFor="firstName">First Name</label> {/* Label for firstName */}
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange} // Handle change event
          onBlur={formik.handleBlur} // Handle blur event
          value={formik.values.firstName} // Bind value to Formik state
          placeholder="Enter your first name"
          className="input"
        />
        {formik.errors.firstName ? ( // Display error message if firstName is invalid
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="surname">Surname</label> {/* Label for surname */}
        <input
          id="surname"
          name="surname"
          type="text"
          onChange={formik.handleChange} // Handle change event
          onBlur={formik.handleBlur} // Handle blur event
          value={formik.values.surname} // Bind value to Formik state
          placeholder="Enter your surname"
          className="input"
        />
        {formik.errors.surname ? ( // Display error message if surname is invalid
          <div className="error">{formik.errors.surname}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email address</label> {/* Label for email */}
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange} // Handle change event
          onBlur={formik.handleBlur} // Handle blur event
          value={formik.values.email} // Bind value to Formik state
          placeholder="Enter your email address"
          className="input"
        />
        {formik.errors.email ? ( // Display error message if email is invalid
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label> {/* Label for password */}
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange} // Handle change event
          onBlur={formik.handleBlur} // Handle blur event
          value={formik.values.password} // Bind value to Formik state
          placeholder="Enter your password"
          className="input"
        />
        {formik.errors.password ? ( // Display error message if password is invalid
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm password</label> {/* Label for confirmPassword */}
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange} // Handle change event
          onBlur={formik.handleBlur} // Handle blur event
          value={formik.values.confirmPassword} // Bind value to Formik state
          placeholder="Please confirm your password"
          className="input"
        />
        {formik.errors.confirmPassword ? ( // Display error message if confirmPassword is invalid
          <div className="error">{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

      <button type="submit" className="button"> {/* Submit button */}
        Register
      </button>
    </form>
  );
}

export default Registration;
