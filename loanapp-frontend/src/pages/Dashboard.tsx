import { useEffect, useState } from "react";
import { getLoans } from "../utils/storage";

export default function Dashboard() {
  const [loans, setLoans] = useState<any[]>([]);

  useEffect(() => {
    setLoans(getLoans());
  }, []);

  return (
    <div>
      <h2>Your Loans</h2>
      {loans.map((loan) => (
        <div key={loan.id}>
          <p>Amount: ₹{loan.amount}</p>
          <p>Type: {loan.type}</p>
          <p>Status: {loan.status}</p>
        </div>
      ))}
    </div>
  );
}