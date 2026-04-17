import { Box, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LoanForm from "../components/LoanForm";

export default function ApplyLoan() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          <Paper
            sx={{
              p: 4,
              maxWidth: 600,
              margin: "auto",
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" mb={2}>
              Apply for a Loan
            </Typography>

            {/* Loan Form Component */}
            <LoanForm />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}