// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Box,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user } = useContext(AuthContext);

//   const [open, setOpen] = useState(true);

//   const menuItems = [
//     {
//       text: "Dashboard",
//       icon: <DashboardIcon />,
//       path: "/dashboard",
//     },
//     {
//       text: "Apply Loan",
//       icon: <AccountBalanceIcon />,
//       path: "/apply",
//     },
//   ];

//   // 👨‍💼 Admin menu
//   if (user?.role === "admin") {
//     menuItems.push({
//       text: "Admin Panel",
//       icon: <AdminPanelSettingsIcon />,
//       path: "/admin",
//     });
//   }

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: open ? 200 : 70,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: open ? 200 : 70,
//           boxSizing: "border-box",
//           transition: "0.3s",
//         },
//       }}
//     >
//       {/* Toggle Button */}
//       <Box display="flex" justifyContent="flex-end" p={1}>
//         <IconButton onClick={() => setOpen(!open)}>
//           <MenuIcon />
//         </IconButton>
//       </Box>

//       {/* Menu */}
//       <List>
//         {menuItems.map((item) => (
//           <ListItemButton
//             key={item.text}
//             onClick={() => navigate(item.path)}
//             selected={location.pathname === item.path}
//             sx={{
//               mx: 1,
//               borderRadius: 2,
//               mb: 1,
//             }}
//           >
//             <ListItemIcon>{item.icon}</ListItemIcon>

//             {open && <ListItemText primary={item.text} />}
//           </ListItemButton>
//         ))}
//       </List>
//     </Drawer>
//   );
// }

import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box width={220} bgcolor="#1e293b" color="#fff" height="100vh" p={2}>
      <h2>Loan App</h2>

      <List>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/apply")}>
          <ListItemText primary="Apply Loan" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/admin")}>
          <ListItemText primary="Admin Panel" />
        </ListItemButton>
      </List>
    </Box>
  );
}