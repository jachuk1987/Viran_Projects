import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EMICalculator from "../components/EMICalculator";
import LoanChart from "../components/LoanChart";
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Navbar />

        <Grid container spacing={2} p={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Loan Analytics</Typography>
              <LoanChart />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <EMICalculator />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}