import React, { useState, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import login from "../../../../../assets/images/loginbg.jpg";
import logo from "../../../../../assets/images/GinfoTech logo.png";
import { useNavigate } from "react-router-dom";

function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [generatedOtp, setGeneratedOtp] = useState("12345");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Move to next input if a digit is entered
    if (value && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpSubmit = () => {
    // if (otp.join("") === generatedOtp) {
    //   setSnackbar({
    //     open: true,
    //     message: "OTP Verified Successfully!",
    //     severity: "success",
    //   });
    //   setTimeout(() => {
    //     navigate("/reset");
    //   }, 1500);
    // } else {
    //   setSnackbar({
    //     open: true,
    //     message: "Invalid OTP. Please try again.",
    //     severity: "error",
    //   });
    // }
    navigate("/reset");
  };

  const handleResendOtp = () => {
    const newOtp = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedOtp(newOtp);
    setSnackbar({
      open: true,
      message: `OTP resent to your email: ${newOtp}`,
      severity: "info",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            sx={{
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
            <Typography style={{ fontWeight: "800", fontSize: "30px" }}>
              OTP Verification
            </Typography>
            <Typography style={{ fontWeight: "600", marginBottom: "20px" }}>
              Enter the OTP sent to your email
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              pt: 2,
            }}
          >
            {otp.map((digit, index) => (
              <TextField
                key={index}
                value={digit}
                onChange={(e) => {
                  if (/^\d*$/.test(e.target.value)) {
                    handleOtpChange(e.target.value, index);
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                inputRef={(el) => (inputRefs.current[index] = el)}
                variant="outlined"
                sx={{
                  width: "50px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: digit ? "#0E4374" : "#ced4da",
                    },
                    "&:hover fieldset": {
                      borderColor: digit ? "#0E4374" : "#ced4da",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0E4374",
                    },
                  },
                  "& input": {
                    textAlign: "center",
                    fontSize: "20px",
                  },
                }}
                inputProps={{ maxLength: 1 }}
              />
            ))}
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
              onClick={handleOtpSubmit}
              disabled={!isOtpComplete}
            >
              Submit OTP
            </Button>

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
              onClick={handleResendOtp}
            >
              Resend OTP
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default OTPVerification;
