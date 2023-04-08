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
import logo from "../logo.svg";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { width } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();

export default function RequestPickup() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState();

  const handleSubmit = (event) => {
    navigate("/signup");
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={2}
          md={5}
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundPosition: "center",
            height: "100vh",
          }}
        />

        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 5,
              mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 20,
            }}
          >
            <h1 style={{ fontSize: 50 }}>
              <b>Welcome</b>
            </h1>
            <br />
            <br />
            <p>
              {" "}
              E-Cycle Halifax is dedicated to providing a safe and sustainable
              solution for disposing of electronic waste, and we believe that
              our facility can make a significant impact in the community.
            </p>
            <Button
              style={{
                marginTop: "30px",
                background: "#8bc34a",
                padding: 20,
                color: "white",
                border: "none",
              }}
              onClick={handleSubmit}
            >
              {" "}
              Get Started
            </Button>
            {/*             
     <Box
     component="form" noValidate onSubmit={handleSubmit} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        margin: '0 auto',
        border: '1px solid black',
        padding: '50px',
        mt: 5
      }}> */}
            {/* </Box> */}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
