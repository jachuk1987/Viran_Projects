import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  return (
    <Box display="flex">
      <Sidebar />

      <Box flexGrow={1}>
        <Navbar />

        <Box p={3}>{children}</Box>
      </Box>
    </Box>
  );
}