import { getLoans, updateLoan } from "../utils/storage";
import { useEffect, useState } from "react";
import { Button, Paper, Typography } from "@mui/material";

export default function AdminPanel() {
  const [loans, setLoans] = useState<any[]>([]);

  useEffect(() => {
    setLoans(getLoans());
  }, []);

  const update = (id: number, status: string) => {
    updateLoan(id, status);
    setLoans(getLoans());
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">Admin Panel</Typography>

      {loans.map((loan) => (
        <Paper key={loan.id} sx={{ p: 2, my: 2 }}>
          <p>Amount: ₹{loan.amount}</p>
          <p>Status: {loan.status}</p>

          <Button onClick={() => update(loan.id, "Approved")}>
            Approve
          </Button>

          <Button onClick={() => update(loan.id, "Rejected")}>
            Reject
          </Button>
        </Paper>
      ))}
    </div>
  );
}
