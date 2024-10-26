/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import login from "../../../../../assets/images/loginbg.jpg";
import logo from "../../../../../assets/images/GinfoTech logo.png";
import "./Submit.css";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Submit() {
  const navigate = useNavigate();
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

              <CheckCircleIcon
                sx={{
                  fontSize: "150px",
                  color: "#0E4374",
                  mb: 2,
                }}
              />
              <Typography style={{ fontWeight: "800", fontSize: "30px" }}>
                Password Updated
              </Typography>
              <Typography style={{ fontWeight: "600" }}>
                Your Password has been updated!
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
                  navigate("/");
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Submit;
