export const getLoans = () =>
  JSON.parse(localStorage.getItem("loans") || "[]");

export const saveLoan = (loan: any) => {
  const loans = getLoans();
  localStorage.setItem("loans", JSON.stringify([...loans, loan]));
};

export const updateLoan = (id: number, status: string) => {
  const loans = getLoans().map((loan: any) =>
    loan.id === id ? { ...loan, status } : loan
  );
  localStorage.setItem("loans", JSON.stringify(loans));
};

export const deleteLoan = (id: number) => {
  const loans = getLoans().filter((loan: any) => loan.id !== id);
  localStorage.setItem("loans", JSON.stringify(loans));
};
