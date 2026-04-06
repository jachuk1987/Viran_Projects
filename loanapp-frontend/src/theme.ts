import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: "#6366f1", // Indigo (fintech style)
            },
            secondary: {
                main: "#3b82f6", // Blue
            },
            background: {
                default: mode === "light" ? "#f5f7fa" : "#0f172a",
                paper: mode === "light" ? "#ffffff" : "#1e293b",
            },
        },

        shape: {
            borderRadius: 12,
        },

        typography: {
            fontFamily: "Inter, Arial, sans-serif",

            h6: {
                fontWeight: 600,
            },

            h4: {
                fontWeight: 700,
            },
        },

        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        padding: "8px",
                    },
                },
            },

            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                        textTransform: "none",
                    },
                },
            },
        },
    });