import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField,
  MenuItem, TablePagination, Typography, Button, Dialog,
  DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import { useState, useEffect } from "react";
import { getLoans, deleteLoan, saveLoan } from "../utils/storage";

export default function LoanTable() {
  const [loans, setLoans] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Edit dialog state
  const [open, setOpen] = useState(false);
  const [editLoan, setEditLoan] = useState<any>(null);

  useEffect(() => {
    setLoans(getLoans());
  }, []);

  const refresh = () => setLoans(getLoans());

  // 🔍 Filter
  const filteredLoans = loans.filter((loan) =>
    loan.type.toLowerCase().includes(search.toLowerCase()) &&
    (status ? loan.status === status : true)
  );

  // 🗑️ Delete
  const handleDelete = (id: number) => {
    deleteLoan(id);
    refresh();
  };

  // ✏️ Edit open
  const handleEdit = (loan: any) => {
    setEditLoan(loan);
    setOpen(true);
  };

  // 💾 Save edit
  const handleSave = () => {
    const updated = loans.map((l) =>
      l.id === editLoan.id ? editLoan : l
    );
    localStorage.setItem("loans", JSON.stringify(updated));
    setOpen(false);
    refresh();
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Loan Applications</Typography>

      {/* Search + Filter */}
      <TextField
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mr: 2 }}
      />

      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Approved">Approved</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
      </TextField>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
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

                  <TableCell>
                    <Button onClick={() => handleEdit(loan)}>Edit</Button>
                    <Button color="error" onClick={() => handleDelete(loan.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredLoans.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => setRowsPerPage(Number(e.target.value))}
      />

      {/* ✏️ Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Loan</DialogTitle>

        <DialogContent>
          <TextField
            label="Amount"
            fullWidth
            margin="normal"
            value={editLoan?.amount || ""}
            onChange={(e) =>
              setEditLoan({ ...editLoan, amount: e.target.value })
            }
          />

          <TextField
            label="Type"
            fullWidth
            margin="normal"
            value={editLoan?.type || ""}
            onChange={(e) =>
              setEditLoan({ ...editLoan, type: e.target.value })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
