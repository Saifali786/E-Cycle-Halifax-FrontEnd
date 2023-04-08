import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import contactus from "../contactus.svg";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { width } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const theme = createTheme();

export default function RequestPickup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    contact: "",
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
    setSuccess(false);
    event.preventDefault();
    const errors = validate(values);
    const data = new FormData(event.currentTarget);

    if (
      values.firstName &&
      values.lastName &&
      values.contact &&
      values.describe
    ) {
      // window.location.reload();

      axios
        .post(
          `https://e-cycle-halifax.onrender.com/contactus`,
          {
            contact: values.contact,
            firstName: values.firstName,
            lastName: values.lastName,
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
          window.location.reload();
          // setSuccess(navigate('/contactus'));
        });
    } else {
      setErrors(errors);
      console.log(values);
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
    if (!values.describe) {
      errors.describe = "description required";
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
            backgroundImage: `url(${contactus})`,
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
              mt: 5,
            }}
          >
            <h1>
              <b>Contact Us</b>
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
                // onClick={handleSubmit}
              >
                Submit
              </Button>
              <h5>
                In Case we missed you, reach out to us at:{" "}
                <a href="mailto:recycleyourewasteHalifax@gmail.com">
                  recycleyourewasteHalifax@gmail.com
                </a>
              </h5>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
