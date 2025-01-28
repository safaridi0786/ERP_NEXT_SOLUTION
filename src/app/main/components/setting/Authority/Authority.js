import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Divider from "@mui/material/Divider";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CancelIcon from "@mui/icons-material/Cancel";
import { getAuthorityAPI } from "../../../../services/api/apiManager";

function Authority() {
  const [parentChecked, setParentChecked] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  const [childChecked, setChildChecked] = useState({
    view: false,
    update: false,
    lock: false,
    insert: false,
  });

  // Handle parent checkbox change
  const handleParentChange = (event) => {
    const isChecked = event.target.checked;
    setParentChecked(isChecked);
    setChildChecked({
      view: isChecked,
      update: isChecked,
      lock: isChecked,
      insert: isChecked,
    });
    setShowChildren(isChecked);
  };

  // Handle child checkbox change
  const handleChildChange = (e, name) => {
    const isChecked = e.target.checked;
    setChildChecked((prevState) => ({
      ...prevState,
      [name]: isChecked,
    }));
  };
  const [allUserRoles, setAllUserRoles] = useState([]);
  const [showParent, setShowParent] = useState(false);
  const [showRightRules, setShowRightRules] = useState([]);
  const [sendIdRole, setSendIdRole] = useState(null);
  const [newRole, setNewRole] = useState("");
  const [hideRole, setHideRole] = useState(false);
  const [deleteData, setDeleteData] = useState();
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState(false);

  const [snackbarInfo, setSnackbarInfo] = useState({
    snackbarMsg: "",
    snackbarColor: "",
  });

  // for chiled components
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // region Columns
  const columns = [
    {
      field: "auth",
      headerName: "Roles Name",
      flex: "1",
      align: "center",
      renderCell: (cellValues) => {
        const nameParts = cellValues?.value;
        return (
          <Box>
            <Typography
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowParent(true);
                setShowRightRules(cellValues?.row);
              }}
            >
              <u>{nameParts}</u>
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (cellValues) => {
        return (
          <Box
            sx={{
              display: "flex",
              gap: "0.1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tooltip title={"Edit Role"} followCursor>
              <span>
                <IconButton
                  sx={{
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "transparent",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "transparent",
                    },
                  }}
                  // disabled={!edituserrights}
                >
                  <BorderColorOutlinedIcon
                    onClick={() => {
                      // if (edituserrights) {
                      //   setNewRole(cellValues?.row?.roleName);
                      //   setSendIdRole(cellValues?.row?.roleId);
                      //   setHideRole(true);
                      //   if (cellValues?.row?.roleId !== sendIdRole) {
                      //     setRights([]);
                      //     setModule([]);
                      //     setModuleMaster([]);
                      //     setModuleId([]);
                      //     setMasterId([]);
                      //   }
                      // }
                    }}
                    sx={{
                      color: "#003B72",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title={"Delete Role"} followCursor>
              <span>
                <IconButton
                  sx={{
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "transparent",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "transparent",
                    },
                    cursor: "pointer",
                  }}
                  // disabled={!deluserrights}
                >
                  <DeleteOutlinedIcon
                    sx={{
                      color: "#FC0707",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      // if (deluserrights) {
                      //   handleDeletePatient(cellValues?.row);
                      // }
                    }}
                  />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  const getUserRolesData = async () => {
    setLoading(true);
    try {
      const response = await getAuthorityAPI();
      if (response?.data?.status === 200) {
        const rowWithUserRolesIds = response?.data?.result?.map(
          (row, index) => ({
            ...row,
            id: index,
          })
        );
        setAllUserRoles(rowWithUserRolesIds);
        console.log(`check response-->>`, rowWithUserRolesIds);
      } else {
        setAllUserRoles([]);
      }
    } catch (error) {
      console.error("Error fetching Provider:", error);
      setAllUserRoles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserRolesData();
  }, []);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "800",
              color: "#003B72",
              lineHeight: "24.2px",
            }}
          >
            User Roles and Rights
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              setHideRole(true);
              setNewRole("");
              setSendIdRole(null);
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
            <AddIcon /> Add Role Name
          </Button>
        </Box>

        {/* Body Strucure */}
        {loading ? (
          <Box
            width={"100%"}
            height={"50vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress />
          </Box>
        ) : (loading === false || loading === true) &&
          allUserRoles?.length <= 0 ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"50vh"}
          >
            0 Record
          </Box>
        ) : (
          <Box margin={"0.5rem"}>
            <Grid container spacing={2}>
              <Grid item lg={5} xl={5} md={5} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0rem 0.5rem",
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    color={"#0E4374"}
                    lineHeight={"16px"}
                  >
                    Defined Roles
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    bgcolor: "#ADD8F1",
                    margin: "0.5rem 0 0.5rem",
                  }}
                />
                {/* Mui Data Grid Table */}
                <Box
                  sx={{
                    maxHeight: "70vh",
                    width: "100%",
                    overflow: "auto",
                  }}
                >
                  <DataGrid
                    rowHeight={40}
                    columnHeaderHeight={40}
                    rows={allUserRoles || []}
                    columns={columns}
                    pagination={false}
                    disableColumnSelector
                    paginationMode="server"
                    sx={{
                      "& .MuiDataGrid-columnHeader": {
                        backgroundColor: "#E5F4FF",
                        color: "#1C1919",
                        fontFamily: "Poppins",
                        fontWeight: "300",
                        border: "0.1px solid #ddd",
                        "& .MuiDataGrid-columnHeaderTitleContainer": {
                          justifyContent: "center",
                          textAlign: "center",
                        },
                      },
                      "& .MuiDataGrid-cell": {
                        border: "0.1px solid #ddd",
                      },
                      "& .MuiDataGrid-iconSeparator": {
                        display: "none",
                      },
                      "& .MuiDataGrid-footerContainer": {
                        display: "none",
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={7} xl={7} md={7} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                    {hideRole && (
                      <Box
                        sx={{
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          padding: "0.5rem",
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: hideRole ? "5px" : "0px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#0E4374",
                            fontWeight: "bold",
                          }}
                        >
                          Role Title
                        </Typography>
                        <Box display={"flex"} gap={"10px"}>
                          <Box flex={3}>
                            <TextField
                              value={newRole}
                              onChange={(e) => {
                                setNewRole(e.target.value);
                                setError(false);
                              }}
                              error={error === true ? true : false}
                              fullWidth
                              sx={{
                                "& input": {
                                  height: "0px",
                                  bgcolor: "#F2F2F2",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Grid>
                  {/* Roles Rights */}
                  <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0rem 0.5rem",
                        mt: "-8px",
                      }}
                    >
                      <Typography
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        color={"#0E4374"}
                        lineHeight={"16px"}
                      >
                        Roles Rights
                      </Typography>
                    </Box>
                    <Divider
                      sx={{
                        bgcolor: "#ADD8F1",
                        margin: "0.5rem 0 0.5rem",
                      }}
                    />

                    <Box
                      sx={{
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                        padding: "0 0.5rem",
                        overflowY: "auto",
                        height: "500px",
                        // border: "1px solid black",
                      }}
                    >
                      {allUserRoles?.length <= 0 && loading === false ? (
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          height={"260px"}
                        >
                          0 Rights
                        </Box>
                      ) : (
                        <>
                          {showParent && (
                            <Box>
                              {/* Parent Checkbox */}
                              <Box
                                sx={{
                                  display: "flex",
                                  padding: "0.5rem",
                                  alignItems: "center",
                                }}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      size="small"
                                      name="all"
                                      icon={
                                        <AddBoxIcon sx={{ color: "#AAAEAE" }} />
                                      }
                                      checkedIcon={
                                        <IndeterminateCheckBoxIcon
                                          sx={{ color: "#AAAEAE" }}
                                        />
                                      }
                                    />
                                  }
                                  checked={parentChecked}
                                  onChange={handleParentChange}
                                  sx={{
                                    p: "0",
                                    m: "0",
                                    "& .MuiCheckbox-root": {},
                                  }}
                                />
                                <FormControlLabel
                                  control={<Checkbox size="small" name="all" />}
                                  label="All"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      color: "#29696D",
                                      fontSize: "14px",
                                      textTransform: "capitalize",
                                      fontWeight: "bold",
                                    },
                                    "& .MuiCheckbox-root": {
                                      color: "#29696D",
                                    },
                                  }}
                                />
                              </Box>
                              <Divider sx={{ bgcolor: "#000000" }} />

                              {/* Child Checkboxes */}
                              {showChildren && showRightRules && (
                                <Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                      padding: "0rem 0.5rem",
                                      ml: "1rem",
                                    }}
                                  >
                                    {[
                                      {
                                        name: "view",
                                        label: "View",
                                        checked: showRightRules?._VIEW,
                                      },
                                      {
                                        name: "update",
                                        label: "Update",
                                        checked: showRightRules?._UPDATE,
                                      },
                                      {
                                        name: "lock",
                                        label: "Lock",
                                        checked: showRightRules?._LOCK,
                                      },
                                      {
                                        name: "insert",
                                        label: "Insert",
                                        checked: showRightRules?._INSERT,
                                      },
                                      {
                                        name: "all",
                                        label: "All",
                                        checked: showRightRules?._ALL,
                                      },
                                    ].map((checkbox) => (
                                      <>
                                        <Box
                                          sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                          }}
                                        >
                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                size="small"
                                                name="view"
                                                checked={childChecked.view}
                                                onChange={handleChildChange}
                                                icon={
                                                  <AddBoxIcon
                                                    sx={{ color: "#AAAEAE" }}
                                                  />
                                                }
                                                checkedIcon={
                                                  <IndeterminateCheckBoxIcon
                                                    sx={{ color: "#AAAEAE" }}
                                                  />
                                                }
                                              />
                                            }
                                            sx={{
                                              p: "0",
                                              m: "0",
                                              "& .MuiCheckbox-root": {},
                                            }}
                                          />

                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                size="small"
                                                name="all"
                                                checked={checkbox.checked}
                                              />
                                            }
                                            label={checkbox.label}
                                            sx={{
                                              "& .MuiFormControlLabel-label": {
                                                color: "#29696D",
                                                fontSize: "14px",
                                                textTransform: "capitalize",
                                                fontWeight: "bold",
                                              },
                                              "& .MuiCheckbox-root": {
                                                color: "#29696D",
                                              },
                                            }}
                                          />
                                        </Box>
                                        <Divider sx={{ bgcolor: "#000000" }} />
                                      </>
                                    ))}
                                  </Box>
                                </Box>
                              )}
                            </Box>
                          )}
                        </>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                gap: "0.5rem",
                flex: 1,
                m: "10px 0px",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={() => {
                  setHideRole(false);
                  setNewRole("");
                  setSendIdRole(null);
                  setError(false);
                }}
                variant="contained"
                sx={{
                  height: "32px",
                  bgcolor: "#D7D7D7",
                  color: "#15232B",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  padding: "0.5rem 1.5rem",
                  "&:hover": {
                    bgcolor: "#D7D7D7",
                  },
                }}
              >
                Cancel
              </Button>
              <Tooltip
                title={sendIdRole !== null ? "Update User" : "Add User"}
                followCursor
              >
                <span>
                  {sendIdRole !== null ? (
                    <Button
                      onClick={() => {
                        // if (adduserrights) {
                        // updateUserRoles({
                        //   roleName: newRole,
                        //   deleted: false,
                        //   roleId: sendIdRole,
                        // });
                        // updateUserRights({
                        //   roleId: sendIdRole,
                        //   moduleRightId: rights?.map((i) => i?.moduleRightId),
                        // });
                        setHideRole(false);
                        setSendIdRole(null);

                        // }
                      }}
                      variant="contained"
                      type="file"
                      sx={{
                        height: "32px",
                        bgcolor: "#0E4374",
                        color: "#F3F8FB",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        padding: "0.5rem 2rem",
                        "&:hover": {
                          bgcolor: "#1A6C71",
                        },
                      }}
                      // disabled={!adduserrights}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        if (newRole !== "") {
                          // addNewRoles({ roleName: newRole });
                          setNewRole("");
                          setHideRole(false);
                        } else {
                          setError(true);
                          setSnackbarInfo({
                            snackbarMsg: "formValidation",
                            snackbarColor: "red",
                          });
                          setOpenSnackbar(true);
                        }
                      }}
                      variant="contained"
                      type="file"
                      sx={{
                        height: "32px",
                        bgcolor: "#0E4374",
                        color: "#F3F8FB",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        padding: "0.5rem 2rem",
                        "&:hover": {
                          bgcolor: "#1A6C71",
                        },
                      }}
                      // disabled={!adduserrights}
                    >
                      Add
                    </Button>
                  )}
                </span>
              </Tooltip>
            </Box>
          </Box>
        )}

        {/* Dialog Box Funcionality */}
        <Dialog
          open={openDialog}
          onClose={handleDialogClose}
          aria-labelledby="responsive-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: "0",
              p: "0.4rem 1rem",
              bgcolor: "#0F5F63",
              color: "white",
            }}
          >
            <Typography fontWeight={"bold"}>Confirmation</Typography>
            <IconButton
              sx={{
                color: "white",
                p: "0",
                "&: hover": { color: "black" },
                cursor: "pointer",
              }}
              onClick={handleDialogClose}
            >
              <CancelIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ p: "0.2rem 1rem", mt: "1rem" }}
            >
              <Typography
                textAlign="center"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "24",
                }}
              >
                {" "}
                Do you want to delete this Role
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#075AD7",
                  }}
                >
                  {deleteData?.rolesDescription}
                </span>
                ?
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ p: "0.5rem 1rem" }}>
            <Button
              onClick={() => {
                handleDialogClose();
              }}
              variant="contained"
              style={{ background: "#0F5F63", width: "25%", cursor: "pointer" }}
              size="small"
            >
              No
            </Button>
            <Button
              onClick={() => {
                handleDialogClose();
                // updateUserRoles({
                //   roleId: deletedId,
                //   deleted: true,
                // });
                setNewRole("");
                setHideRole(false);
              }}
              autoFocus
              variant="contained"
              style={{ background: "#0F5F63", width: "25%", cursor: "pointer" }}
              size="small"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        {/* snakbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000} // Adjust the duration as needed
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={
              snackbarInfo?.snackbarColor === "red" ? "error" : "success"
            }
            sx={{
              backgroundColor: `${
                snackbarInfo?.snackbarColor === "red" ? "red" : "#165a5e"
              }`,
              fontSize: "15px",
              padding: "5px 10px",
              color: "white",
              "& .MuiAlert-icon": {
                color: "white", // Change icon color to white
              },
            }}
          >
            {snackbarInfo.snackbarMsg === "add"
              ? `Add Roles Successfully!`
              : snackbarInfo.snackbarMsg === "delete"
              ? `Deleted Successfully!`
              : snackbarInfo.snackbarMsg === "edit"
              ? `Updated Successfully!`
              : snackbarInfo.snackbarMsg === "new"
              ? `Updated Successfully!`
              : snackbarInfo.snackbarMsg === "formValidation"
              ? `Role Required`
              : `ERROR!`}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default Authority;
