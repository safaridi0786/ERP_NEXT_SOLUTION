/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Box, Paper, Typography, Button, Alert, Snackbar } from "@mui/material";
import login from "../../../../../assets/images/loginbg.jpg";
import logo from "../../../../../assets/images/GinfoTech logo.png";
import EmailIcon from "@mui/icons-material/Email";
import { TextField, InputAdornment } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./Recover.css";

function Recover() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState({
    openSnack: false,
    snackMessage: "",
  });

  // Api integration
  // const postAthenticationData = async (data) => {
  //   try {
  //     const response = await login(data);
  //     if (response?.data?.status === 200 && response?.data?.result?.token) {
  //       // set data in localstorage
  //       localStorage.setItem("access_token", response?.data?.result?.token);
  //       localStorage.setItem("user_id", response?.data?.result?.user?.userId);
  //       navigate("/admin");
  //       setOpenSnackbar({
  //         openSnack: false,
  //         snackMessage: "success",
  //       });
  //     } else {
  //       setOpenSnackbar({
  //         openSnack: true,
  //         snackMessage: "error",
  //       });
  //     }
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "31px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            textAlign: "center",
            width: {
              xl: "28%",
              lg: "28%",
              md: "40%",
              sm: "75%",
              xs: "75%",
            },
          }}
        >
          <Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="GinfoTech Solution"
                style={{
                  marginBottom: "-90px",
                  marginTop: "-40px",
                  height: "35vh",
                  width: "80%",
                }}
              />

              <Typography
                variant="h5"
                component="h1"
                style={{ fontWeight: "600" }}
              >
                <span style={{ color: "#2f2f2f", fontSize: "16px" }}>
                  Recover Password to{" "}
                  <span
                    style={{
                      color: "#0E4374",
                      fontWeight: "800",
                      fontSize: "14px" /* Adjust font size as needed */,
                      textShadow:
                        "2px 2px 5px rgba(0, 0, 0, 0.3), 4px 4px 10px rgba(0, 0, 0, 0.2)" /* 3D shadow effect */,
                      background:
                        "linear-gradient(135deg, #0E4374, #4285F4)" /* Gradient effect */,
                      WebkitBackgroundClip:
                        "text" /* For gradient text color */,
                      WebkitTextFillColor:
                        "transparent" /* Ensure text is filled by the gradient */,
                      transform:
                        "perspective(500px) rotateX(10deg) rotateY(5deg)" /* 3D perspective */,
                      letterSpacing: "2px" /* Stylish letter spacing */,
                      display: "inline-block",
                    }}
                  >
                    GINFOTECH
                  </span>
                </span>
              </Typography>
            </Box>
            <Box pt={1}>
              <ThemeProvider theme={theme}>
                <Box pt={2}>
                  <TextField
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    variant="outlined"
                    fullWidth
                    placeholder="Email Address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon className="icons-width" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </ThemeProvider>
            </Box>

            <Box mt={2}>
              <Button
                disabled={userName !== "" ? false : true}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#0E4374",
                  borderRadius: "10px",
                  fontWeight: "500",
                  fontSize: "16px",
                  textTransform: "none",
                }}
                onClick={() => {
                  navigate("/otp");
                  //   postAthenticationData(data);
                }}
              >
                Reset Password
              </Button>
            </Box>
            <Box>
              <Button
                variant="text"
                fullWidth
                sx={{
                  color: "#0E4374",
                  fontWeight: "500",
                  fontSize: "14px",
                  marginTop: "10px",
                  textTransform: "none",
                }}
                onClick={() => {
                  navigate("/");
                  //   postAthenticationData(data);
                }}
              >
                Back to Login
              </Button>
            </Box>
          </Box>
        </Paper>
        {/* SnackBar */}
        <Snackbar
          open={openSnackbar?.openSnack}
          autoHideDuration={2000}
          onClose={() =>
            setOpenSnackbar({ openSnack: false, snackMessage: "" })
          }
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
        >
          <Alert
            onClose={() =>
              setOpenSnackbar({ openSnack: false, snackMessage: "" })
            }
            severity={
              openSnackbar?.snackMessage === "success" ? "success" : "error"
            }
            variant="filled"
            sx={{
              width: "100%",
              height: "2.5rem",
              textAlign: "center",
              fontSize: "0.9rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1.2rem",
            }}
            action={
              <>
                <span
                  onClick={() =>
                    setOpenSnackbar({ openSnack: false, snackMessage: "" })
                  }
                  style={{
                    cursor: "pointer",
                    m: "auto 0",
                    fontSize: "13px",
                    color: "rgb(231, 231, 231)",
                  }}
                >
                  Close
                </span>
              </>
            }
          >
            {openSnackbar.snackMessage === "success"
              ? "Successfully login"
              : "Invalid Credentials, Please Try again"}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default Recover;

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            backgroundColor: "#f6f7fb",
            "& input": {
              padding: "6px 12px",
              fontSize: "12px",
              height: "30px",
              backgroundColor: "#f6f7fb",
            },
            "& fieldset": {
              borderColor: "#f6f7fb",
            },
            "&:hover fieldset": {
              borderColor: "#f6f7fb",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f6f7fb",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "4px 8px",
        },
      },
    },
  },
});
