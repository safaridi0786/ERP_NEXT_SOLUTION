import { Box, Button, Divider, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

function Dashboard() {
  const DashboardBoxes = [
    {
      status: "Total Draft",
      color: "#feab13",
      cardLogoColor: "#E3FFE7",
      //   logo: Draft_logo,
      //   count: visits?.filter((items) => items?.VisitStatus === "D")?.length,
      //   handleClick: handleOpen,
    },
    {
      status: "Total Approved",
      color: "#3EAE4E",
      cardLogoColor: "#E5F0FF",
      //   logo: Approved_logo,
      //   count: visits?.filter((items) => items?.VisitStatus === "A")?.length,
      //   handleClick: handleOpenApproved,
    },
    {
      status: "Total Billed",
      color: "#DB8B44",
      cardLogoColor: "#FFEDDC",
      //   logo: Billed_logo,
      //   count: visits?.filter((items) => items?.VisitStatus === "B").length,
      //   handleClick: handleOpenBilled,
    },
    {
      status: "Total Active",
      color: "green",
      cardLogoColor: "#E3FFE7",
      //   logo: patientDashboard,
      //   count: patientList?.length,
      //   handleClick: handleOpenActivePatients,
    },
    {
      status: "Total Pending",
      color: "#913EAE",
      cardLogoColor: "#F2ECFE",
      //   logo: AllAppointment,
      //   count: appointmentList?.length,
      //   handleClick: handleOpenAppointments,
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

  return (
    <>
      <Box sx={{ p: "10px" }}>
        <Grid container sx={{ gap: "10px" }}>
          {/* Card Visit */}
          <Grid
            container
            // sx={{ display: 'flex', }}
            spacing={1}
          >
            {DashboardBoxes.map((appointment, index) => (
              <Grid item lg={2.4} xl={2.4} md={6} sm={6} xs={12} key={index}>
                <Box
                  sx={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    border: `1px solid ${"#00000026"}`,
                    borderRadius: "10px",
                    // margin: '3px',
                    boxShadow: "0px 1px 6px 0px #0000000F",
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
                          xl: "80px",
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
                          color: "#2E476B",
                          fontWeight: "400",
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
                    <CardLogo sx={{ bgcolor: appointment.cardLogoColor }}>
                      <Box
                        component={"img"}
                        src={appointment.logo}
                        sx={{
                          height: {
                            xl: "30px",
                            lg: "20px",
                            md: "20px",
                            sm: "20px",
                            xs: "20px",
                          },
                          width: {
                            xl: "25px",
                            lg: "15px",
                            md: "15px",
                            sm: "15px",
                            xs: "15px",
                          },
                        }}
                      />
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
          marginTop: "8rem",
          justifyContent: "space-between",
        }}
      >
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
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          width={500}
          height={300}
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
