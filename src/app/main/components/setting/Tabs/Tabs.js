import {
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { getNestedSideTab, getSideTab } from "../../../services/api/apiManager";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Tabs() {
  const [tabData, setTabData] = useState([]);
  const [nestedTabData, setNestedTabData] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = [
    { id: 1, name: "Ali", position: "Software Engineer", department: "IT" },
    { id: 2, name: "Ayesha", position: "HR Manager", department: "HR" },
    { id: 3, name: "Zain", position: "Accountant", department: "Finance" },
  ];

  const fetchSideTab = async () => {
    setLoading(true);
    try {
      const response = await getSideTab();
      if (response?.data?.status === 200) {
        const dataWithId = response?.data?.result?.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setTabData(dataWithId);
      }
    } catch (error) {
      console.error("Error fetching side tabs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNestedSideTabs = async (tabName) => {
    try {
      setLoading(true);
      const response = await getNestedSideTab(tabName);
      if (response?.data?.status === 200) {
        setLoading(false);
        setNestedTabData((prev) => ({
          ...prev,
          [tabName]: response?.data?.result,
        }));
      }
    } catch (error) {
      setLoading(true);
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
              <Typography color={"black"} fontWeight={600}>
                Main Tabs
              </Typography>
              <Button
                variant="contained"
                // onClick={handleOpen}
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
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.position}</td>
                      <td>{employee.department}</td>
                      <td>
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <Typography color={"black"} fontWeight={600}>
              Show Add Main Tabs
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Tabs;
