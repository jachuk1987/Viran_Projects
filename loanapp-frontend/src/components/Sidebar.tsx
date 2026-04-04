import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => navigate("/apply")}>
          <ListItemText primary="Apply Loan" />
        </ListItem>

        <ListItem button onClick={() => navigate("/admin")}>
          <ListItemText primary="Admin Panel" />
        </ListItem>
      </List>
    </Drawer>
  );
}