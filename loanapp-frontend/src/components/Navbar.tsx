import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleTheme }: any) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left Side - App Title */}
        <Typography variant="h6" fontWeight="bold">
          💳 Loan Banking App
        </Typography>

        {/* Right Side */}
        <Box display="flex" alignItems="center" gap={2}>
          
          {/* 👤 User Name */}
          {user && (
            <Typography variant="body1">
              Welcome, {user.name}
            </Typography>
          )}

          {/* 🌙 Dark Mode Toggle (Optional) */}
          {toggleTheme && (
            <IconButton color="inherit" onClick={toggleTheme}>
              <DarkModeIcon />
            </IconButton>
          )}

          {/* 🚪 Logout Button */}
          {user && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
}