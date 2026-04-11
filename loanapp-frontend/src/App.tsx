import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ApplyLoan from "./pages/ApplyLoan";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard toggleTheme={toggleTheme} />} />
          <Route path="/apply" element={<ApplyLoan toggleTheme={toggleTheme} />} />
          <Route path="/admin" element={<AdminPanel toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;