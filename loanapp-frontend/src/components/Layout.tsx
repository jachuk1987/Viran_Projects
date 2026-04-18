import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  toggleTheme: () => void; // ✅ add this
};

export default function Layout({ children, toggleTheme }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* ✅ pass to navbar */}
        <Navbar toggleTheme={toggleTheme} />

        <Box
          sx={{
            p: 3,
            backgroundColor: "background.default",
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
