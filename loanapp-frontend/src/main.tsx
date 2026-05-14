import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import { AuthProvider } from "./context/AuthContext";

// ✅ Root Component
function Root() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // ✅ Better toggle logic
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />

        {/* ✅ AuthProvider wraps entire app */}
        <AuthProvider>
          <App toggleTheme={toggleTheme} />
        </AuthProvider>

      </ThemeProvider>
    </React.StrictMode>
  );
}

// ✅ Root render
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
