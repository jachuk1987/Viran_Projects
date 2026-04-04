import { AppBar, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Loan Banking App</Typography>
      </Toolbar>
    </AppBar>
  );
}