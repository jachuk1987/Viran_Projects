import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { getLoans } from "../utils/storage";

export default function LoanChart() {
  const loans = getLoans();

  const data = [
    { name: "Approved", value: loans.filter(l => l.status === "Approved").length },
    { name: "Pending", value: loans.filter(l => l.status === "Pending").length },
    { name: "Rejected", value: loans.filter(l => l.status === "Rejected").length },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        {data.map((entry, index) => (
          <Cell key={index} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
