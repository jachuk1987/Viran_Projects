import { Box, Card, CardContent, Typography } from "@mui/material";
import { getLoans } from "../utils/storage";

export default function Dashboard() {
  const loans = getLoans();

  const total = loans.length;
  const approved = loans.filter((l: any) => l.status === "Approved").length;
  const rejected = loans.filter((l: any) => l.status === "Rejected").length;

  return (
    <Box display="flex" gap={3}>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography>Total Loans</Typography>
          <Typography variant="h5">{total}</Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography>Approved</Typography>
          <Typography variant="h5" color="green">
            {approved}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography>Rejected</Typography>
          <Typography variant="h5" color="red">
            {rejected}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}