/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Alert,
  Snackbar,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import login from "../../../../../assets/images/loginbg.jpg";
import logo from "../../../../../assets/images/GinfoTech logo.png";
import "./signup.css";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import {
  getCountriesData,
  postedSignUpData,
} from "../../../../services/api/apiManager";
import { useDispatch } from "react-redux";
import {
  setCompanyName,
  setCompId,
  setCountryId,
  setEmailAddress,
  setFirstname,
  setLastname,
} from "../../../../services/store/slice/credentials";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [email, setEmail] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [cName, setCName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState({
    openSnack: false,
    snackMessage: "",
  });

  // Get Countries From API

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountriesData();
      setCountries(response?.data?.result);
    };

    fetchCountries();
  }, []);

  // dropdown

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // Api integration
  const postAthenticationData = async () => {
    try {
      const data = {
        uName_First: fname,
        uName_Last: lname,
        email: email,
        companyName: cName,
        countryId: parseInt(selectedCountry),
      };

      const response = await postedSignUpData(data);
      console.log(`check response of signup data-->>`, response);
      if (response?.data?.status === 200) {
        dispatch(setCompId(response?.data?.result?.companyId?.comp_ID));
        dispatch(setCountryId(response?.data?.result?.model?.countryId));
        dispatch(setFirstname(response?.data?.result?.model?.uName_First));
        dispatch(setLastname(response?.data?.result?.model?.uName_Last));
        dispatch(setEmailAddress(response?.data?.result?.model?.email));
        dispatch(setCompanyName(response?.data?.result?.model?.companyName));
        setOpenSnackbar({
          openSnack: false,
          snackMessage: "success",
        });
        setTimeout(() => {
          navigate("/setupaccount");
        }, 2000);
      } else {
        setOpenSnackbar({
          openSnack: true,
          snackMessage: "error",
        });
      }
    } catch (error) {
      console.warn(error);
    }
  };
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
            padding: "25px",
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
            <img
              src={logo}
              alt="GinfoTech Solution"
              style={{
                marginBottom: "-110px",
                marginTop: "-75px",
                height: "35vh",
                width: "80%",
              }}
            />

            <Typography
              component="h1"
              style={{
                fontWeight: "600",
                color: "#2f2f2f",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              SignUp
            </Typography>

            <Box pt={0.5}>
              <Typography
                style={{ float: "left", fontSize: "14px", fontWeight: "bold" }}
                pb={1}
              >
                Company Name
              </Typography>
              <ThemeProvider theme={theme}>
                <TextField
                  value={cName}
                  onChange={(e) => {
                    setCName(e.target.value);
                  }}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter Your Company Name"
                />
              </ThemeProvider>
            </Box>
            <Box pt={0.5}>
              <Typography
                style={{ float: "left", fontSize: "14px", fontWeight: "bold" }}
                pb={1}
              >
                First Name
              </Typography>
              <ThemeProvider theme={theme}>
                <TextField
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter Your First Name"
                />
              </ThemeProvider>
            </Box>
            <Box pt={0.5}>
              <Typography
                style={{ float: "left", fontSize: "14px", fontWeight: "bold" }}
                pb={1}
              >
                Last Name
              </Typography>
              <ThemeProvider theme={theme}>
                <TextField
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter Your Last Name"
                />
              </ThemeProvider>
            </Box>
            <Box pt={0.5}>
              <Typography
                style={{ float: "left", fontSize: "14px", fontWeight: "bold" }}
                pb={1}
              >
                Country Region
              </Typography>

              <FormControl
                fullWidth
                size="small"
                style={{
                  backgroundColor: "#f6f7fb",
                  textAlign: "left",
                }}
              >
                <Select value={selectedCountry} onChange={handleChange}>
                  {countries?.map((country, index) => (
                    <MenuItem key={index} value={country.contID}>
                      {country?.contName} ({country.contCode})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box pt={0.5}>
              <Typography
                style={{ float: "left", fontSize: "14px", fontWeight: "bold" }}
                pb={1}
              >
                Email Address
              </Typography>
              <ThemeProvider theme={theme}>
                <TextField
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter Your Email Address"
                />
              </ThemeProvider>
            </Box>
            <Box style={{ float: "right" }}>
              <Typography className="textrecover" sx={{ fontSize: "13px" }}>
                <Link
                  to="/"
                  style={{
                    fontSize: "13px",
                    textDecoration: "none",
                    color: "#095f99",
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <Checkbox style={{ marginTop: "-10px", color: "#0E4374" }} />
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                I agree to{" "}
                <span
                  style={{
                    color: "#0E4374",
                    fontWeight: "800",
                    fontSize: "14px" /* Adjust font size as needed */,
                    textShadow:
                      "2px 2px 5px rgba(0, 0, 0, 0.3), 4px 4px 10px rgba(0, 0, 0, 0.2)" /* 3D shadow effect */,
                    background:
                      "linear-gradient(135deg, #0E4374, #4285F4)" /* Gradient effect */,
                    WebkitBackgroundClip: "text" /* For gradient text color */,
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
                {` `}
                Terms of Service, Privacy Policy & Cookie Policy.
              </Typography>
            </Box>

            <Box pt={2}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#0E4374",
                  borderRadius: "10px",
                  fontWeight: "500",
                  fontSize: "16px",
                  textTransform: "none",
                }}
                onClick={postAthenticationData}
              >
                Create Account
              </Button>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                fontSize: "18px",
                color: "silver",
                fontWeight: "600",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              or
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "silver",
                color: "black",
                fontWeight: "600",
                textTransform: "none",
                gap: 1,
              }}
              // onClick={() => {
              //   postAthenticationData(data);
              // }}
            >
              <GoogleIcon
                sx={{
                  color: "#0E4374",
                }}
              />{" "}
              Signup with Google
            </Button>
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

export default SignUp;

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
              fontSize: "14px",
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
