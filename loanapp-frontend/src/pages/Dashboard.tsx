import Layout from "../components/Layout";
import { Grid, Paper, Typography, Box } from "@mui/material";
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

// ✅ KPI Data
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

// 📊 Chart Data
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

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

export default function Dashboard() {
  return (
    <Layout>
      {/* ✅ Title */}
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Financial Overview 💰
      </Typography>

      {/* ✅ KPI Cards */}
      <Grid container spacing={3} mb={3}>
        {stats.map((item) => (
          <Grid item xs={12} md={3} key={item.label}>
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  backgroundColor: item.color,
                  color: "#fff",
                  borderRadius: 2,
                  p: 1.5,
                  display: "flex",
                }}
              >
                {item.icon}
              </Box>

              {/* Text */}
              <Box>
                <Typography color="text.secondary" fontSize={14}>
                  {item.label}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {item.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 📊 Charts */}
      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} md={8}>
          <Paper>
            <Typography fontWeight="bold" mb={2}>
              Monthly Loan Distribution
            </Typography>

            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={loanData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper>
            <Typography fontWeight="bold" mb={2}>
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

      {/* 💡 EMI Insight */}
      <Paper sx={{ mt: 3 }}>
        <Typography fontWeight="bold">
          EMI Insight 💡
        </Typography>
        <Typography color="text.secondary" mt={1}>
          Your average EMI this month is ₹4,200 across all active loans.
        </Typography>
      </Paper>
    </Layout>
  );
}