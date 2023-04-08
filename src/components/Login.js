//References: https://git.cs.dal.ca/prasla/csci5410-f23-b00899528/-/tree/A2/frontend

import { Card, Form, Button, Nav } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import signup from "../assets/signup.avif";
import axios from "axios";

export const Login = () => {
  const { state } = useLocation();
  const { emailFromSignup, passwordFromSignup } = state || {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  let errorFlag = 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const formValue = {
      email,
      password,
    };
    setError(validateForm(formValue));
    if (errorFlag === 0) {
      localStorage.setItem("email", email);
      try {
        console.log("Inside login page");
        console.log(formValue);
        const response = await axios.post(
          "https://e-cycle-halifax.onrender.com/authenticateUser",
          {
            ...formValue,
          }
        );
        alert(response.data.message);
        console.log(response.data);
        navigate("/resources");
      } catch (error) {
        if (error.response.status === 404) {
          alert(error.response.data.message);
        } else if (error.response.status === 401) {
          alert(error.response.data.message);
        } else {
          console.log(error);
        }
        setEmail("");
        setPassword("");
      }
    } else {
      console.log(error);
    }
  };

  const validateForm = (data) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; //Reference : https://regexr.com/3e48o
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Reference: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const errorMessage = {};
    if (data.email === "" || emailRegex.test(data.email) == false) {
      errorFlag = 1;
      errorMessage.email = "Email is not valid";
    } else if (passwordRegex.test(data.password) == false) {
      errorFlag = 1;
      errorMessage.password =
        "Password must be more than 8 characters, must have at least one uppercase letter, one lowercase letter, one number and one special character";
    } else {
      errorFlag = 0;
    }
    return errorMessage;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            height: "100vh",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ width: "100%" }}>
            <img
              src={signup}
              draggable="false;"
              alt="signup-image"
              width="90%"
              style={{
                touchAction: "none",
                "pointer-events": "none",
                marginTop: "80px",
              }}
            />
          </div>
          <p className="login-message">
            “A cleaner environment means a greener community”
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            height: "100vh",
            justifyContent: "flex-start",
          }}
        >
          <Card
            style={{ background: "#87a743", marginTop: "80px" }}
            className="login-mobile-style"
          >
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <div style={{ textAlign: "left" }}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onSubmit={handleSubmit}
                      required
                    />
                  </Form.Group>
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "14px" }}
                  >
                    {" "}
                    {error.email}{" "}
                  </div>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onSubmit={handleSubmit}
                      required
                    />
                  </Form.Group>
                  {error && (
                    <div
                      className="error"
                      style={{ color: "red", fontSize: "14px" }}
                    >
                      {" "}
                      {error.password}{" "}
                    </div>
                  )}
                </div>

                <Button
                  style={{
                    marginTop: "30px",
                    background: "#E8871E",
                    border: "none",
                  }}
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
              <div
                className="w-100 text-right mt -2"
                style={{ marginTop: "20px" }}
              >
                Not Registered?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
