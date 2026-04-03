import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ApplyLoan from "./pages/ApplyLoan";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply" element={<ApplyLoan />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
}