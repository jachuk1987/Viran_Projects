import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function EMICalculator() {
  const [data, setData] = useState({
    principal: "",
    rate: "",
    tenure: "",
  });

  const [emi, setEmi] = useState<number | null>(null);

  const calculateEMI = () => {
    const P = Number(data.principal);
    const R = Number(data.rate) / 12 / 100;
    const N = Number(data.tenure);

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(EMI);
  };

  return (
    <div>
      <Typography variant="h6">EMI Calculator</Typography>

      <TextField label="Loan Amount" fullWidth margin="normal"
        onChange={(e) => setData({ ...data, principal: e.target.value })}
      />

      <TextField label="Interest Rate (%)" fullWidth margin="normal"
        onChange={(e) => setData({ ...data, rate: e.target.value })}
      />

      <TextField label="Tenure (Months)" fullWidth margin="normal"
        onChange={(e) => setData({ ...data, tenure: e.target.value })}
      />

      <Button variant="contained" onClick={calculateEMI}>
        Calculate
      </Button>

      {emi && (
        <Typography mt={2}>
          Monthly EMI: ₹{emi.toFixed(2)}
        </Typography>
      )}
    </div>
  );
}
