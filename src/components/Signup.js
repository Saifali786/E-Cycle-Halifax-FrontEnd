// References: [1] https://git.cs.dal.ca/prasla/csci5410-f23-b00899528/-/tree/A2/frontend
//             [2] https://git.cs.dal.ca/prasla/csci-5709/-/blob/tutorial3/src/Registration.js
import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Signup.css";
import signup from "../assets/signup.avif";
import axios from "axios";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  let errorFlag = 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(firstName);
    console.log(lastName);

    console.log(password);
    console.log(confirmPassword);
    const formValue = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      address,
    };
    setError(validateForm(formValue));
    if (errorFlag === 0) {
      localStorage.setItem("email", email);

      try {
        const response = await axios.post(
          "https://e-cycle-halifax.onrender.com/addUser",
          {
            ...formValue,
          }
        );
        alert(response.data.statusMessage);
        console.log(response.data);
        navigate("/Login");
      } catch (error) {
        if (error.response.status === 409) {
          alert(error.response.data.message);
        } else {
          console.error(error.message);
        }
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAddress("");
      }
    } else {
      console.log(error);
    }
  };

  const validateForm = (data) => {
    const letterRegex = /^[a-zA-Z\s]*$/; //Reference: https://stackoverflow.com/questions/12778083/regex-with-space-and-letters-only
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; //Reference : https://regexr.com/3e48o
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Reference: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const errorMessage = {};
    if (letterRegex.test(data.firstName) === false) {
      errorFlag = 1;
      errorMessage.firstName = "First Name should only have letters";
    } else if (letterRegex.test(data.lastName) === false) {
      errorFlag = 1;
      errorMessage.lastName = "Last Name should only have letters ";
    } else if (data.email === "" || emailRegex.test(data.email) === false) {
      errorFlag = 1;
      errorMessage.email = "Email is not valid";
    } else if (passwordRegex.test(data.password) === false) {
      errorFlag = 1;
      errorMessage.password =
        "Password must be more than 8 characters, must have at least one uppercase letter, one lowercase letter, one number and one special character";
    } else if (data.password !== data.confirmPassword) {
      errorFlag = 1;
      errorMessage.confirmPassword = "Password do not match";
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
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src={signup}
              draggable="false;"
              alt="signup-image"
              width="90%"
              style={{
                touchAction: "none",
                "pointer-events": "none",
                marginTop: "70px",
              }}
            />
          </div>
          <p className="signup-message">
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
            style={{ background: "#87a743", marginTop: "70px" }}
            className="mobile-style"
          >
            <Card.Body>
              <h2 className="text-center mb-4">Signup</h2>

              <Form onSubmit={handleSubmit}>
                <div style={{ textAlign: "left" }}>
                  <Form.Group id="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onSubmit={handleSubmit}
                      required
                    />
                  </Form.Group>
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "14px" }}
                  >
                    {" "}
                    {error.firstName}{" "}
                  </div>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Form.Group id="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onSubmit={handleSubmit}
                      required
                    />
                  </Form.Group>
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "14px" }}
                  >
                    {" "}
                    {error.lastName}{" "}
                  </div>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Form.Group id="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      name="address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onSubmit={handleSubmit}
                      required
                    />
                  </Form.Group>
                </div>
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
                      placeholder="8+ characters"
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

                <div style={{ textAlign: "left" }}>
                  <Form.Group id="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      type={"password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                      {error.confirmPassword}{" "}
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    style={{
                      marginTop: "30px",
                      background: "#E8871E",
                      border: "none",
                    }}
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </Form>
              <div
                className="w-100 text-right mt -2"
                style={{ marginTop: "20px" }}
              >
                Already Registered?{" "}
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
