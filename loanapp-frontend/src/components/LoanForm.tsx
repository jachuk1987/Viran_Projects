import { TextField, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { saveLoan } from "../utils/storage";

export default function LoanForm() {
  const [form, setForm] = useState({
    amount: "",
    type: "",
  });

  const handleSubmit = () => {
    if (!form.amount || !form.type) {
      alert("Please fill all fields");
      return;
    }

    saveLoan({
      ...form,
      id: Date.now(),
      status: "Pending",
    });

    alert("Loan Applied Successfully!");
    setForm({ amount: "", type: "" });
  };

  return (
    <div>
      <TextField
        label="Loan Amount"
        fullWidth
        margin="normal"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
      />

      <TextField
        select
        label="Loan Type"
        fullWidth
        margin="normal"
        value={form.type}
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <MenuItem value="Home">Home Loan</MenuItem>
        <MenuItem value="Car">Car Loan</MenuItem>
        <MenuItem value="Personal">Personal Loan</MenuItem>
      </TextField>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Apply Now
      </Button>
    </div>
  );
}
