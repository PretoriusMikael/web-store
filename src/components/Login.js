import React from "react";
import { useNavigate } from "react-router-dom";
import AddUsername from "./AddUsername";
import "../styles/Login.css";

//functional component for logging in
const Login = () => {
  const navigate = useNavigate();

  const handleAddUsernameSuccess = () => {
    navigate("/");
  };

  return (
    <div>
      <AddUsername onSuccess={handleAddUsernameSuccess} />
    </div>
  );
};

export default Login;
