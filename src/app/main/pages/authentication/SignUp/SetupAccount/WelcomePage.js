import {
  Box,
  Button,
  Checkbox,
  createTheme,
  FormControl,
  FormHelperText,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import login from "../../../../../../assets/images/loginbg.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const timeZones = [
  { label: "Pacific/Midway (Samoa)", value: "Pacific/Midway" },
  { label: "Pacific/Honolulu (USA - Hawaii)", value: "Pacific/Honolulu" },
  { label: "America/Anchorage (USA - Alaska)", value: "America/Anchorage" },
  {
    label: "America/Los_Angeles (USA - Pacific Time)",
    value: "America/Los_Angeles",
  },
  { label: "America/Denver (USA - Mountain Time)", value: "America/Denver" },
  { label: "America/Chicago (USA - Central Time)", value: "America/Chicago" },
  { label: "America/New_York (USA - Eastern Time)", value: "America/New_York" },
  { label: "America/Sao_Paulo (Brazil)", value: "America/Sao_Paulo" },
  { label: "Europe/London (UK)", value: "Europe/London" },
  { label: "Europe/Paris (France)", value: "Europe/Paris" },
  { label: "Europe/Berlin (Germany)", value: "Europe/Berlin" },
  { label: "Europe/Moscow (Russia)", value: "Europe/Moscow" },
  { label: "Africa/Cairo (Egypt)", value: "Africa/Cairo" },
  { label: "Africa/Johannesburg (South Africa)", value: "Africa/Johannesburg" },
  { label: "Africa/Lagos (Nigeria)", value: "Africa/Lagos" },
  { label: "Asia/Dubai (UAE)", value: "Asia/Dubai" },
  { label: "Asia/Kolkata (India)", value: "Asia/Kolkata" },
  { label: "Asia/Shanghai (China)", value: "Asia/Shanghai" },
  { label: "Asia/Tokyo (Japan)", value: "Asia/Tokyo" },
  { label: "Asia/Singapore (Singapore)", value: "Asia/Singapore" },
  { label: "Asia/Bangkok (Thailand)", value: "Asia/Bangkok" },
  { label: "Asia/Hong_Kong (Hong Kong)", value: "Asia/Hong_Kong" },
  { label: "Asia/Jakarta (Indonesia)", value: "Asia/Jakarta" },
  { label: "Australia/Sydney (Australia)", value: "Australia/Sydney" },
  { label: "Australia/Perth (Australia)", value: "Australia/Perth" },
  { label: "Pacific/Auckland (New Zealand)", value: "Pacific/Auckland" },
  { label: "Pacific/Fiji (Fiji)", value: "Pacific/Fiji" },
  { label: "Pacific/Guam (Guam)", value: "Pacific/Guam" },
  {
    label: "America/Argentina/Buenos_Aires (Argentina)",
    value: "America/Argentina/Buenos_Aires",
  },
  { label: "America/Caracas (Venezuela)", value: "America/Caracas" },
  { label: "America/Bogota (Colombia)", value: "America/Bogota" },
  { label: "America/Mexico_City (Mexico)", value: "America/Mexico_City" },
  { label: "America/Toronto (Canada)", value: "America/Toronto" },
  { label: "America/Vancouver (Canada)", value: "America/Vancouver" },
  { label: "America/Havana (Cuba)", value: "America/Havana" },
  { label: "Europe/Madrid (Spain)", value: "Europe/Madrid" },
  { label: "Europe/Rome (Italy)", value: "Europe/Rome" },
  { label: "Europe/Amsterdam (Netherlands)", value: "Europe/Amsterdam" },
  { label: "Europe/Warsaw (Poland)", value: "Europe/Warsaw" },
  { label: "Europe/Athens (Greece)", value: "Europe/Athens" },
  { label: "Europe/Zurich (Switzerland)", value: "Europe/Zurich" },
  { label: "Asia/Seoul (South Korea)", value: "Asia/Seoul" },
  { label: "Asia/Manila (Philippines)", value: "Asia/Manila" },
  { label: "Asia/Kuala_Lumpur (Malaysia)", value: "Asia/Kuala_Lumpur" },
  { label: "Asia/Colombo (Sri Lanka)", value: "Asia/Colombo" },
  { label: "Asia/Kathmandu (Nepal)", value: "Asia/Kathmandu" },
  { label: "Asia/Karachi (Pakistan)", value: "Asia/Karachi" },
  { label: "Asia/Dhaka (Bangladesh)", value: "Asia/Dhaka" },
  { label: "Asia/Yangon (Myanmar)", value: "Asia/Yangon" },
  {
    label: "Pacific/Port_Moresby (Papua New Guinea)",
    value: "Pacific/Port_Moresby",
  },
  { label: "Pacific/Tahiti (French Polynesia)", value: "Pacific/Tahiti" },
];

const currencies = [
  { label: "United States Dollar (USD)", value: "USD" },
  { label: "Euro (EUR)", value: "EUR" },
  { label: "Japanese Yen (JPY)", value: "JPY" },
  { label: "British Pound (GBP)", value: "GBP" },
  { label: "Australian Dollar (AUD)", value: "AUD" },
  { label: "Canadian Dollar (CAD)", value: "CAD" },
  { label: "Swiss Franc (CHF)", value: "CHF" },
  { label: "Chinese Yuan (CNY)", value: "CNY" },
  { label: "Swedish Krona (SEK)", value: "SEK" },
  { label: "New Zealand Dollar (NZD)", value: "NZD" },
  { label: "Mexican Peso (MXN)", value: "MXN" },
  { label: "Singapore Dollar (SGD)", value: "SGD" },
  { label: "Hong Kong Dollar (HKD)", value: "HKD" },
  { label: "Norwegian Krone (NOK)", value: "NOK" },
  { label: "South Korean Won (KRW)", value: "KRW" },
  { label: "Turkish Lira (TRY)", value: "TRY" },
  { label: "Russian Ruble (RUB)", value: "RUB" },
  { label: "Indian Rupee (INR)", value: "INR" },
  { label: "Brazilian Real (BRL)", value: "BRL" },
  { label: "South African Rand (ZAR)", value: "ZAR" },
  { label: "Philippine Peso (PHP)", value: "PHP" },
  { label: "Malaysian Ringgit (MYR)", value: "MYR" },
  { label: "Thai Baht (THB)", value: "THB" },
  { label: "Indonesian Rupiah (IDR)", value: "IDR" },
  { label: "Pakistani Rupee (PKR)", value: "PKR" },
  { label: "Bangladeshi Taka (BDT)", value: "BDT" },
  { label: "Vietnamese Dong (VND)", value: "VND" },
  { label: "Egyptian Pound (EGP)", value: "EGP" },
  { label: "Argentine Peso (ARS)", value: "ARS" },
  { label: "Chilean Peso (CLP)", value: "CLP" },
  { label: "Colombian Peso (COP)", value: "COP" },
  { label: "Peruvian Sol (PEN)", value: "PEN" },
  { label: "Saudi Riyal (SAR)", value: "SAR" },
  { label: "United Arab Emirates Dirham (AED)", value: "AED" },
  { label: "Kuwaiti Dinar (KWD)", value: "KWD" },
  { label: "Qatari Riyal (QAR)", value: "QAR" },
  { label: "Bahraini Dinar (BHD)", value: "BHD" },
  { label: "Omani Rial (OMR)", value: "OMR" },
  { label: "Nigerian Naira (NGN)", value: "NGN" },
  { label: "Kenyan Shilling (KES)", value: "KES" },
  { label: "Ghanaian Cedi (GHS)", value: "GHS" },
  { label: "Tanzanian Shilling (TZS)", value: "TZS" },
  { label: "Ugandan Shilling (UGX)", value: "UGX" },
  { label: "Zambian Kwacha (ZMW)", value: "ZMW" },
  { label: "Zimbabwean Dollar (ZWL)", value: "ZWL" },
  // Add more as needed
];

const steps = ["1", "2", "3"];

function WelcomePage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [timeZone, setTimeZone] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [strength, setStrength] = React.useState("");
  const [date, setDate] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const handleDate = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Remove non-digit characters

    // Format the input to DD/MM/YYYY as user types
    let formattedDate = "";
    if (value.length >= 1) {
      formattedDate += value.substring(0, 2); // Day
    }
    if (value.length >= 3) {
      formattedDate += "/" + value.substring(2, 4); // Month
    }
    if (value.length >= 5) {
      formattedDate += "/" + value.substring(4, 8); // Year
    }

    setDate(formattedDate);
  };

  const evaluatePasswordStrength = (pass) => {
    if (pass.length < 6) {
      setStrength("Poor");
    } else if (pass.length < 10) {
      setStrength("Average");
    } else {
      setStrength("Excellent");
    }
  };

  const getColor = () => {
    switch (strength) {
      case "Excellent":
        return "green";
      case "Average":
        return "orange";
      case "Poor":
        return "red";
      default:
        return "inherit";
    }
  };

  const getProgressValue = () => {
    switch (strength) {
      case "Excellent":
        return 100;
      case "Average":
        return 50;
      case "Poor":
        return 25;
      default:
        return 0;
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  // Prevent default action on mouse down
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleTimeZone = (event) => {
    setTimeZone(event.target.value);
  };

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step>
                  <StepLabel></StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <hr style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }} />
              <Box
                sx={{
                  height: "50vh",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Setting up your system
                </Typography>
                <LinearProgress
                  variant="determinate"
                  //   value={}
                  sx={{
                    height: 10,
                    width: "100%",
                    marginTop: "1rem",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: getColor(),
                    },
                  }}
                />
                <Typography
                  sx={{ marginTop: "1rem", color: "silver", fontWeight: "550" }}
                >
                  Setting up company
                </Typography>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <hr style={{ marginTop: "1.5rem", marginBottom: "1rem" }} />
              {/* Render different boxes based on the current active step */}
              {activeStep === 0 && (
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Welcome
                  </Typography>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Your Language{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <TextField
                        // value={userName}
                        // onChange={(e) => {
                        //   setUserName(e.target.value);
                        // }}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter Your Language"
                      />
                    </ThemeProvider>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Your Country{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <TextField
                        // value={userName}
                        // onChange={(e) => {
                        //   setUserName(e.target.value);
                        // }}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter Your Country"
                      />
                    </ThemeProvider>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Time Zone{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>

                    <FormControl
                      fullWidth
                      size="small"
                      style={{
                        backgroundColor: "#f6f7fb",
                        textAlign: "left",
                      }}
                    >
                      <Select value={timeZone} onChange={handleTimeZone}>
                        {timeZones.map((zone, index) => (
                          <MenuItem key={index} value={zone.value}>
                            {zone.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Currency{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>

                    <FormControl
                      fullWidth
                      size="small"
                      style={{
                        backgroundColor: "#f6f7fb",
                        textAlign: "left",
                      }}
                    >
                      <Select value={currency} onChange={handleCurrency}>
                        {currencies.map((currency, index) => (
                          <MenuItem key={index} value={currency.value}>
                            {currency.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
                    <Checkbox style={{ color: "#0E4374" }} />
                    <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                      Allow sending usage data for improving applications.
                    </Typography>
                  </Box>
                </Box>
              )}
              {activeStep === 1 && (
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Let's set up your account
                  </Typography>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Full Name{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <TextField
                        // value={userName}
                        // onChange={(e) => {
                        //   setUserName(e.target.value);
                        // }}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter Your Full Name"
                      />
                    </ThemeProvider>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Email Address{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <TextField
                        // value={userName}
                        // onChange={(e) => {
                        //   setUserName(e.target.value);
                        // }}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter Your Email"
                      />
                    </ThemeProvider>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Password{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <Box style={{ position: "relative" }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "right",
                            gap: 1,
                          }}
                        >
                          <FormHelperText
                            style={{ color: getColor(), marginTop: "-2px" }}
                          >
                            {strength ? strength : ""}
                          </FormHelperText>
                          {strength && (
                            <LinearProgress
                              variant="determinate"
                              value={getProgressValue()}
                              sx={{
                                height: 10,
                                width: "30%",
                                borderRadius: "5px",
                                backgroundColor: "lightgrey",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: getColor(),
                                },
                              }}
                            />
                          )}
                        </Box>

                        <TextField
                          value={userPassword}
                          onChange={(e) => {
                            setUserPassword(e.target.value);
                            evaluatePasswordStrength(e.target.value);
                          }}
                          variant="outlined"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: getColor(),
                              },
                              "& fieldset": {
                                borderColor: getColor(),
                              },
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <RemoveRedEyeIcon
                                  className="icons-width"
                                  style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    display: showPassword ? "block" : "none",
                                  }}
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                />

                                <VisibilityOffIcon
                                  className="icons-width"
                                  style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    display: showPassword ? "none" : "block",
                                  }}
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </ThemeProvider>
                  </Box>
                </Box>
              )}
              {activeStep === 2 && (
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Setup your organization
                  </Typography>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Company Name{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <TextField
                        // value={userName}
                        // onChange={(e) => {
                        //   setUserName(e.target.value);
                        // }}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter Your Company Name"
                      />
                    </ThemeProvider>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Company Abbrevation{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <TextField
                        // value={userName}
                        // onChange={(e) => {
                        //   setUserName(e.target.value);
                        // }}
                        variant="outlined"
                        fullWidth
                        placeholder=""
                      />
                    </ThemeProvider>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Charts of Accounts{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>

                    <FormControl
                      fullWidth
                      size="small"
                      style={{
                        backgroundColor: "#f6f7fb",
                        textAlign: "left",
                      }}
                    >
                      <Select
                      //   value={timeZone} onChange={handleTimeZone}
                      >
                        <MenuItem>Standard</MenuItem>
                        <MenuItem>Medium</MenuItem>
                        <MenuItem>High</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box pt={0.5}>
                    <Typography
                      style={{
                        float: "left",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      pb={1}
                    >
                      Financial Year Begins On{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        *
                      </span>
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <TextField
                        value={date}
                        onChange={handleDate}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter Date (DD/MM/YYYY)"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarMonthIcon sx={{ color: "#0E4374" }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </ThemeProvider>
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
                    <Checkbox
                      style={{ color: "#0E4374" }}
                      value={checked}
                      onChange={() => {
                        if (!checked) {
                          setChecked(true);
                        } else {
                          setChecked(false);
                        }
                      }}
                    />
                    <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                      Generate Demo Data for Exploration
                    </Typography>
                  </Box>
                  {checked === true && (
                    <Box
                      sx={{
                        textAlign: "left",
                        padding: "0px 15px",
                        fontWeight: "600",
                      }}
                    >
                      If Checked, we will create deomo data for you to explore
                      the system. This demo data can be erased later.
                    </Box>
                  )}
                </Box>
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    backgroundColor: "#0E4374",
                    borderRadius: "10px",
                    fontWeight: "500",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0E4374",
                    borderRadius: "10px",
                    fontWeight: "500",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Box>
    </>
  );
}

export default WelcomePage;

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
