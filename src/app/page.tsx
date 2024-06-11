"use client";
import DashBoard from "@/pages/DashBoard/DashBoard";
import "./globals.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{ padding: { md: "32px 48px 32px 32px", xs: "32px 0px 0px 0px" } }}
    >
      <DashBoard />
    </Box>
  );
}
