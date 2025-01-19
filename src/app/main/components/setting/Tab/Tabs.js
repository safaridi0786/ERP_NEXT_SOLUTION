import {
  Box,
  IconButton,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  Grid,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  getNestedSideTab,
  getSideTab,
  fetchAddMainTabNameAPI,
  fetchAddSubTabNameAPI,
} from "../../../../services/api/apiManager";
import "./Tabs.css";

function Tabs() {
  const [tabData, setTabData] = React.useState([]);
  const [nestedTabData, setNestedTabData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [activeTabName, setActiveTabName] = React.useState("");
  const [mainTabName, setMainTabName] = React.useState("");
  const [subTabName, setSubTabName] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [showMainTab, setShowMainTab] = React.useState(false);
  const [showSubTab, setShowSubTab] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleAddTabName = async (
    mainTabName,
    subTabName,
    remarks,
    activeTabName
  ) => {
    setLoading(true);
    try {
      if (mainTabName !== "" && remarks !== "") {
        const response = await fetchAddMainTabNameAPI(mainTabName, remarks);
        if (response?.data?.status === 200) {
          fetchSideTab();
          setMainTabName("");
          setRemarks("");
          setLoading(false);
        }
      } else if (activeTabName !== "" && subTabName !== "" && remarks !== "") {
        const formData = new FormData();
        formData.append("MainName", activeTabName);
        formData.append("SubTabName", subTabName);
        formData.append("Remarks", remarks);
        const response = await fetchAddSubTabNameAPI(formData);
        if (response?.data?.status === 200) {
          console.log(`check response of subTab-->>`, response);
          fetchSideTab();
          setMainTabName("");
          setSubTabName("");
          setRemarks("");
          setLoading(false);
        }
      }
    } catch (error) {
      console.error(`Error`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = (dbtabid) => {
    setShowSubTab(false);
    setShowMainTab(false);
    if (activeTabName == dbtabid) {
      setActiveTabName("");
      setNestedTabData({});
    } else {
      setActiveTabName(dbtabid);
      fetchSubTabs(dbtabid);
    }
  };

  // Filtered data based on search term
  const filteredTabs = tabData.filter((tab) =>
    tab?.dbtabs?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // API functions is here

  const fetchSideTab = async () => {
    try {
      setLoading(true);
      const response = await getSideTab();
      if (response?.data?.status === 200) {
        setTabData(response?.data?.result);
      }
    } catch (error) {
      console.error("Error fetching side tabs", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchSubTabs = async (tabName) => {
    try {
      setLoading(true);
      const response = await getNestedSideTab(tabName);
      if (response?.data?.status === 200) {
        setNestedTabData(response?.data?.result || []);
      }
    } catch (error) {
      console.error("Error fetching nested tabs", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSideTab();
  }, []);
  return (
    <>
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Grid container>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <TextField
              fullWidth
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
              placeholder="Search Tab Name"
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
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ color: "black", fontSize: "16px", fontWeight: "800" }}
              >
                Tabs
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  if (!showMainTab) {
                    setShowMainTab(true);
                    setShowSubTab(false);
                    setMainTabName("");
                    setRemarks("");
                  } else {
                    setShowMainTab(false);
                    setMainTabName("");
                    setRemarks("");
                  }
                }}
                sx={{
                  gap: 1,
                  backgroundColor: "#0E4374",
                  color: "white",

                  "&:hover": {
                    backgroundColor: "#0E4374",
                  },
                }}
              >
                <AddCircleIcon /> Add Main Tab
              </Button>
            </Box>
            <Box className="table-container">
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{ display: "flex", margin: "auto" }}
                />
              ) : filteredTabs?.length > 0 ? (
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Main Tab Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTabs?.map((i) => (
                      <React.Fragment key={i?.dbtabid}>
                        {/* Main Tab Row */}
                        <tr
                          onClick={() => handleRowClick(i?.dbtabs)}
                          style={{ cursor: "pointer" }}
                        >
                          <td>{i?.dbtabid}</td>
                          <td>{i?.dbtabs}</td>
                          <td>
                            <Tooltip title="Edit">
                              <IconButton color="primary" size="small">
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
                              <IconButton color="error" size="small">
                                <DeleteIcon
                                  sx={{
                                    color: "red",
                                    cursor: "pointer",
                                    fontSize: "24px",
                                  }}
                                />
                              </IconButton>
                            </Tooltip>
                          </td>
                        </tr>
                        {/* Sub Tabs Rows */}
                        {activeTabName == i?.dbtabs && (
                          <>
                            {/* Sub Tabs Header and Add Button */}
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 2,
                                alignItems: "center",
                                margin: 1,
                                width: "100%",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "black",
                                  fontSize: "16px",
                                  fontWeight: "800",
                                }}
                              >
                                {i?.dbtabs} SUB TABS
                              </Typography>
                              <Button
                                variant="contained"
                                onClick={() => {
                                  if (!showSubTab) {
                                    setShowSubTab(true);
                                    setShowMainTab(false);
                                    setMainTabName("");
                                    setSubTabName("");
                                    setRemarks("");
                                  } else {
                                    setShowSubTab(false);
                                    setMainTabName("");
                                    setSubTabName("");
                                    setRemarks("");
                                  }
                                }}
                                sx={{
                                  gap: 1,
                                  backgroundColor: "#0E4374",
                                  color: "white",
                                  "&:hover": {
                                    backgroundColor: "#0E4374",
                                  },
                                }}
                              >
                                <AddCircleIcon /> Add
                              </Button>
                            </Box>

                            {/* Sub Tabs List */}
                            {Array.isArray(nestedTabData) &&
                              nestedTabData?.length > 0 &&
                              nestedTabData.map((subTab) => (
                                <tr key={subTab?.dbtabs}>
                                  <td colSpan="2">{subTab?.dbtabs}</td>
                                  <td colSpan="2">
                                    <Tooltip title="Edit">
                                      <IconButton color="primary" size="small">
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
                                      <IconButton color="error" size="small">
                                        <DeleteIcon
                                          sx={{
                                            color: "red",
                                            cursor: "pointer",
                                            fontSize: "24px",
                                          }}
                                        />
                                      </IconButton>
                                    </Tooltip>
                                  </td>
                                </tr>
                              ))}
                            <br />
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    color: "gray",
                    marginTop: 2,
                  }}
                >
                  No records found
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            {(showMainTab || showSubTab) === true && (
              <>
                <Typography
                  sx={{ color: "black", fontSize: "16px", fontWeight: "800" }}
                >
                  {showMainTab === true ? "Add Main Tab" : "Add Sub Tab"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 2,
                    p: 1,
                  }}
                >
                  <TextField
                    fullWidth
                    value={showSubTab === true ? activeTabName : mainTabName}
                    onChange={(e) => {
                      setMainTabName(e.target.value);
                    }}
                    size="small"
                    autoComplete="off"
                    placeholder="Enter Tab Name"
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
                  {!showMainTab && (
                    <TextField
                      fullWidth
                      value={subTabName}
                      onChange={(e) => {
                        setSubTabName(e.target.value);
                      }}
                      size="small"
                      autoComplete="off"
                      placeholder="Enter Sub Tabe Name"
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
                  )}
                  <TextField
                    value={remarks}
                    onChange={(e) => {
                      setRemarks(e.target.value);
                    }}
                    fullWidth
                    size="small"
                    autoComplete="off"
                    placeholder="Enter Remarks"
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
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 1,
                  }}
                >
                  <Button
                    onClick={() =>
                      handleAddTabName(
                        mainTabName,
                        subTabName,
                        remarks,
                        activeTabName
                      )
                    }
                    disabled={
                      loading ||
                      (showMainTab && (!mainTabName || !remarks)) ||
                      (showSubTab &&
                        (!activeTabName || !subTabName || !remarks))
                    }
                    variant="contained"
                    sx={{
                      gap: 1,
                      backgroundColor: loading ? "#a5a5a5" : "#0E4374",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#0E4374",
                      },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} style={{ color: "white" }} />
                    ) : (
                      <>
                        <AddCircleIcon />
                        {showMainTab === true ? "Add Main Tab" : "Add Sub Tab"}
                      </>
                    )}
                  </Button>
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Tabs;
