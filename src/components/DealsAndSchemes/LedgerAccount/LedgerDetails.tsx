"use client";
import React, { useState } from "react";
import CommittedAccountTable from "@/components/CustomTable/CommittedAccountTable";
import { Box, Typography } from "@mui/material";
import Heading from "@/components/Utils/Heading";
import Header from "@/components/Utils/Header";
import { ledgerCompanyData } from "@/constants/data";

const LedgerDetails = () => {
  // const [selectedRowData, setSelectedRowData] = useState(null);

  // const handleRowSelect = (rowData) => {
  //   setSelectedRowData(rowData);
  // };

  return (
    <Box>
      <Box>
  
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",marginTop:"24px",
          }}
        >
          <Box>
            <img
              style={{ objectFit: "contain" }}
              src="/images/nilogo.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Typography
              fontSize={"18px"}
              fontFamily={"mySecondFont"}
              color={"#161514"}
            >
              Ace Green Recycling
            </Typography>
            <Typography
              fontSize={"14px"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"400"}
              color={"#484644"}
            >
              Battery Recycling
            </Typography>
            <Typography
              fontSize={"14px"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"400"}
              color={"#484644"}
            >
              Bengaluru | 2023
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: "24px" }}>
        <Header text="Scheme Ledger Account" />
      </Box>

      <Box>
        <Box sx={{ marginBottom: "16px" }}>
          <Heading text="Capital committed account" />
        </Box>
        <CommittedAccountTable />
      </Box>

      <Box>
        <Box sx={{ marginTop: "64px" }}>
          <Heading text="Mark to Market" />
        </Box>
      </Box>
    </Box>
  );
};

export default LedgerDetails;
