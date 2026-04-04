import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    role: "user",
  });

  const handleLogin = () => {
    login(form);

    if (form.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" mb={2}>Login</Typography>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <TextField
          select
          label="Role"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </TextField>

        <Button fullWidth variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}