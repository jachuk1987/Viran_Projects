import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { getLoans } from "./storage";

export const downloadPDF = () => {
  const doc = new jsPDF();

  const loans = getLoans();

  const tableData = loans.map((loan: any) => [
    loan.amount,
    loan.type,
    loan.status,
  ]);

  doc.setFontSize(18);
  doc.text("Loan Report - Fintech App", 14, 15);

  autoTable(doc, {
    head: [["Amount", "Type", "Status"]],
    body: tableData,
    startY: 20,
  });

  doc.save("loan-report.pdf");
};