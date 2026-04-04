import { Box, Grid, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EMICalculator from "../components/EMICalculator";
import LoanChart from "../components/LoanChart";
import { getLoans } from "../utils/storage";
import LoanTable from "../components/LoanTable";

export default function Dashboard() {
  const loans = getLoans();

  const total = loans.length;
  const approved = loans.filter((l: any) => l.status === "Approved").length;
  const pending = loans.filter((l: any) => l.status === "Pending").length;
  const rejected = loans.filter((l: any) => l.status === "Rejected").length;

  const Card = ({ title, value }: any) => (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        textAlign: "center",
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {value}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Navbar */}
        <Navbar />

        <Box sx={{ p: 3 }}>
          {/* Stats Cards */}
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} md={3}>
              <Card title="Total Loans" value={total} />
            </Grid>

            <Grid item xs={12} md={3}>
              <Card title="Approved" value={approved} />
            </Grid>

            <Grid item xs={12} md={3}>
              <Card title="Pending" value={pending} />
            </Grid>

            <Grid item xs={12} md={3}>
              <Card title="Rejected" value={rejected} />
            </Grid>
          </Grid>

          {/* Charts + EMI */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h6" mb={2}>
                  Loan Analytics
                </Typography>
                <LoanChart />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                <EMICalculator />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}