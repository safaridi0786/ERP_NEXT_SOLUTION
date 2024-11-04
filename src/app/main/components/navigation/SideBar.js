import { Feedback, Settings, Sync } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Toolbar,
  Tooltip,
  Typography,
  Switch,
} from "@mui/material";
import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { ExitToAppRounded as ExitToAppRoundedIcon } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

function SideBar() {
  const drawerWidth = 240;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "white",
    border: " 1px solid #00000026",
    p: 4,
    borderRadius: "10px",
  };
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#0E4374",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#0E4374",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: "#0E4374",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
      backgroundColor: "#0E4374",
    }),
  }));

  // logout button function is here
  const logoutFunc = async () => {
    // const refreshToken = { refresh_token: localStorage.getItem('refreshtoken') };
    // authService.setSession(null);
    // authService.setUser(null);
    // clearTimeout(authService.sessionTimeout);
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('user');
    // localStorage.removeItem('refreshtoken');
    // localStorage.removeItem('loginTime');
    // localStorage.removeItem('practice_id');
    // localStorage.removeItem('userName');
    // localStorage.removeItem('prName');
    // localStorage.removeItem('OSW_id');
    // localStorage.removeItem('OID');
    // const resp = await logout(refreshToken);
    // console.log(resp);
  };

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleCloseEditModal = () => {
    setOpenModal(false);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [anchorElNotifications, setAnchorElNotifications] =
    React.useState(null);

  const [showNotificationSettings, setShowNotificationSettings] =
    React.useState(false);

  const switchToSettings = () => {
    setShowNotificationSettings(true);
  };

  const switchToNotifications = () => {
    setShowNotificationSettings(false);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const handleOpenNotifications = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const closeSidebar = () => {
    if (open === true) {
      setOpen(false);
    }
  };
  const currentlocation = useLocation();
  const [locationName, setLocationName] = React.useState(
    currentlocation.pathname
  );

  const settingLocationName = () => {
    setLocationName(
      currentlocation.pathname.slice(1).charAt(0).toUpperCase() +
        currentlocation.pathname.slice(2).replace(/_/g, " ")
    );
  };

  React.useEffect(() => {
    settingLocationName();
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          sx={{
            boxShadow: "0px 1px 4px 0px #00000040",
            zIndex: 1,
            paddingLeft: "40px",
            background: "white",
          }}
        >
          <Toolbar sx={{ boxShadow: "none" }}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="h2"
                noWrap
                component="div"
                color={"black"}
                fontWeight={600}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "24px",
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

              <Box
                display={{
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
                gap={1}
              >
                <Tooltip title="Switch">
                  <IconButton
                    onClick={() => {
                      navigate("/");
                    }}
                    sx={{ p: 0, mr: 1 }}
                  >
                    <Sync
                      sx={{
                        fontSize: {
                          xl: "24px",
                          lg: "16px",
                          md: "15px:",
                          sm: "15px",
                          xs: "15px",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Notfications">
                  <IconButton
                    size="small"
                    aria-label="show 4 new notfications"
                    color="black"
                    onClick={handleOpenNotifications}
                  >
                    <Badge badgeContent={4} color="error">
                      <CircleNotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNotifications}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNotifications)}
                  onClose={handleCloseNotifications}
                >
                  <Box
                    display={"flex"}
                    fontFamily={"Poppins"}
                    justifyContent={"space-between"}
                    p={1}
                    sx={{ width: "300px" }}
                  >
                    <h5
                      style={
                        !showNotificationSettings
                          ? {
                              color: "#CB6309",
                              fontWeight: 600,
                              cursor: "pointer",
                              fontSize: "14px",
                              borderBottom: "2px solid #CB6309",
                            }
                          : {
                              color: "#AAA0A0",
                              fontWeight: 600,
                              cursor: "pointer",
                              fontSize: "14px",
                            }
                      }
                      onClick={switchToNotifications}
                    >
                      Notfications
                    </h5>
                    <p
                      style={
                        showNotificationSettings
                          ? {
                              color: "#CB6309",
                              fontWeight: 600,
                              cursor: "pointer",
                              fontSize: "12px",
                              borderBottom: "2px solid #CB6309",
                            }
                          : {
                              color: "#AAA0A0",
                              fontWeight: 600,
                              cursor: "pointer",
                              fontSize: "12px",
                            }
                      }
                      onClick={switchToSettings}
                    >
                      Settings
                    </p>
                  </Box>
                  {/* notification menu */}

                  <MenuItem
                    // onClick={handleCloseNotifications}
                    sx={
                      showNotificationSettings
                        ? { display: "none " }
                        : { flexDirection: "column", width: "294px" }
                    }
                  >
                    <Box
                      width={"100%"}
                      height={"40px"}
                      display={"flex"}
                      gap={0.5}
                    >
                      <Box width={"24px"}>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          sx={{
                            width: "24px",
                            height: "24px",
                            backgroundColor: "#D6F5EC",
                            borderRadius: "20px",
                          }}
                        >
                          <img
                            alt="Lock Icon"
                            width={"11.33px"}
                            // src={lockIconPng}
                          />
                        </Box>
                      </Box>

                      <Box
                        width={"166px"}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Typography
                          width={"auto"}
                          fontWeight={600}
                          color={"#393838"}
                          fontSize={"10px"}
                          fontFamily={"Poppins"}
                        >
                          Two-Factor Authentication(2FA)
                        </Typography>

                        <Typography fontSize={"9px"} color={"#4A4949"}>
                          11:49pm-Yesterday
                        </Typography>
                      </Box>

                      <Box width={"62px"}>
                        <Typography
                          fontWeight={400}
                          fontSize={"10px"}
                          fontFamily={"Poppins"}
                          color={"#000000"}
                        >
                          is activated
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    // onClick={handleCloseNotifications}
                    sx={
                      showNotificationSettings
                        ? { display: "none " }
                        : { flexDirection: "column" }
                    }
                  >
                    <Box
                      width={"100%"}
                      height={"40px"}
                      display={"flex"}
                      gap={0.5}
                    >
                      <Box width={"24px"}>
                        <Avatar
                          sx={{ width: "24px", height: "24px" }}
                          alt="Remy Sharp"
                          // src={girlImage}
                        />
                      </Box>

                      <Box
                        width={"69px"}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Typography
                          width={"auto"}
                          fontWeight={600}
                          color={"#393838"}
                          fontSize={"10px"}
                          fontFamily={"Poppins"}
                        >
                          Mellisa Jones
                        </Typography>

                        <Typography
                          fontSize={"9px"}
                          fontFamily={"Poppins"}
                          color={"#4A4949"}
                        >
                          11:49pm-Yesterday
                        </Typography>
                      </Box>

                      <Box width={"146px"}>
                        <Typography
                          ml={0.5}
                          fontWeight={400}
                          fontSize={"11px"}
                          fontFamily={"Poppins"}
                        >
                          done changes in batch#0012
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    // onClick={handleCloseNotifications}
                    sx={
                      showNotificationSettings
                        ? { display: "none " }
                        : { flexDirection: "column" }
                    }
                  >
                    <Box
                      width={"100%"}
                      height={"50px"}
                      display={"flex"}
                      gap={0.5}
                    >
                      <Box width={"24px"}>
                        <Avatar
                          sx={{ width: "24px", height: "24px" }}
                          alt="Remy Sharp"
                          // src={girlImage}
                        />
                      </Box>

                      <Box
                        width={"50px"}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Typography
                          width={"auto"}
                          fontWeight={600}
                          color={"#393838"}
                          fontSize={"10px"}
                          fontFamily={"Poppins"}
                        >
                          Henry Leo
                        </Typography>

                        <Typography
                          fontSize={"9px"}
                          fontFamily={"Poppins"}
                          color={"#4A4949"}
                        >
                          11:49pm-Yesterday
                        </Typography>
                        <Box width={"140px"}>
                          <button className="approvedBtn">Approve</button>

                          <button className="denyBtn">Deny</button>
                        </Box>
                      </Box>

                      <Box width={"146px"}>
                        <Typography
                          ml={0.5}
                          fontWeight={400}
                          fontSize={"11px"}
                          fontFamily={"Poppins"}
                        >
                          wants to update patientid#09865
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    // onClick={handleCloseNotifications}
                    sx={
                      showNotificationSettings
                        ? { display: "none " }
                        : { flexDirection: "column" }
                    }
                  >
                    <Box
                      width={"100%"}
                      height={"40px"}
                      display={"flex"}
                      gap={0.5}
                    >
                      <Box width={"24px"}>
                        <Avatar
                          sx={{ width: "24px", height: "24px" }}
                          alt="Remy Sharp"
                          // src={girlImage}
                        />
                      </Box>

                      <Box
                        width={"69px"}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Typography
                          width={"auto"}
                          fontWeight={600}
                          color={"#393838"}
                          fontSize={"10px"}
                          fontFamily={"Poppins"}
                        >
                          Mellisa Jones
                        </Typography>

                        <Typography
                          fontSize={"9px"}
                          fontFamily={"Poppins"}
                          color={"#4A4949"}
                        >
                          11:49pm-Yesterday
                        </Typography>
                      </Box>

                      <Box width={"146px"}>
                        <Typography
                          ml={0.5}
                          fontWeight={400}
                          fontSize={"11px"}
                          fontFamily={"Poppins"}
                        >
                          done changes in batch#0012
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>

                  {/* Settings Menu */}

                  {showNotificationSettings && (
                    <MenuItem
                    // onClick={handleCloseNotifications}
                    >
                      <Box
                        display={"flex"}
                        width={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          variant="h1"
                          fontWeight={600}
                          fontSize={"10px"}
                          color={"#393838"}
                          fontFamily={"Poppins"}
                        >
                          Enable all notifications
                        </Typography>

                        <Switch size="small" name="enableNotifications" />
                      </Box>
                    </MenuItem>
                  )}
                  {showNotificationSettings && (
                    <MenuItem>
                      <Box
                        display={"flex"}
                        width={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          variant="h1"
                          fontWeight={600}
                          fontSize={"10px"}
                          color={"#393838"}
                          fontFamily={"Poppins"}
                        >
                          Custom Settings
                        </Typography>
                        <Box display={"flex"} gap={2}>
                          <Typography
                            fontWeight={400}
                            color={"#075AD7"}
                            variant="body2"
                            fontSize={"10px"}
                            fontFamily={"Poppins"}
                          >
                            Enable
                          </Typography>
                          <Typography
                            fontWeight={400}
                            color={"#075AD7"}
                            variant="body2"
                            fontSize={"10px"}
                            fontFamily={"Poppins"}
                          >
                            Disable
                          </Typography>
                        </Box>
                      </Box>
                    </MenuItem>
                  )}

                  {showNotificationSettings && (
                    <MenuItem>
                      <Box
                        mt={1}
                        display={"flex"}
                        width={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          variant="h1"
                          fontWeight={400}
                          fontSize={"10px"}
                          color={"#000000"}
                          fontFamily={"Poppins"}
                        >
                          New Message Sound
                        </Typography>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="newMsgSoung"
                            defaultValue="enable"
                            name="newMsgSoung"
                          >
                            <Box width={"72px"}>
                              <FormControlLabel
                                value="enable"
                                control={<Radio size="small" />}
                                id="enableMsgSoundRadioBtn"
                              />
                              <FormControlLabel
                                value="disable"
                                control={<Radio size="small" />}
                              />
                            </Box>
                          </RadioGroup>
                        </FormControl>
                      </Box>
                    </MenuItem>
                  )}
                  {showNotificationSettings && (
                    <MenuItem>
                      <Box
                        mt={1}
                        display={"flex"}
                        width={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          variant="h1"
                          fontWeight={400}
                          fontSize={"10px"}
                          color={"#000000"}
                          fontFamily={"Poppins"}
                        >
                          New Notification Sound
                        </Typography>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="newNotificationSound"
                            defaultValue="enable"
                            name="newNotificationSound"
                          >
                            <Box width={"72px"}>
                              <FormControlLabel
                                value="enable"
                                control={<Radio size="small" />}
                              />
                              <FormControlLabel
                                value="disable"
                                control={<Radio size="small" />}
                              />
                            </Box>
                          </RadioGroup>
                        </FormControl>
                      </Box>
                    </MenuItem>
                  )}
                </Menu>

                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "30px",
                  }}
                  onClick={handleOpenUserMenu}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: "5px 10px" }}>
                      <Typography
                        sx={{
                          fontSize: {
                            xl: "15px",
                            lg: "11px",
                            md: "10px:",
                            sm: "10px",
                            xs: "10px",
                          },
                        }}
                        fontWeight="bold"
                        fontFamily={"Poppins"}
                        color={"#000000"}
                      >
                        Admin
                      </Typography>
                      <Typography
                        fontSize={"10px"}
                        fontFamily={"Poppins"}
                        color={"#000000"}
                        textAlign={"center"}
                      >
                        ERP_System
                      </Typography>
                    </Box>
                    <Tooltip title="Profile">
                      <IconButton sx={{ p: 0, mr: 2 }}>
                        <AccountCircleIcon
                          fontSize="medium"
                          sx={{ color: "#0E4374" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    sx={{ flexDirection: "column" }}
                    // onClick={handleEditProvider}
                  >
                    <Box
                      width={"100%"}
                      gap={1}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Feedback fontSize="10px" />
                      <Typography
                        width={"60%"}
                        textAlign={"start"}
                        color={"#404040"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >
                        Feedback
                      </Typography>
                    </Box>
                  </MenuItem>
                  <Modal
                    open={openModal}
                    onClose={handleCloseEditModal}
                    aria-labelledby="edit-modal-title"
                    aria-describedby="edit-modal-description"
                    sx={{
                      "& .MuiModal-backdrop": {
                        opacity: "30 !important",
                      },
                    }}
                  >
                    <Box sx={{ style }}>FeedBack</Box>
                  </Modal>

                  <MenuItem
                    sx={{ flexDirection: "column" }}
                    onClick={() => {
                      logoutFunc();
                      navigate("/");
                    }}
                  >
                    <Box
                      width={"100%"}
                      gap={1}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box>
                        <LogoutIcon />
                      </Box>
                      <Typography
                        width={"60%"}
                        textAlign={"start"}
                        color={"#404040"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >
                        Logout
                      </Typography>
                    </Box>
                  </MenuItem>
                </Menu>
              </Box>
              {/* Menu Icon for XS and SM screens */}
              <Box
                display={{
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                }}
              >
                <IconButton
                  // onClick={handleOpenUserMenu}
                  sx={{ p: 0, ml: "auto" }}
                >
                  {/* Your Menu Icon  */}
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{ position: "fixed", zIndex: 99 }}
          onMouseEnter={handleDrawerOpen}
          open={open}
        >
          <DrawerHeader
            sx={{
              cursor: "pointer",
              boxShadow: "0px 1px 4px 0px #00000040",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {open === false || open === null ? (
              <IconButton
                color="black"
                aria-label="open drawer"
                onMouseEnter={handleDrawerOpen}
                edge="center"
                sx={{
                  display: "flex",
                  backgroundColor: "#0E4374",
                  borderRadius: "0",
                }}
              >
                <Typography
                  sx={{
                    color: "#0E4374",
                    fontWeight: "800",
                    fontSize: "32px",
                    textShadow:
                      "2px 2px 5px rgba(0, 0, 0, 0.3), 4px 4px 10px rgba(0, 0, 0, 0.2)",
                    background:
                      "linear-gradient(135deg, #0E4374, #4285F4)" /* Gradient effect */,
                    WebkitBackgroundClip: "text" /* For gradient text color */,
                    WebkitTextFillColor:
                      "white" /* Ensure text is filled by the gradient */,

                    transform:
                      "perspective(500px) rotateX(10deg) rotateY(5deg)" /* 3D perspective */,
                    letterSpacing: "2px" /* Stylish letter spacing */,
                    display: "inline-block",
                  }}
                >
                  G
                </Typography>
              </IconButton>
            ) : (
              <IconButton
                color="black"
                aria-label="open drawer"
                onMouseEnter={handleDrawerOpen}
                sx={{
                  display: "flex",
                  borderRadius: "0",
                  backgroundColor: "#0E4374",
                }}
              >
                <Typography
                  sx={{
                    color: "#0E4374",
                    fontWeight: "800",
                    fontSize: "28px",
                    textShadow:
                      "2px 2px 5px rgba(0, 0, 0, 0.3), 4px 4px 10px rgba(0, 0, 0, 0.2)" /* 3D shadow effect */,
                    background:
                      "linear-gradient(135deg, #0E4374, #4285F4)" /* Gradient effect */,
                    WebkitBackgroundClip: "text" /* For gradient text color */,
                    WebkitTextFillColor:
                      "white" /* Ensure text is filled by the gradient */,

                    transform:
                      "perspective(500px) rotateX(10deg) rotateY(5deg)" /* 3D perspective */,
                    letterSpacing: "2px" /* Stylish letter spacing */,
                    display: "inline-block",
                  }}
                >
                  GINFOTECH
                </Typography>
              </IconButton>
            )}
          </DrawerHeader>
          <List onMouseEnter={handleDrawerOpen}>
            {["Dashboard"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <NavLink
                  to={text === "User" ? "/user" : "dashboard"}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "darksListItemsLinkTextsSelected"
                        : "darksListItemsLinkTexts"
                    }`
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <DashboardIcon
                        style={{ display: "flex", color: "#fff" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "#FFFFFF",
                      }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List onMouseEnter={handleDrawerOpen}>
            {["Settings"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <NavLink
                  to={text === "User" ? "/user" : "settings"}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "darksListItemsLinkTextsSelected"
                        : "darksListItemsLinkTexts"
                    }`
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Settings style={{ display: "flex", color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "#FFFFFF",
                      }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <List onMouseEnter={handleDrawerOpen}>
            {["Logout"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  logoutFunc();
                  navigate("/");
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ExitToAppRoundedIcon
                      style={{
                        display: "flex",
                        color: "white",
                        width: "21.33px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: "#FFFFFF",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, paddingLeft: "70px", zIndex: 0 }}
          onMouseEnter={closeSidebar}
        >
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
