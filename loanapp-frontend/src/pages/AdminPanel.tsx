import { getLoans, updateLoan } from "../utils/storage";
import { useState, useEffect } from "react";

export default function AdminPanel() {
  const [loans, setLoans] = useState<any[]>([]);

  useEffect(() => {
    setLoans(getLoans());
  }, []);

  const handleUpdate = (id: number, status: string) => {
    updateLoan(id, status);
    setLoans(getLoans());
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {loans.map((loan) => (
        <div key={loan.id}>
          <p>{loan.amount}</p>
          <button onClick={() => handleUpdate(loan.id, "Approved")}>
            Approve
          </button>
          <button onClick={() => handleUpdate(loan.id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}