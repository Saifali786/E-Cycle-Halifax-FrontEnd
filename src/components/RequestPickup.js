import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import recycleImage from "../recycleImage.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "./Navbar.css";
import Navbar from "./Navbar";

import axios from "axios";

const theme = createTheme();

export default function RequestPickup() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    window.location.reload();
  };
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    address1: "",
    describe: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState();
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    setSuccess(false);

    const errors = validate(values);
    const data = new FormData(event.currentTarget);

    if (
      values.firstName &&
      values.lastName &&
      values.contact &&
      values.describe &&
      values.address1
    ) {
      console.log(values);
      setOpen(true);
      axios
        .post(
          `https://e-cycle-halifax.onrender.com/requestpickup`,
          {
            contact: values.contact,
            firstName: values.firstName,
            lastName: values.lastName,
            address1: values.address1,
            describe: values.describe,
          },
          {
            headers: {
              "Content-Type": "application/json",
              mode: "no-cors",
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    } else {
      setOpen(false);
      setErrors(errors);
    }
  };
  function validate(values) {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.contact) {
      errors.contact = "Contact is required";
    }
    if (!values.address1) {
      errors.address1 = "Address is required";
    }
    if (!values.describe) {
      errors.describe = "Message is required";
    }
    return errors;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container component="main">
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={2}
          md={7}
          sx={{
            backgroundImage: `url(${recycleImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 5,
              mx: 7,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 1,
            }}
          >
            <h1>
              <b>Request Pick Up </b>
            </h1>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                margin: "0 auto",
                border: "1px solid black",
                padding: "50px",
                mt: 5,
              }}
            >
              <h6>
                <u>Please note</u> This is a guest pickup service you would be
                required to showcase your NSID for verification
              </h6>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    value={values.firstName}
                    onChange={handleChange}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={values.lastName}
                    onChange={handleChange}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="contact"
                    name="contact"
                    label="Contact"
                    fullWidth
                    variant="standard"
                    value={values.contact}
                    onChange={handleChange}
                    error={Boolean(errors.contact)}
                    helperText={errors.contact}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address1"
                    name="address1"
                    label="Address "
                    fullWidth
                    required
                    variant="standard"
                    value={values.address1}
                    onChange={handleChange}
                    error={Boolean(errors.address1)}
                    helperText={errors.address1}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="describe"
                    name="describe"
                    label="Description"
                    fullWidth
                    variant="standard"
                    value={values.describe}
                    onChange={handleChange}
                    error={Boolean(errors.describe)}
                    helperText={errors.describe}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Request Pick Up
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Congratulations!"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You request has been confirmed!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>ok</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
