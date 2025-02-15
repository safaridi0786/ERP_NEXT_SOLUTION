import {
  Box,
  Button,
  Checkbox,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

function MemberInformation() {
  const [open, setOpen] = React.useState(false);
  const [chooseFileopen, setChooseFileOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const fileInputRef = React.useRef(null);
  const [tempImage, setTempImage] = React.useState(null);
  // Choose File Modal Open
  const handleChooseFileOpen = () => setChooseFileOpen(true);
  const handleChooseFileClose = () => {
    setTempImage(null);
    setChooseFileOpen(false);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag-and-drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setTempImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Finalize image selection
  const handleSubmitFile = () => {
    // setImage(tempImage);
    setChooseFileOpen(false);
  };

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Grid container borderBottom={"1px solid black"}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            borderRight={"1px solid black"}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "800",
                fontSize: "16px",
              }}
            >
              MEMBER INFORMATION
            </Typography>
            <Grid container padding={2}>
              <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    border: "2px solid gray",
                    borderRadius: "8px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    backgroundColor: "#f9f9f9",
                    cursor: "pointer",
                  }}
                  onClick={handleChooseFileOpen}
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

                  {image && (
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageChange}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: "800",
                        fontSize: "12px",
                      }}
                    >
                      MEMBER NAME
                    </Typography>
                    <TextField size="small" minWidth />
                    <Button
                      autoFocus
                      variant="contained"
                      style={{
                        background: "#0E4374",
                        cursor: "pointer",
                        height: "5vh",
                      }}
                      size="small"
                    >
                      Search Member
                    </Button>
                  </Box>
                </Grid>{" "}
                <br />
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2.4,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: "800",
                        fontSize: "12px",
                      }}
                    >
                      MEMBER TYPE
                    </Typography>
                    <TextField size="small" minWidth />
                  </Box>
                </Grid>
                <br />
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: "800",
                        fontSize: "12px",
                      }}
                    >
                      MEMBER NAME
                    </Typography>
                    <TextField size="small" minWidth />
                  </Box>
                </Grid>{" "}
                <br />
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 3.8,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: "800",
                        fontSize: "12px",
                      }}
                    >
                      MEMBER NIC
                    </Typography>
                    <TextField size="small" minWidth />
                  </Box>
                </Grid>
                <br />
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 3.2,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: "800",
                        fontSize: "12px",
                      }}
                    >
                      MEMBER DOB
                    </Typography>
                    <TextField size="small" minWidth />
                  </Box>
                </Grid>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "12px",
                    }}
                  >
                    Allow Facilities To Associate Members
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "800",
                fontSize: "16px",
              }}
            >
              MEMBER FACILITIES LIST
            </Typography>
            <Grid container>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "12px",
                    }}
                  >
                    Club Diary / Directory
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    Price
                  </Typography>
                  <TextField
                    size="small"
                    value={"1300"}
                    disabled
                    sx={{ bgcolor: "silver", width: "25%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "12px",
                    }}
                  >
                    Club Diary / Directory
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    Price
                  </Typography>
                  <TextField
                    size="small"
                    value={"1300"}
                    disabled
                    sx={{ bgcolor: "silver", width: "25%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "12px",
                    }}
                  >
                    Club Diary / Directory
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    Price
                  </Typography>
                  <TextField
                    size="small"
                    value={"1300"}
                    disabled
                    sx={{ bgcolor: "silver", width: "25%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "12px",
                    }}
                  >
                    Club Diary / Directory
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    Price
                  </Typography>
                  <TextField
                    size="small"
                    value={"1300"}
                    disabled
                    sx={{ bgcolor: "silver", width: "25%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "12px",
                    }}
                  >
                    Club Diary / Directory
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    Price
                  </Typography>
                  <TextField
                    size="small"
                    value={"1300"}
                    disabled
                    sx={{ bgcolor: "silver", width: "25%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* For Upload Image Modal */}
      <Modal open={chooseFileopen} onClose={handleChooseFileClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "8px 15px",
              backgroundColor: "#0E4374",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "800",
                color: "white",
              }}
            >
              Upload Image
            </Typography>
            <Box
              onClick={handleChooseFileClose}
              sx={{
                cursor: "pointer",
              }}
            >
              <CancelIcon sx={{ color: "white", fontSize: "28px" }} />
            </Box>
          </Box>

          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                border: "2px dashed gray",
                padding: 8,
                borderRadius: 2,
                textAlign: "center",
                cursor: "pointer",
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              {tempImage ? (
                <img
                  src={tempImage}
                  alt="Preview"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              ) : (
                <Typography>Drag & Drop or Click to Select File</Typography>
              )}
            </Box>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={handleChooseFileClose}
                sx={{ gap: 1 }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmitFile}
                disabled={!tempImage}
                sx={{ gap: 1 }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default MemberInformation;
