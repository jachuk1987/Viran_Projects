import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      
      {/* ✅ Sidebar */}
      <Sidebar />

      {/* ✅ Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "all 0.3s ease",
        }}
      >
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Page Content */}
        <Box
          sx={{
            p: 3,
            backgroundColor: "background.default", // ✅ use theme
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}