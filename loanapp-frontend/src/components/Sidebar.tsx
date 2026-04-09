import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);

  if (!auth) return null;

  const { user } = auth;

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      text: "Apply Loan",
      icon: <AccountBalanceIcon />,
      path: "/apply",
    },
  ];

  // ✅ Admin only
  if (user?.role === "admin") {
    menuItems.push({
      text: "Admin Panel",
      icon: <AdminPanelSettingsIcon />,
      path: "/admin",
    });
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 220,
          backgroundColor: "#1e293b",
          color: "#fff",
          borderRight: "none",
        },
      }}
    >
      {/* ✅ Small Branding (not big header) */}
      <Box px={2} py={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          💳 Loan App
        </Typography>
      </Box>

      {/* ✅ Menu */}
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => navigate(item.path)}
            selected={location.pathname === item.path}
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 1,
              "&.Mui-selected": {
                backgroundColor: "#334155",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#cbd5f5" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}