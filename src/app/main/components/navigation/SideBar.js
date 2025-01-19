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
import BadgeIcon from "@mui/icons-material/Badge";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import QueueIcon from "@mui/icons-material/Queue";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { getSideTab, getNestedSideTab } from "../../../services/api/apiManager";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
function SideBar() {
  const [tabData, setTabData] = React.useState([]);
  const [nestedTabData, setNestedTabData] = React.useState([]);
  const drawerWidth = 250;
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
      text: "ADMIN PANEL",
      icon: <DashboardIcon />,
      to: "/dashboard",
    },
    {
      text: "EMPLOYEES",
      icon: <PeopleAltIcon />,
      to: "/employees",
      children: [
        { text: "REQUESTS IN QUEUE", icon: <QueueIcon />, to: "/queue" },
        {
          text: "APPROVED",
          icon: <AssignmentTurnedInIcon />,
          to: "/underprocess",
        },
      ],
    },
    {
      text: "USERS",
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
      text: "SETTINGS",
      icon: <SettingsIcon />,
      // icon: <HelpOutlineIcon />,
      // to: "/requests",
      children: [{ text: "TABS", icon: <ViewSidebarIcon />, to: "/tabs" }],
    },
    {
      text: "LOGOUT",
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

  const fetchSideTab = async () => {
    try {
      // setLoading(true);
      const response = await getSideTab();
      if (response?.data?.status === 200) {
        console.log(`check response of Sidbar`, response?.data?.result);
        //   setLoading(false);
        setTabData(response?.data?.result);
      }
    } catch (error) {
      // setLoading(true);
    }
  };
  const fetchNestedSideTabs = async (tabName) => {
    try {
      // setLoading(true);
      const response = await getNestedSideTab(tabName);
      if (response?.data?.status === 200) {
        //   setLoading(false);
        setNestedTabData((prev) => ({
          ...prev,
          [tabName]: response?.data?.result,
        }));
      }
    } catch (error) {
      // setLoading(true);
    }
  };
  useEffect(() => {
    fetchSideTab();
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
            {/* Dynamic Tabs */}
            {tabData?.map((tab) => {
              const predefinedTab = menuItems.find(
                (item) => item.text == tab.dbtabs
              );
              return (
                <React.Fragment key={tab?.dbtabid}>
                  <ListItem
                    disablePadding
                    sx={{
                      display: "block",
                      backgroundColor:
                        activeItem == tab?.dbtabs ? "white" : "transparent",
                      "&:hover": {
                        backgroundColor:
                          activeItem == tab?.dbtabs ? "white" : "Tomato",
                      },
                    }}
                    onClick={() => {
                      setActiveItem(tab?.dbtabs);
                      fetchNestedSideTabs(tab?.dbtabs);
                      if (predefinedTab && predefinedTab.to) {
                        navigate(predefinedTab.to);
                      }
                      setExpandedParent(
                        expandedParent === tab.dbtabs ? null : tab.dbtabs
                      );
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
                          color: activeItem == tab?.dbtabs ? "black" : "white",
                        }}
                      >
                        {predefinedTab ? predefinedTab.icon : <LockIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              opacity: open ? 1 : 0,
                              color:
                                activeItem == tab?.dbtabs ? "black" : "#FFFFFF",
                              fontWeight:
                                activeItem == tab?.dbtabs ? "800" : "600",
                            }}
                          >
                            {tab?.dbtabs}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>

                  {open &&
                    expandedParent == tab?.dbtabs &&
                    nestedTabData[tab?.dbtabs] && (
                      <List sx={{ pl: 4 }}>
                        {nestedTabData[tab?.dbtabs]?.map((nestedTab) => {
                          const matchedChild = predefinedTab?.children?.find(
                            (child) => child.text == nestedTab.dbtabs
                          );
                          const isLocked = !matchedChild?.to;
                          return (
                            <ListItem
                              key={nestedTab?.taB_S_CAT}
                              disablePadding
                              sx={{
                                display: "block",
                                backgroundColor:
                                  activeItem == nestedTab.dbtabs
                                    ? "white"
                                    : "transparent",
                                "&:hover": {
                                  backgroundColor:
                                    activeItem == nestedTab.dbtabs
                                      ? "white"
                                      : isLocked
                                      ? "transparent"
                                      : "Tomato",
                                },
                              }}
                              onClick={() => {
                                if (!isLocked) {
                                  setActiveItem(nestedTab?.dbtabs);
                                  setLastActiveItem(nestedTab?.dbtabs);
                                  setActiveParent(nestedTab);
                                  if (matchedChild?.to) {
                                    navigate(matchedChild.to);
                                  }
                                }
                              }}
                            >
                              <ListItemButton
                                sx={{
                                  minHeight: 40,
                                  justifyContent: open ? "initial" : "center",
                                  px: 2.5,
                                  cursor: isLocked ? "not-allowed" : "pointer",
                                }}
                              >
                                <ListItemIcon
                                  sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                    color:
                                      activeItem == nestedTab.dbtabs
                                        ? "black"
                                        : isLocked
                                        ? "gray"
                                        : "white",
                                  }}
                                >
                                  {matchedChild?.icon || <LockIcon />}
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography
                                      sx={{
                                        color:
                                          activeItem == nestedTab.dbtabs
                                            ? "black"
                                            : isLocked
                                            ? "gray"
                                            : "#FFFFFF",
                                        fontWeight:
                                          activeItem == nestedTab.dbtabs
                                            ? "700"
                                            : "600",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {nestedTab?.dbtabs}
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                      </List>
                    )}
                </React.Fragment>
              );
            })}
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
