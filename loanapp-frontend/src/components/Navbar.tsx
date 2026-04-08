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
import { useState, useContext, MouseEvent } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Safety check (prevents crash)
  if (!auth) {
    throw new Error("AuthContext is not provided. Wrap your app with AuthProvider.");
  }

  const { user, logout } = auth;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // ✅ Proper typing instead of `any`
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
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* 💳 App Title */}
        <Typography variant="h6" fontWeight="bold">
          💳 Loan Banking App
        </Typography>

        {/* Right Side */}
        <Box display="flex" alignItems="center" gap={2}>
          
          {/* 🔔 Notifications */}
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* 👤 Profile */}
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar>
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </Avatar>
          </IconButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
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