import { getLoans, updateLoan } from "../utils/storage";
import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";

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
    <Box>
      <Typography variant="h5" mb={2}>
        Admin Panel
      </Typography>

      {loans.length === 0 ? (
        <Typography>No loan applications found</Typography>
      ) : (
        loans.map((loan) => (
          <Card key={loan.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography>👤 {loan.name}</Typography>
              <Typography>💰 ₹{loan.amount}</Typography>
              <Typography>
                Status:{" "}
                <span
                  style={{
                    color:
                      loan.status === "Approved"
                        ? "green"
                        : loan.status === "Rejected"
                        ? "red"
                        : "orange",
                  }}
                >
                  {loan.status}
                </span>
              </Typography>

              <Box mt={2}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => update(loan.id, "Approved")}
                  sx={{ mr: 1 }}
                >
                  Approve
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => update(loan.id, "Rejected")}
                >
                  Reject
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}
