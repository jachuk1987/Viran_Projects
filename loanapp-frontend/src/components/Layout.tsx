import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box display="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box flexGrow={1}>
        <Navbar />

        <Box
          p={3}
          sx={{
            backgroundColor: "#f5f6fa",
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}