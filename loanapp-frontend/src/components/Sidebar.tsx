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
