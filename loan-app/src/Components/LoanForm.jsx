import React, { useState } from "react";

const LoanForm = ({ addLoan }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLoan(formData);
    setFormData({ name: "", amount: "", type: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Applicant Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="amount"
        placeholder="Loan Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="">Select Loan Type</option>
        <option value="Home">Home Loan</option>
        <option value="Car">Car Loan</option>
        <option value="Personal">Personal Loan</option>
      </select>

      <button type="submit">Apply</button>
    </form>
  );
};

export default LoanForm;