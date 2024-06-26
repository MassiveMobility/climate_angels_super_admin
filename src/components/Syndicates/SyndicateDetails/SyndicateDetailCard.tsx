import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

type Prop = {
  text: string;

  syndicateDetails: any;
  status: any;
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const SyndicateDetailCard = () => {
  const stats = [
    {
      label: "Total investors",
      value: "111",
    },
    { label: "Total startups invested in", value: 2 },
    { label: "Live Deals", value: "02" },
    {
      label: "Deals in past 12 months",
      value: "05",
    },
    { label: "Invested amount", value: 10000 },
    { label: "Carry", value: 112 },
    { label: "Min. Investment", value: "₹2,00,000" },
    { label: "TVPI", value: 112 },
    { label: "DPI", value: 112 },
    { label: "IRR", value: 112 },
    { label: "Stage", value: "Seed" },
    { label: "Industry", value: 112 },
    { label: "Date created", value: "27/05/2023" },
  ];

  return (
    <Box
      sx={{
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        border: "1px solid #c0c0c0",
        borderRadius: "12px",
      }}
    >
      <Typography
        color={"#161514"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
      >
        Syndicate stats
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {stats.map(({ label, value }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E8E8E8",
              paddingBottom: "4px",
            }}
          >
            <Typography
              color={"#484644"}
              fontSize={"14px"}
              fontFamily={"myThirdFont"}
            >
              {label}
            </Typography>
            <Typography
              color={"#484644"}
              fontSize={"16px"}
              fontFamily={"mySecondFont"}
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SyndicateDetailCard;
