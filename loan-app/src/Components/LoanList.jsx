import React from "react";

const LoanList = ({ loans }) => {
  return (
    <div className="loan-list">
      <h2>Loan Applications</h2>
      {loans.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        loans.map((loan) => (
          <div key={loan.id} className="card">
            <h3>{loan.name}</h3>
            <p>Amount: ₹{loan.amount}</p>
            <p>Type: {loan.type}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default LoanList;