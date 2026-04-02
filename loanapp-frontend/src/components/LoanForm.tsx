import { TextField, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { saveLoan } from "../utils/storage";

export default function LoanForm() {
  const [form, setForm] = useState({
    amount: "",
    type: "",
  });

  const handleSubmit = () => {
    saveLoan({
      ...form,
      id: Date.now(),
      status: "Pending",
    });
    alert("Loan Applied!");
  };

  return (
    <div>
      <TextField
        label="Amount"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <TextField
        select
        label="Loan Type"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <MenuItem value="Home">Home</MenuItem>
        <MenuItem value="Car">Car</MenuItem>
        <MenuItem value="Personal">Personal</MenuItem>
      </TextField>

      <Button variant="contained" onClick={handleSubmit}>
        Apply Loan
      </Button>
    </div>
  );
}