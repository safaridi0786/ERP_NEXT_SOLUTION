import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function Employees() {
  const [image, setImage] = React.useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "800",
            mb: 1,
          }}
        >
          DATA FORM
        </Typography>
        <Grid container alignItems={"center"}>
          <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
                Personal Number :
              </Typography>
              <TextField
                autoComplete="off"
                sx={{
                  width: 300,
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#0E4374",
                  },
                }}
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,

                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
                CNIC :
              </Typography>
              <TextField
                autoComplete="off"
                sx={{
                  width: 300,
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#0E4374",
                  },
                }}
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2} align={`right`}>
            <Box
              sx={{
                width: 110,
                height: 110,
                border: "2px solid gray",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                backgroundColor: "#f9f9f9",
              }}
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <span
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  No Image Uploaded
                </span>
              )}
              {!image && (
                <Button
                  component="label"
                  size="small"
                  sx={{
                    position: "absolute",
                    bottom: 5,
                    backgroundColor: "#1976d2",
                    fontSize: "8px",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#115293",
                    },
                  }}
                >
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ backgroundColor: "#93C572", mt: 1, p: 0.5 }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontSize: "16px",
              fontWeight: "800",
            }}
          >
            Hiring Performa
          </Typography>
        </Box>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  DDO Description :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  DDO Code :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Ministry Department Description :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Ministry Code :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  BPS :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Emp Status (Perm/Contract) :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Gazetted/Non-Gazetted :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Date of Birth :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Appointment Date :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Date of Expiry (Contract) :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Transfor From :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Date :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Transfor To :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Date :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Designation :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Last Designation :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Buckle No :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Page No :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ backgroundColor: "#93C572", mt: 1, p: 0.5 }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontSize: "16px",
              fontWeight: "800",
            }}
          >
            Personal Information
          </Typography>
        </Box>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Title `(Mr, Mrs, Wid)` :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Name :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Father Name :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Address :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 350,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Sect :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Marital Status :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Cast :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 350,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Religion :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Email :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Mobile Number :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Whatsapp :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ backgroundColor: "#93C572", mt: 1, p: 0.5 }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontSize: "16px",
              fontWeight: "800",
            }}
          >
            Bank Detail
          </Typography>
        </Box>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Bank Name :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Bank Branch :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  Bank Account No :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: "5px 35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  NTN :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  GPF Account No :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    width: 300,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  GPF Last Balance :
                </Typography>
                <TextField
                  autoComplete="off"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0E4374",
                    },
                  }}
                  variant="standard"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Employees;
