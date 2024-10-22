/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
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

const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo - Brazzaville", code: "CG" },
  { name: "Congo - Kinshasa", code: "CD" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Eswatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Greece", code: "GR" },
  { name: "Grenada", code: "GD" },
  { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Laos", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "North Macedonia", code: "MK" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Vatican City", code: "VA" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState({
    openSnack: false,
    snackMessage: "",
  });

  // dropdown

  const [selectedCountry, setSelectedCountry] = React.useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

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
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
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
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
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
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
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
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country.code}>
                      {country.name} ({country.code})
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
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
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
                onClick={() => {
                  // postAthenticationData(data);
                  navigate("/setupaccount");
                }}
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
