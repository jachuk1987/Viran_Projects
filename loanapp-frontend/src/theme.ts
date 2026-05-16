import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#6366f1", // Indigo
      },

      secondary: {
        main: "#3b82f6", // Blue
      },

      background: {
        default: mode === "light" ? "#f5f7fa" : "#0f172a",
        paper: mode === "light" ? "#ffffff" : "#1e293b",
      },

      text: {
        primary: mode === "light" ? "#111827" : "#e5e7eb",
        secondary: mode === "light" ? "#6b7280" : "#9ca3af",
      },
    },

    shape: {
      borderRadius: 12,
    },

    typography: {
      fontFamily: "Inter, Arial, sans-serif",

      h4: {
        fontWeight: 700,
        letterSpacing: "0.5px",
      },

      h6: {
        fontWeight: 600,
      },

      body1: {
        fontSize: "14px",
      },
    },

    shadows: [
      "none",
      "0px 1px 2px rgba(0,0,0,0.05)",
      "0px 2px 4px rgba(0,0,0,0.08)",
      "0px 4px 10px rgba(0,0,0,0.08)",
      ...Array(21).fill("0px 4px 10px rgba(0,0,0,0.08)"),
    ],

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "all 0.3s ease",
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            padding: "16px", // 🔥 better spacing
            borderRadius: 12,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: "none",
            fontWeight: 600,
            padding: "8px 16px",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderBottom:
              mode === "light"
                ? "1px solid #e5e7eb"
                : "1px solid #334155",
          },
        },
      },

      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRight: "none",
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            margin: "4px 8px",
          },
        },
      },
    },
  });
