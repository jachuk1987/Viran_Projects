import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import { getTheme } from "./theme";
import { AuthProvider } from "./context/AuthContext"; // ✅ IMPORT

function Root() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />

      {/* ✅ THIS IS THE FIX */}
      <AuthProvider>
        <App toggleTheme={toggleTheme} />
      </AuthProvider>

    </ThemeProvider>
  );
}


ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);