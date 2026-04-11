import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);

  const [open, setOpen] = useState(true);

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
        width: open ? 220 : 70,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 220 : 70,
          backgroundColor: "#1e293b",
          color: "#fff",
          transition: "0.3s",
          overflowX: "hidden",
        },
      }}
    >
      {/* 🔘 Toggle Button */}
      <Box display="flex" justifyContent={open ? "flex-end" : "center"} p={1}>
        <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* 🏷 Logo */}
      {open && (
        <Box px={2} pb={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            💳 Loan App
          </Typography>
        </Box>
      )}

      {/* 📋 Menu */}
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
              justifyContent: open ? "initial" : "center",
              "&.Mui-selected": {
                backgroundColor: "#334155",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#cbd5f5",
                minWidth: open ? 40 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>

            {open && <ListItemText primary={item.text} />}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}