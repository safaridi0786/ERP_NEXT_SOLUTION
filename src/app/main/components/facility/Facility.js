import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
  CircularProgress,
  TextField,
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogContentText,
  DialogActions,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
function Facility() {
  const [loading, setLoading] = React.useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [addFacilityOpenDialog, setAddFacilityOpenDialog] = useState(false);
  const [editFacilityOpenDialog, setEditFacilityOpenDialog] = useState(false);
  // AutoComplete Dummy Data
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  // DataGrid

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "FACILITY_DESCRIPTION",
      headerName: "FACILITY DESCRIPTION",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "FACILITY_CODE",
      headerName: "FACILITY CODE",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "INCOME_GI_HEAD",
      headerName: "INCOME GI HEAD",
      flex: 1,
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "RECEIVEABLE_GI_HEAD",
      headerName: "RECEIVEABLE GI HEAD",
      flex: 1,
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "IS_PAID",
      headerName: "IS PAID",
      flex: 1,
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "IS_ACTIVE",
      headerName: "IS ACTIVE",
      flex: 1,
      // type: "number",
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "IS_GUEST_ALLOWED",
      headerName: "IS GUEST ALLOWED",
      flex: 1,
      // type: "number",
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "IS_CREDIT_TO_MEMBER",
      headerName: "IS CREDIT TO MEMBER",
      flex: 1,
      // type: "number",
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "IS_DELETE",
      headerName: "IS DELETE",
      flex: 1,
      // type: "number",
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "ROW_ADD_DATE",
      headerName: "ROW ADD DATE",
      flex: 1,
      // type: "number",
      // width: 110,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Action",
      headerName: "Action",
      description: "Action",
      sortable: false,
      width: 100,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Box>
          <Tooltip title="Edit">
            <IconButton
              color="primary"
              onClick={() => handleEditFacilityDialogOpen()}
              size="small"
            >
              <BorderColorOutlinedIcon
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
              onClick={() => handleDialogOpen()}
              size="small"
            >
              <DeleteOutlinedIcon
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

  const row = [
    {
      id: 1,
      FACILITY_DESCRIPTION: "Tag",
      FACILITY_CODE: "3220",
      INCOME_GI_HEAD: "Snooker",
      RECEIVEABLE_GI_HEAD: "Snooker",
      IS_PAID: "Yes",
      IS_ACTIVE: "Yes",
      IS_GUEST_ALLOWED: "No",
      IS_CREDIT_TO_MEMBER: "No",
      IS_DELETE: "Yes",
      ROW_ADD_DATE: "2023-04-77",
    },
  ];

  // Deleted Modal

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // Add Facility Modal

  const handleFacilityDialogOpen = () => {
    setAddFacilityOpenDialog(true);
  };
  const handleFacilityDialogClose = () => {
    setAddFacilityOpenDialog(false);
  };
  // Edit Facility Modal

  const handleEditFacilityDialogOpen = () => {
    setEditFacilityOpenDialog(true);
  };
  const handleEditFacilityDialogClose = () => {
    setEditFacilityOpenDialog(false);
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
              //   onClick={downloadFilterData}
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
              onClick={handleFacilityDialogOpen}
              sx={{
                gap: 1,
                backgroundColor: "#0E4374",
                color: "white",

                "&:hover": {
                  backgroundColor: "#0E4374",
                },
              }}
            >
              <AddCircleIcon /> Add Facility
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={row}
            // loading={loading === true ? <CircularProgress /> : null}
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
      {/* Dialog Box For Add Facility */}
      <Dialog
        open={addFacilityOpenDialog}
        onClose={handleFacilityDialogClose}
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
            bgcolor: "#0E4374",
            color: "white",
          }}
        >
          <Typography fontWeight={"bold"}>Add Facility</Typography>
          <IconButton
            sx={{
              color: "white",
              p: "0",
              "&: hover": { color: "red", bgcolor: "white" },
              cursor: "pointer",
            }}
            onClick={handleFacilityDialogClose}
          >
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ p: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                  <Typography sx={{ fontWeight: "800", fontSize: "13px" }}>
                    Facility Description
                  </Typography>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <TextField size="small" fullWidth />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                  <Typography sx={{ fontWeight: "800", fontSize: "13px" }}>
                    Income GI Head
                  </Typography>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <TextField size="small" fullWidth />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                  <Typography sx={{ fontWeight: "800", fontSize: "13px" }}>
                    Receiveable GI Head
                  </Typography>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <TextField size="small" fullWidth />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}></Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Paid
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Active
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Guest Allowed
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Credit To Member
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: "0.5rem 1rem" }}>
          <Button
            onClick={handleFacilityDialogClose}
            variant="contained"
            style={{ background: "#0E4374", width: "25%", cursor: "pointer" }}
            size="small"
          >
            Cancel
          </Button>
          <Button
            //   onClick={() => {
            //     DeletedRoleAuthority(
            //       deleteData?.authId,
            //       deleteData?.auth,
            //       deleteData?._VIEW,
            //       deleteData?._INSERT,
            //       deleteData?._UPDATE,
            //       deleteData?._LOCK,
            //       deleteData?._ALL
            //     );
            //   }}
            autoFocus
            variant="contained"
            style={{ background: "#0E4374", width: "25%", cursor: "pointer" }}
            size="small"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog Box For Edit Facility */}
      <Dialog
        open={editFacilityOpenDialog}
        onClose={handleEditFacilityDialogClose}
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
            bgcolor: "#0E4374",
            color: "white",
          }}
        >
          <Typography fontWeight={"bold"}>Edit Facility</Typography>
          <IconButton
            sx={{
              color: "white",
              p: "0",
              "&: hover": { color: "red", bgcolor: "white" },
              cursor: "pointer",
            }}
            onClick={handleEditFacilityDialogClose}
          >
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ p: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                  <Typography sx={{ fontWeight: "800", fontSize: "13px" }}>
                    Facility Description
                  </Typography>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <TextField size="small" fullWidth />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                  <Typography sx={{ fontWeight: "800", fontSize: "13px" }}>
                    Income GI Head
                  </Typography>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <TextField size="small" fullWidth />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                  <Typography sx={{ fontWeight: "800", fontSize: "13px" }}>
                    Receiveable GI Head
                  </Typography>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <TextField size="small" fullWidth />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}></Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Paid
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Active
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Guest Allowed
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={{ fontWeight: "800", fontSize: "12px" }}>
                      Is Credit To Member
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: "0.5rem 1rem" }}>
          <Button
            onClick={handleEditFacilityDialogClose}
            variant="contained"
            style={{ background: "#0E4374", width: "25%", cursor: "pointer" }}
            size="small"
          >
            Cancel
          </Button>
          <Button
            //   onClick={() => {
            //     DeletedRoleAuthority(
            //       deleteData?.authId,
            //       deleteData?.auth,
            //       deleteData?._VIEW,
            //       deleteData?._INSERT,
            //       deleteData?._UPDATE,
            //       deleteData?._LOCK,
            //       deleteData?._ALL
            //     );
            //   }}
            autoFocus
            variant="contained"
            style={{ background: "#0E4374", width: "25%", cursor: "pointer" }}
            size="small"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog Box For Delete */}
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
            bgcolor: "#0E4374",
            color: "white",
          }}
        >
          <Typography fontWeight={"bold"}>Confirmation</Typography>
          <IconButton
            sx={{
              color: "white",
              p: "0",
              "&: hover": { color: "red", bgcolor: "white" },
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
              Do you want to delete this Facility
              {/* <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#0E4374",
                  }}
                >
                  {deleteData?.auth}{" "}
                </span> */}
              ?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: "0.5rem 1rem" }}>
          <Button
            onClick={handleDialogClose}
            variant="contained"
            style={{ background: "#0E4374", width: "25%", cursor: "pointer" }}
            size="small"
          >
            No
          </Button>
          <Button
            //   onClick={() => {
            //     DeletedRoleAuthority(
            //       deleteData?.authId,
            //       deleteData?.auth,
            //       deleteData?._VIEW,
            //       deleteData?._INSERT,
            //       deleteData?._UPDATE,
            //       deleteData?._LOCK,
            //       deleteData?._ALL
            //     );
            //   }}
            autoFocus
            variant="contained"
            style={{ background: "#0E4374", width: "25%", cursor: "pointer" }}
            size="small"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Facility;
