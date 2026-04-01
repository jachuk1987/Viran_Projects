import React, { useState } from "react";
import LoanForm from ".Components/LoanForm";
import LoanList from ".Components/LoanList";
import "./styles.css";

function App() {
  const [loans, setLoans] = useState([]);

  const addLoan = (loan) => {
    setLoans([...loans, { ...loan, id: Date.now() }]);
  };

  return (
    <div className="container">
      <h1>Loan Application System</h1>
      <LoanForm addLoan={addLoan} />
      <LoanList loans={loans} />
    </div>
  );
}

export default App;