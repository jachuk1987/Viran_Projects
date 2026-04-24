import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useState, useContext, MouseEvent } from "react";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// ✅ Props for dark mode
type Props = {
  toggleTheme: () => void;
};

export default function Navbar({ toggleTheme }: Props) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();

  // ✅ Safety check
  if (!auth) {
    throw new Error("AuthContext is not provided. Wrap your app with AuthProvider.");
  }

  const { user, logout } = auth;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* 💳 App Title */}
        <Typography variant="h6" fontWeight="bold">
          💳 Loan Banking App
        </Typography>

        {/* 👉 Right Side */}
        <Box display="flex" alignItems="center" gap={1.5}>
          
          {/* 🌙 Dark Mode Toggle */}
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>

          {/* 🔔 Notifications */}
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* 👤 Profile */}
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar sx={{ bgcolor: "primary.main" }}>
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </Avatar>
          </IconButton>

          {/* 📋 Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem disabled>
              {user?.name || "Guest"} ({user?.role || "User"})
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuClose();
                handleLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>

        </Box>
      </Toolbar>
    </AppBar>
  );
}
