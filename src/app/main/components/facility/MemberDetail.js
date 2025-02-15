import {
  Box,
  Button,
  Checkbox,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function MemberDetail() {
  return (
    <>
      <Box sx={{ padding: 1 }}>
        <Grid container>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            border={"1px solid #0E4374"}
            borderRadius={"5px"}
            padding={1}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Member Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Member ID
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Member Type
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Title
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Full Name
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Father Name
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  DOB
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Address
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  City
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Gender
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Married Status
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Marriage Anniversary Date
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Pin
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Limit
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Bussiness Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Occupation
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Job Title
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Company Name
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Country Name
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            border={"1px solid black"}
            borderRadius={"5px"}
            padding={1}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Card Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  RFID Card No
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}></Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox fullWidth size="small" />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Family Package
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Account Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Member Status
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Billing Effective Date
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Joining Date
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Billing Expiration Date
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
              <Grid container marginBottom={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}></Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox fullWidth size="small" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Stop Bill Generation
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Contact Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  NIC No
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Phone No
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Fax
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Email
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Address
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Card Expiry Date
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            border={"1px solid black"}
            borderRadius={"5px"}
            padding={1}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Personal Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Upload Photo
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <Box
                  sx={{
                    border: "1px solid silver",
                    p: 0.8,
                    borderRadius: "5px",
                  }}
                >
                  <input type="file" />
                </Box>
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Other Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Refer By1
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Membership Manager
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "800",
                textAlign: "center",
                borderBottom: "1px solid #0E4374",
                mb: 1,
                backgroundColor: "#0E4374",
                borderRadius: "5px",
                color: "white",
                p: 0.5,
              }}
            >
              Billing Information
            </Typography>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Account No
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Contact Info
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Billing Address
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Name
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  City
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Phone
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Fax
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Email
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} marginBottom={1}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Device Id
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <TextField fullWidth size="small" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Add New Facility Change To All Member
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Bill Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member Type
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Facility
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Rate
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Remarks
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"} spacing={2}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Import Excel
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Box
                    sx={{
                      border: "1px solid silver",
                      p: 0.8,
                      borderRadius: "5px",
                    }}
                  >
                    <input type="file" />
                  </Box>
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                  <Button variant="contained" color="primary" size="small">
                    Show
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Add New Credit Note
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Invoice Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Search Member
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <TextField fullWidth size="small" />
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox size="small" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Paid
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Facility
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container gap={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  p: 0.5,
                  borderBottom: "2px solid black",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Sr No
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Item Name
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Rate
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Quantity
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Amount
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Discount%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Discount
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Tax%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Tax Amount
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Net
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Option
                </Typography>
              </Box>
            </Grid>
            <Grid container>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Grid container alignItems={"center"}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Total
                    </Typography>
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Grid container alignItems={"center"}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Tax Percentage
                    </Typography>
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Grid container alignItems={"center"} spacing={2}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Tax Amount
                    </Typography>
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Grid container alignItems={"center"}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Discount
                    </Typography>
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Grid container alignItems={"center"}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Other Expence
                    </Typography>
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Grid container alignItems={"center"} spacing={2}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Net Amount
                    </Typography>
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container alignItems={"center"} spacing={2}>
                <Grid item xl={1.3} lg={1.3} md={1.3} sm={1.3} xs={1.3}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Remarks
                  </Typography>
                </Grid>
                <Grid item xl={10.7} lg={10.7} md={10.7} sm={10.7} xs={10.7}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} align="right">
              <Button variant="contained" color="primary" size="small">
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Add New Payment
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
              <Grid container marginBottom={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Payment Date
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Search Member
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Enter Bill Id
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container marginBottom={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Member Name
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Member Id
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Bill Month
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container marginBottom={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Payment Amount
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Avail Bill Detail
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Select Bank
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Slip No
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Upload Slip
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <Box
                        sx={{
                          border: "1px solid silver",
                          p: 0.8,
                          borderRadius: "5px",
                        }}
                      >
                        <input type="file" />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Grid container alignItems={"center"}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Remarks
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "gray",
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                Current Month Bill:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "gray",
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                Paid:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "gray",
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                Balance:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "gray",
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                Food/Room Bill:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "gray",
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                Limit:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "gray",
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                Available Limit:
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="contained" color="error" size="small">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" size="small">
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Add New Final Bill
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Bill Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Due Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Month
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Payment Year
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member Type
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4} align="left">
              <Button variant="contained" color="primary" size="small">
                Show
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Add Single Member Bill
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Bill Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Due Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Month
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Payment Year
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member Type
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4} align="left">
              <Button variant="contained" color="primary" size="small">
                Show
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Reception
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Search Type
                  </Typography>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Radio size="small" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      By Member Id
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Radio size="small" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      By RF Code
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Member Id
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4} align="left">
              <Button variant="contained" color="primary" size="small">
                Show
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Final Bill Report
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Month
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Payment Year
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member Type
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox size="small" />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select All
                  </Typography>
                </Box>
                <Button variant="contained" color="primary" size="small">
                  Show
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Final Bill Summery Report
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Month
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Payment Year
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member Type
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox size="small" />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select All
                  </Typography>
                </Box>
                <Button variant="contained" color="primary" size="small">
                  Show
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Generate Member Bill
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Month
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Payment Year
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Button variant="contained" color="primary" size="small">
                Show
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Generate New Member Report
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    From Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    To Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Button variant="contained" color="primary" size="small">
                Show
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Generate Member Report Facility Wise
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member Facility
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <Button variant="contained" color="primary" size="small">
                Show
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Generate Member Report
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member Type
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Status
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Select Member City
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox size="small" />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    All
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox size="small" />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Show Balance
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox size="small" />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Show Photo
                  </Typography>
                </Box>
                <Button variant="contained" color="primary" size="small">
                  Show
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          Member Ledger
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Search Member
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    From Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    To Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Button variant="contained" color="primary" size="small">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "800",
            textAlign: "center",
            borderBottom: "1px solid #0E4374",
            backgroundColor: "#0E4374",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            color: "white",
            p: 0.5,
          }}
        >
          All Member Ledger
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #0E4374",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    From Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Grid container alignItems={"center"}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    To Date
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                  <TextField fullWidth size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Button variant="contained" color="primary" size="small">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default MemberDetail;
