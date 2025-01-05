import { Sync } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Badge,
  Box,
  Button,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { ExitToAppRounded as ExitToAppRoundedIcon } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LockIcon from "@mui/icons-material/Lock";
// import ApprovalIcon from "@mui/icons-material/Approval";
// import ReportIcon from "@mui/icons-material/Report";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BadgeIcon from "@mui/icons-material/Badge";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import QueueIcon from "@mui/icons-material/Queue";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { getSideTab } from "../../../services/api/apiManager";

function SideBar() {
  const [tabData, setTabData] = React.useState([]);
  const drawerWidth = 240;
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
  const [activeItem, setActiveItem] = React.useState("Dashboard");
  const [activeParent, setActiveParent] = React.useState(null);
  const [lastActiveItem, setLastActiveItem] = React.useState(null);
  const [expandedParent, setExpandedParent] = React.useState(null);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      to: "/dashboard",
    },
    {
      text: "Employees",
      icon: <PeopleAltIcon />,
      to: "/employees",
      children: [
        { text: "Queue", icon: <QueueIcon />, to: "/queue" },
        {
          text: "Underprocess",
          icon: <AssignmentTurnedInIcon />,
          to: "/underprocess",
        },
      ],
    },
    {
      text: "Users",
      icon: <BadgeIcon />,
      to: "/userPage",
    },
    {
      text: "Approval",
      icon: <LockIcon />,
    },
    {
      text: "Reports",
      icon: <LockIcon />,
      // icon: <ReportIcon />,
      // to: "/reports",
    },
    {
      text: "Loans",
      icon: <LockIcon />,
      // icon: <CreditCardIcon />,
      // to: "/loans",
    },
    {
      text: "Invoices",
      icon: <LockIcon />,
      // icon: <ReceiptIcon />,
      // to: "/invoices",
    },
    {
      text: "Requests",
      icon: <LockIcon />,
      // icon: <HelpOutlineIcon />,
      // to: "/requests",
    },
    {
      text: "Logout",
      icon: <ExitToAppRoundedIcon />,
      action: () => {
        logoutFunc();
        navigate("/");
      },
    },
  ];
  const [open, setOpen] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
    if (lastActiveItem) {
      setActiveItem(lastActiveItem);
    }
  };
  const closeSidebar = () => {
    if (open === true) {
      setOpen(false);
      if (activeParent) {
        setActiveItem(activeParent);
      }
    }
  };

  // UseEffect here

  const fetchEmployeeData = async () => {
    try {
      // setLoading(true);
      const response = await getSideTab();
      if (response?.status === 200) {
        // console.log(`check response of Sidbar`, response?.data?.result);
        //   setLoading(false);
        setTabData(response?.data?.result);
      }
    } catch (error) {
      // setLoading(true);
    }
  };
  useEffect(() => {
    fetchEmployeeData();
  }, []);
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  padding: "2px 0px",
                }}
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
                  Welcome, GINFOTECH!
                </Typography>
                <Typography
                  color={"silver"}
                  fontWeight={600}
                  sx={{
                    marginLeft: "24px",
                    fontSize: {
                      xl: "14px",
                      lg: "14px",
                      md: "14px:",
                      sm: "14px",
                      xs: "14px",
                    },
                  }}
                >
                  08 March, 2025
                </Typography>
              </Box>

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
                <Tooltip title="Upgrade System">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        height: "60%",
                        backgroundColor: "orange",
                        "&:hover": {
                          backgroundColor: "darkorange",
                        },
                      }}
                    >
                      <ManageHistoryIcon
                        sx={{ color: "white", fontSize: "18px" }}
                      />
                      <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                        Upgrade Now
                      </Typography>
                    </Button>
                  </Box>
                </Tooltip>
                <Tooltip title="settings">
                  <IconButton size="small" aria-label="settings" color="black">
                    <SettingsIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Notifications">
                  <IconButton
                    size="small"
                    aria-label="show 4 new notifications"
                    color="default"
                  >
                    <Badge badgeContent={4} color="error">
                      <CircleNotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "30px",
                  }}
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
                <IconButton sx={{ p: 0, ml: "auto" }}>
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
                    background: "linear-gradient(135deg, #0E4374, #4285F4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "white",
                    transform:
                      "perspective(500px) rotateX(10deg) rotateY(5deg)",
                    letterSpacing: "2px",
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
                      "2px 2px 5px rgba(0, 0, 0, 0.3), 4px 4px 10px rgba(0, 0, 0, 0.2)",
                    background: "linear-gradient(135deg, #0E4374, #4285F4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "white",
                    transform:
                      "perspective(500px) rotateX(10deg) rotateY(5deg)",
                    letterSpacing: "2px",
                    display: "inline-block",
                  }}
                >
                  GINFOTECH
                </Typography>
              </IconButton>
            )}
          </DrawerHeader>

          <List onMouseEnter={handleDrawerOpen}>
            {menuItems?.map(({ text, icon, to, action, children }) => (
              <React.Fragment key={text}>
                {/* Parent Item */}
                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                    backgroundColor:
                      activeItem === text ? "white" : "transparent",
                    "&:hover": {
                      backgroundColor: activeItem === text ? "white" : "Tomato",
                    },
                  }}
                  onClick={() => {
                    if (action) action();
                    else {
                      setActiveItem(text);
                      setActiveParent(null);
                      setLastActiveItem(null);
                      setExpandedParent(expandedParent === text ? null : text);
                    }
                  }}
                >
                  <NavLink to={to || "#"}>
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
                          color: activeItem === text ? "black" : "white",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              opacity: open ? 1 : 0,
                              color: activeItem === text ? "black" : "#FFFFFF",
                              fontWeight: activeItem === text ? "800" : "600",
                            }}
                          >
                            {text}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </NavLink>
                </ListItem>

                {/* Render Nested Items */}
                {open && expandedParent === text && children && (
                  <List sx={{ pl: 4 }}>
                    {children.map((child) => (
                      <ListItem
                        key={child.text}
                        disablePadding
                        sx={{
                          display: "block",
                          backgroundColor:
                            activeItem === child.text ? "white" : "transparent",
                          "&:hover": {
                            backgroundColor:
                              activeItem === child.text ? "white" : "Tomato",
                          },
                        }}
                        onClick={() => {
                          setActiveItem(child.text);
                          setLastActiveItem(child.text);
                          setActiveParent(text);
                        }}
                      >
                        <NavLink to={child.to}>
                          <ListItemButton
                            sx={{
                              minHeight: 40,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                                color:
                                  activeItem === child.text ? "black" : "white",
                              }}
                            >
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  sx={{
                                    color:
                                      activeItem === child.text
                                        ? "black"
                                        : "#FFFFFF",
                                    fontWeight:
                                      activeItem === child.text ? "700" : "500",
                                  }}
                                >
                                  {child.text}
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </NavLink>
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
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
