import Layout from "../components/Layout";
import {
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CancelIcon from "@mui/icons-material/Cancel";

const stats = [
  {
    label: "Total Loans",
    value: "₹50,000",
    icon: <AccountBalanceWalletIcon />,
    color: "#6366f1",
  },
  {
    label: "Approved",
    value: "₹30,000",
    icon: <CheckCircleIcon />,
    color: "#22c55e",
  },
  {
    label: "Pending",
    value: "₹12,000",
    icon: <PendingActionsIcon />,
    color: "#f59e0b",
  },
  {
    label: "Rejected",
    value: "₹8,000",
    icon: <CancelIcon />,
    color: "#ef4444",
  },
];

// 🔢 Sample Data (later replace with API)
const loanData = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 5000 },
  { name: "Apr", amount: 7000 },
];

const statusData = [
  { name: "Approved", value: 60 },
  { name: "Pending", value: 25 },
  { name: "Rejected", value: 15 },
];

const COLORS = ["#4caf50", "#ff9800", "#f44336"];

export default function Dashboard() {
  return (
    <Layout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Financial Overview 💰
      </Typography>

      {/* ✅ KPI Cards */}
      <Grid container spacing={3} mb={3}>
        ...
      </Grid>

      {/* ✅ Charts Section */}
      <Grid container spacing={3}>
        ...
      </Grid>

      {/* ✅ 👉 ADD HERE (EMI Insight) */}
      <Paper sx={{ mt: 3 }}>
        <Typography fontWeight="bold" mb={1}>
          EMI Insight
        </Typography>
        <Typography color="text.secondary">
          Your average EMI this month is ₹4,200 across all active loans.
        </Typography>
      </Paper>

      {/* 🔥 Stats Cards */}
      <Grid container spacing={3} mb={3}>

        {[
          { label: "Total Loans", value: "₹50,000" },
          { label: "Approved", value: "₹30,000" },
          { label: "Pending", value: "₹12,000" },
          { label: "Rejected", value: "₹8,000" },
        ].map((item) => (
          <Grid item xs={12} md={3} key={item.label}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}

      </Grid>

      {/* 📊 Charts Section */}
      <Grid container spacing={3}>

        {/* 📈 Bar Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography mb={2} fontWeight="bold">
              Monthly Loan Distribution
            </Typography>

            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={loanData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* 🥧 Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography mb={2} fontWeight="bold">
              Loan Status
            </Typography>

            <Box height={300}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    outerRadius={100}
                  >
                    {statusData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Layout>
  );
}