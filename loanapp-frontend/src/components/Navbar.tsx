import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" fontWeight="bold">
          💳 Loan Dashboard
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Avatar sx={{ bgcolor: "#1976d2" }}>
            {user?.name?.charAt(0) || "U"}
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}