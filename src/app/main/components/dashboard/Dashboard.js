import {
  Autocomplete,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InfoIcon from "@mui/icons-material/Info";
import { DataGrid } from "@mui/x-data-grid";

function Dashboard() {
  const DashboardBoxes = [
    {
      status: "Total Employees",
      bgColor: "#aef1f3",
      color: "#feab13",
      cardLogoColor: "#E3FFE7",
      logo: <Diversity1Icon sx={{ color: "black", fontSize: "28px" }} />,
      count: "9087",
      //   handleClick: handleOpen,
    },
    {
      status: "Average Salary",
      bgColor: "#bdc8f7",
      color: "#3EAE4E",
      cardLogoColor: "#E5F0FF",
      logo: <CreditScoreIcon sx={{ color: "black", fontSize: "28px" }} />,
      count: "565",
      //   handleClick: handleOpenApproved,
    },
    {
      status: "Total Outstanding",
      bgColor: "#e9bdf7",
      color: "#DB8B44",
      cardLogoColor: "#FFEDDC",
      logo: <ListAltIcon sx={{ color: "black", fontSize: "28px" }} />,
      count: "1278",
      //   handleClick: handleOpenBilled,
    },
    {
      status: "Total Request",
      bgColor: "#e8f7bd",
      color: "green",
      cardLogoColor: "#E3FFE7",
      logo: <InfoIcon sx={{ color: "black", fontSize: "28px" }} />,
      count: "1066",
      //   handleClick: handleOpenActivePatients,
    },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const data = {
    data: [
      {
        label: "Windows",
        value: 72.72,
      },
      {
        label: "OS X",
        value: 16.38,
      },
      {
        label: "Linux",
        value: 3.83,
      },
      {
        label: "Chrome OS",
        value: 2.42,
      },
      {
        label: "Other",
        value: 4.65,
      },
    ],
  };

  // DataGrid

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 11, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 12, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const options = ["100", "200", "300"];

  return (
    <>
      <Box sx={{ p: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0px",
          }}
        >
          <Typography
            color={"black"}
            fontWeight={600}
            sx={{
              fontSize: {
                xl: "24px",
                lg: "16px",
                md: "15px:",
                sm: "15px",
                xs: "15px",
              },
            }}
          >
            Dashboard
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Autocomplete
              size="small"
              options={options}
              renderInput={(params) => (
                <TextField {...params} label="Matrices" variant="outlined" />
              )}
              style={{ width: 120, margin: "0 auto" }}
            />
            <Autocomplete
              size="small"
              options={options}
              renderInput={(params) => (
                <TextField {...params} label="Date" variant="outlined" />
              )}
              style={{ width: 120, margin: "0 auto" }}
            />
          </Box>
        </Box>
        <Grid container sx={{ gap: "10px" }}>
          {/* Card Visit */}
          <Grid container spacing={1}>
            {DashboardBoxes.map((appointment, index) => (
              <Grid item lg={3} xl={3} md={6} sm={6} xs={6} key={index}>
                <Box
                  sx={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    border: `1px solid ${"#00000026"}`,
                    borderRadius: "10px",
                    boxShadow: "0px 1px 6px 0px #0000000F",
                    backgroundColor: appointment?.bgColor,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Divider
                      sx={{
                        backgroundColor: appointment.color,
                        width: "4px",
                        // height: '60px',
                        height: {
                          xl: "120px",
                          lg: "120px",
                          md: "120px",
                          sm: "120px",
                          xs: "120px",
                        },
                      }}
                    />
                    <Box sx={{ zIndex: "2" }}>
                      <Typography
                        sx={{
                          color: "color",
                          fontWeight: "630",
                          fontFamily: "Poppins",
                          fontSize: {
                            xl: "20px",
                            lg: "13px",
                            md: "13px",
                            sm: "13px",
                            xs: "20px",
                          },
                          whiteSpace: "nowrap",
                        }}
                      >
                        {appointment.status}
                      </Typography>
                      <Button onClick={appointment.handleClick}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: appointment.color,
                            fontWeight: "bold",
                            textDecoration: "underline",
                            fontSize: {
                              xl: "34px",
                              lg: "20px",
                              md: "20px",
                              sm: "20px",
                              xs: "20px",
                            },
                          }}
                        >
                          {appointment.count}
                        </Typography>
                      </Button>
                    </Box>
                    {/* Visit Card Logo */}
                    <CardLogo
                      sx={{
                        bgcolor: "white",
                        border: "3px dashed black",
                      }}
                    >
                      {appointment.logo}
                    </CardLogo>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: "space-between",
          width: "100%",
          gap: 3,
        }}
      >
        <Card
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: 2,
            border: `1px solid ${"#00000026"}`,
          }}
        >
          <Typography
            color={"black"}
            fontWeight={700}
            sx={{
              fontSize: {
                xl: "24px",
                lg: "16px",
                md: "15px:",
                sm: "15px",
                xs: "15px",
              },
            }}
          >
            Payroll History
            <br />
            <span
              style={{ color: "silver", fontSize: "16px", fontWeight: "600" }}
            >
              Check out the total payout vs requested amount
            </span>
          </Typography>

          <Grid container spacing={2}>
            <Grid item lg={9} xl={9} md={12} sm={12} xs={12}>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["group A", "group B", "group C"],
                  },
                ]}
                series={[
                  { data: [4, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                width={600}
                height={290}
              />
            </Grid>
            <Grid item lg={3} xl={3} md={12} sm={12} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box
                  sx={{
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    border: `1px solid ${"#00000026"}`,
                    borderRadius: "10px",
                    boxShadow: "0px 1px 6px 0px #0000000F",
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Divider
                      sx={{
                        backgroundColor: "blue",
                        width: "4px",
                        // height: '60px',
                        height: {
                          xl: "60px",
                          lg: "60px",
                          md: "60px",
                          sm: "60px",
                          xs: "60px",
                        },
                      }}
                    />
                    <Box sx={{ zIndex: "2" }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Rs. 897654
                      </Typography>
                      <Typography
                        sx={{
                          color: "silver",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          fontSize: "16px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Total Payout
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    border: `1px solid ${"#00000026"}`,
                    borderRadius: "10px",
                    boxShadow: "0px 1px 6px 0px #0000000F",
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Divider
                      sx={{
                        backgroundColor: "red",
                        width: "4px",
                        // height: '60px',
                        height: {
                          xl: "60px",
                          lg: "60px",
                          md: "60px",
                          sm: "60px",
                          xs: "60px",
                        },
                      }}
                    />
                    <Box sx={{ zIndex: "2" }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Rs. 127647379
                      </Typography>
                      <Typography
                        sx={{
                          color: "silver",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          fontSize: "16px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Delayed Payout
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    border: `1px solid ${"#00000026"}`,
                    borderRadius: "10px",
                    boxShadow: "0px 1px 6px 0px #0000000F",
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Divider
                      sx={{
                        backgroundColor: "purple",
                        width: "4px",
                        // height: '60px',
                        height: {
                          xl: "60px",
                          lg: "60px",
                          md: "60px",
                          sm: "60px",
                          xs: "60px",
                        },
                      }}
                    />
                    <Box sx={{ zIndex: "2" }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Rs. 68884639
                      </Typography>
                      <Typography
                        sx={{
                          color: "silver",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          fontSize: "16px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Other Payout
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: {
              xl: "390px",
              lg: "370px",
              md: "630px",
              sm: "630px",
              xs: "630px",
            },
            border: `1px solid ${"#00000026"}`,
          }}
        >
          <Typography
            color={"black"}
            fontWeight={700}
            sx={{
              fontSize: {
                xl: "24px",
                lg: "16px",
                md: "15px:",
                sm: "15px",
                xs: "15px",
              },
              padding: "10px 40px",
            }}
          >
            Requests <br />
            <span
              style={{ color: "silver", fontSize: "16px", fontWeight: "600" }}
            >
              Check the requested from the employees
            </span>
          </Typography>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.value}%`,
                arcLabelMinAngle: 35,
                arcLabelRadius: "60%",
                ...data,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontWeight: "bold",
              },
            }}
            {...size}
          />
        </Card>
      </Box>
      <Box sx={{ height: 400, width: "99.5%", padding: 2 }}>
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
    </>
  );
}

export default Dashboard;

const CardLogo = styled(Box)(({ theme }) => ({
  width: "45px",
  height: "45px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "10px",
  borderRadius: "50%",
}));
