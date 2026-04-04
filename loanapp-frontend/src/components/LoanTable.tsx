import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField,
  MenuItem, TablePagination, Typography
} from "@mui/material";
import { useState, useEffect } from "react";
import { getLoans } from "../utils/storage";

export default function LoanTable() {
  const [loans, setLoans] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setLoans(getLoans());
  }, []);

  // 🔍 Filter Logic
  const filteredLoans = loans.filter((loan) => {
    return (
      loan.type.toLowerCase().includes(search.toLowerCase()) &&
      (status ? loan.status === status : true)
    );
  });

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        Loan Applications
      </Typography>

      {/* 🔍 Search + Filter */}
      <TextField
        label="Search Loan Type"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mr: 2 }}
      />

      <TextField
        select
        label="Filter Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Approved">Approved</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
      </TextField>

      {/* 📊 Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredLoans
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>₹{loan.amount}</TableCell>
                  <TableCell>{loan.type}</TableCell>
                  <TableCell>{loan.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 📄 Pagination */}
      <TablePagination
        component="div"
        count={filteredLoans.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => setRowsPerPage(Number(e.target.value))}
      />
    </Paper>
  );
}