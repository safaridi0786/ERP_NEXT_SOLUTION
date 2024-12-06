import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TitleIcon from "@mui/icons-material/Title";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
// import dayjs from "dayjs";

function Employees() {
  const [open, setOpen] = React.useState(false);
  const [chooseFileopen, setChooseFileOpen] = React.useState(false);
  const [openAddingModal, setAddingOpenModal] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [tempImage, setTempImage] = React.useState(null);
  const fileInputRef = React.useRef(null);
  // Choose File Modal Open
  const handleChooseFileOpen = () => setChooseFileOpen(true);
  const handleChooseFileClose = () => {
    setTempImage(null);
    setChooseFileOpen(false);
  };

  // Adding Form Open Modal

  const handleFormOpenModal = () => setAddingOpenModal(true);
  const handleFormCloseModal = () => {
    setAddingOpenModal(false);
  };

  // Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImage(null);
    setTempImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
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
    setImage(tempImage);
    setChooseFileOpen(false);
  };
  // DataGrid

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Action",
      headerName: "Action",
      description: "Action",
      sortable: false,
      width: 140,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Box>
          <Tooltip title="Add">
            <IconButton
              color="primary"
              // onClick={() => handleEdit(params.row.id)}
              onClick={handleOpen}
              size="small"
            >
              <AddCircleIcon
                style={{
                  color: "#0E4374",
                  cursor: "pointer",
                  fontSize: "24px",
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton
              color="primary"
              // onClick={() => handleEdit(params.row.id)}
              size="small"
            >
              <ModeEditIcon
                style={{
                  color: "#0E4374",
                  cursor: "pointer",
                  fontSize: "24px",
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              color="error"
              // onClick={() => handleDelete(params.row.id)}
              size="small"
            >
              <DeleteIcon
                sx={{
                  color: "red",
                  cursor: "pointer",
                  fontSize: "24px",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 23 },
    { id: 6, lastName: "Melisandre", firstName: "ali", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Melisandre", firstName: "Turk", age: 150 },
    { id: 11, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 12, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  // AutoComplete

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  // PDF Generate for Report

  const downloadFilterData = () => {
    const doc = new jsPDF({ orientation: "landscape" });

    // Add Title
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth =
      (doc.getStringUnitWidth("Employees Report") *
        doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const xPos = (pageWidth - textWidth) / 2;

    doc.setFont("helvetica", "bold");
    doc.text("Employees Report", xPos, 15);

    // Add a box (rectangle) for additional information
    const boxStartY = 20;
    const boxHeight = 50;
    const boxPadding = 5;
    doc.rect(10, boxStartY, pageWidth - 20, boxHeight); // Box dimensions

    doc.setFontSize(10);

    // Left-aligned content inside the box
    let leftStartX = 15; // Left-side padding
    let leftY = boxStartY + boxPadding; // Vertical start position
    const lineSpacing = 6; // Space between lines

    doc.text("S#: 1", leftStartX, leftY);
    leftY += lineSpacing; // Move to next line
    doc.text("Pers #: 32019639", leftStartX, leftY);
    leftY += lineSpacing;
    doc.text("Buckle No #: 12345", leftStartX, leftY);
    leftY += lineSpacing;
    doc.text("Name: Farzana Perveen (Lady Health Worker)", leftStartX, leftY);
    leftY += lineSpacing;
    doc.text("CNIC: 3210534893483", leftStartX, leftY);
    leftY += lineSpacing;
    doc.text("GPF Interest: Applied", leftStartX, leftY);

    // Right-aligned content inside the box
    const rightPadding = 15; // Padding from right edge
    let rightY = boxStartY + boxPadding;
    const rightStartX = pageWidth - rightPadding; // Far-right position

    doc.text("P Sec: 002", rightStartX, rightY, { align: "right" });
    rightY += lineSpacing;
    doc.text(`Date: ${new Date().toLocaleDateString()}`, rightStartX, rightY, {
      align: "right",
    });
    rightY += lineSpacing;
    doc.text(
      "MV9029 - National Programme for Famin. Of Health",
      rightStartX,
      rightY,
      { align: "right" }
    );
    rightY += lineSpacing;
    doc.text("NTN: 987654321", rightStartX, rightY, { align: "right" });
    rightY += lineSpacing;
    doc.text("GPF#: 00123", rightStartX, rightY, { align: "right" });
    rightY += lineSpacing;
    doc.text("Old#: 00001", rightStartX, rightY, { align: "right" });

    // Adjust start position for the table
    const tableStartY = boxStartY + boxHeight + 10;

    // Map DataGrid rows and columns to autoTable
    const tableColumns = columns.map((col) => col.headerName);
    const tableRows = rows.map((row) =>
      columns.map((col) =>
        typeof col.valueGetter === "function"
          ? col.valueGetter({ row })
          : row[col.field]
      )
    );

    // Generate Table
    doc.autoTable({
      startY: tableStartY,
      head: [tableColumns],
      body: tableRows,
    });

    // Save the PDF
    doc.save("Employees_Report.pdf");
  };

  return (
    <>
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            sx={{ display: "flex", gap: 1 }}
          >
            <TextField
              fullWidth
              size="small"
              autoComplete="off"
              placeholder="Search By Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#0E4374" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "40px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#0E4374",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#0E4374",
                  },
                },
              }}
            />
            <Autocomplete
              fullWidth
              size="small"
              options={top100Films}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "40px",
                  "& fieldset": {
                    borderRadius: "40px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0E4374",
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#0E4374",
                    },
                  },
                },
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Name" />
              )}
            />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            sx={{ display: "flex", gap: 1, justifyContent: "right" }}
          >
            <Button
              variant="contained"
              onClick={downloadFilterData}
              sx={{
                gap: 1,
                backgroundColor: "#5a32a3",
                color: "white",

                "&:hover": {
                  backgroundColor: "#5a32a3",
                },
              }}
            >
              <FileUploadIcon /> Export to PDF
            </Button>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                gap: 1,
                backgroundColor: "#0E4374",
                color: "white",

                "&:hover": {
                  backgroundColor: "#0E4374",
                },
              }}
            >
              <AddCircleIcon /> Add Employees
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            checkboxSelection
            disableRowSelectionOnClick
            rowHeight={35}
            columnHeaderHeight={35}
            pageSizeOptions={[5, 25, 50, 100]}
            sx={{
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#0E4374",
                color: "#FFFFFF",
                fontFamily: "Poppins",
                fontWeight: "300",
                fontSize: {
                  xl: "15px",
                  lg: "13px",
                  md: "13px",
                  sm: "13px",
                  xs: "13px",
                },
                overflow: "hidden",
                ".MuiSvgIcon-root": {
                  color: "white",
                },
              },
              "& .MuiDataGrid-footerContainer": {
                justifyContent: "flex-end",
                backgroundColor: "#DCF0FF",
                height: "5px",
                fontSize: {
                  xl: "15px",
                  lg: "13px",
                  md: "13px",
                  sm: "13px",
                  xs: "13px",
                },
              },

              "& .MuiInputBase-root": {
                border: "0.5px solid #383838",
                width: "60px",
                height: "30px",
                borderRadius: "10%",
                backgroundColor: "white",
              },
              color: "black",
              fontSize: {
                xs: "12px",
                sm: "12px",
                md: "12px",
                lg: "12px",
                xl: "14px",
              },
            }}
          />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", sm: "80%", md: "70%" },
            height: { xs: "50%", sm: "80%", md: "80%" },
            overflow: "hidden",
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
              ADD DATA FORM
            </Typography>
            <Box
              onClick={handleClose}
              sx={{
                cursor: "pointer",
              }}
            >
              <CancelIcon sx={{ color: "white", fontSize: "28px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              mt: 1,
              p: 2,
              height: "calc(100% - 64px)",
              overflowY: "auto",
            }}
          >
            <Grid container alignItems={"center"}>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={4}
                xs={4}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <TextField
                  fullWidth
                  size="small"
                  autoComplete="off"
                  label="Personal Number"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  size="small"
                  label="CNIC"
                  autoComplete="off"
                  variant="outlined"
                />
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8} align={`right`}>
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
            </Grid>
            <Box
              sx={{
                backgroundColor: "#93C572",
                mt: 1,
                p: 1,
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                Hiring Performa
              </Typography>
            </Box>
            <Box
              sx={{ p: 1, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        "&.Mui-focused": {
                          color: "#0E4374",
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="DDO Description" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="DDO Code" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Ministry Department Description"
                      />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Ministry Code" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="BPS" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Emp Status (Perm/Contract)"
                      />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Gazetted/Non-Gazetted" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ marginTop: "-7px" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Date of Birth"
                        size="small"
                        slotProps={{
                          textField: { size: "small" },
                          openPickerButton: {
                            sx: {
                              color: "#0E4374",
                              "&:hover": {
                                color: "#0E4374",
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ marginTop: "-7px" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Appointment Date"
                        size="small"
                        slotProps={{
                          textField: { size: "small" },
                          openPickerButton: {
                            sx: {
                              color: "#0E4374",
                              "&:hover": {
                                color: "#0E4374",
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ mt: "-7px" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Date of Expiry (Contract)"
                        size="small"
                        slotProps={{
                          textField: { size: "small" },
                          openPickerButton: {
                            sx: {
                              color: "#0E4374",
                              "&:hover": {
                                color: "#0E4374",
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Transfor From" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ mt: "-7px" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Date"
                        size="small"
                        slotProps={{
                          textField: { size: "small" },
                          openPickerButton: {
                            sx: {
                              color: "#0E4374",
                              "&:hover": {
                                color: "#0E4374",
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Transfor To" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ mt: "-7px" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Date"
                        size="small"
                        slotProps={{
                          textField: { size: "small" },
                          openPickerButton: {
                            sx: {
                              color: "#0E4374",
                              "&:hover": {
                                color: "#0E4374",
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Designation" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Last Designation" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Buckle No"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Page No"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                backgroundColor: "#93C572",
                mt: 1,
                p: 1,
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                Personal Information
              </Typography>
            </Box>
            <Box
              sx={{ p: 1, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Grid container spacing={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Title (Mr, Mrs, Wid)"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TitleIcon sx={{ color: "darkblue" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  {" "}
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Father Name"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Address"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <HomeIcon sx={{ color: "darkblue" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Sect" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Marital Status" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Cast" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Religion" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Email"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon sx={{ color: "darkblue" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Mobile Number"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneAndroidIcon sx={{ color: "darkblue" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Whatsapp"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <WhatsAppIcon sx={{ color: "darkblue" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                backgroundColor: "#93C572",
                mt: 1,
                p: 1,
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                Bank Detail
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, p: 1 }}
            >
              <Grid container spacing={1}>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Bank Name" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <Autocomplete
                    fullWidth
                    size="small"
                    options={top100Films}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0E4374",
                        },
                        "& .MuiInputLabel-root": {
                          "&.Mui-focused": {
                            color: "#0E4374",
                          },
                        },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Bank Branch" />
                    )}
                  />
                  <Tooltip title="Add" placement="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 35,
                        height: 37,
                        border: "1px solid #0E4374",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#0E4374",
                          "& svg": {
                            color: "#FFFFFF",
                          },
                        },
                      }}
                      onClick={handleFormOpenModal}
                    >
                      <AddIcon fontSize="medium" sx={{ color: "#0E4374" }} />
                    </Box>
                  </Tooltip>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="Bank Account No"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="NTN"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="GPF Account No"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    label="GPF Last Balance"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>

            <Grid container>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{
                  p: 1,
                  gap: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClose}
                  sx={{ gap: 1 }}
                >
                  Close <CloseIcon />
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClose}
                  sx={{ gap: 1 }}
                >
                  Save <SaveIcon />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
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

      {/* For Add Form Modal */}
      <Modal open={openAddingModal} onClose={handleFormCloseModal}>
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
              Add Form
            </Typography>
            <Box
              onClick={handleFormCloseModal}
              sx={{
                cursor: "pointer",
              }}
            >
              <CancelIcon sx={{ color: "white", fontSize: "28px" }} />
            </Box>
          </Box>

          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              size="small"
              autoComplete="off"
              placeholder="Search By Name"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#0E4374",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#0E4374",
                  },
                },
              }}
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
                onClick={handleFormCloseModal}
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

export default Employees;
