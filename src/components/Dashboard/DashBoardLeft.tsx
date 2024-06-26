
import React from "react";
import { Box, Button, MenuItem, Grid, Typography } from "@mui/material";
import DoughnutChart from "../Charts/DoughnutChart";
import InvestmentChart from "../Charts/InvestmentChart";
import Header from "@/components/Utils/Header";
import Heading from "@/components/Utils/Heading";
import DashData from "./DashData";
const DashBoardLeft = () => {
  return (
    <Box>
      <Header text={"Dashboard"} />

      {/* Total Amount Invested Grid */}
      <Box sx={{ marginTop: "24px" }}>
        <Grid container columnSpacing={"16px"} rowSpacing={"16px"}>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                padding: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "12px",
                boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
                background:
                  " linear-gradient(0deg, rgba(232, 240, 235, 0.50) 0%, rgba(232, 240, 235, 0.50) 100%), #FFF",
              }}
            >
              <Typography
                color={"#484644"}
                fontSize={"clamp(0.875rem, 0.8491rem + 0.1258vw, 1rem)"}
                fontFamily={"myThirdFont"}
              >
                Total amount invested
              </Typography>
              <Typography
                color={"#161514"}
                fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                fontFamily={"Montserrat, sans-serif"}
                fontWeight={"600"}
              >
                ₹25,52,00,00
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                padding: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "12px",
                boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
                background:
                  " linear-gradient(0deg, rgba(232, 240, 235, 0.50) 0%, rgba(232, 240, 235, 0.50) 100%), #FFF",
              }}
            >
              <Typography
                color={"#484644"}
                fontSize={"16px"}
                fontFamily={"myThirdFont"}
              >
                Live deals
              </Typography>
              <Typography
                color={"#161514"}
                fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                fontFamily={"Montserrat, sans-serif"}
                fontWeight={"600"}
              >
                08
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                padding: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "12px",
                boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
                background:
                  " linear-gradient(0deg, rgba(232, 240, 235, 0.50) 0%, rgba(232, 240, 235, 0.50) 100%), #FFF",
              }}
            >
              <Typography
                color={"#484644"}
                fontSize={"16px"}
                fontFamily={"myThirdFont"}
              >
                Total Deals
              </Typography>
              <Typography
                color={"#161514"}
                fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                fontFamily={"Montserrat, sans-serif"}
                fontWeight={"600"}
              >
                125
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/*InvestMent Chart - Bar Graph*/}
      <Box
        sx={{
          padding: "24px",
          // borderRadius: "12px",
          // border: "1px solid #C0C0C0",
          marginTop: { md: "48px", xs: "16px" },
          // width:"100%"
        }}
      >
        <InvestmentChart />
      </Box>

      {/* DashBoard Stats */}
      <Box sx={{ marginTop: { md: "64px", xs: "4px" } }}>
        <DashData />
      </Box>

      {/* Sectors wise investment */}
      <Box
        sx={{
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid #C0C0C0",
          marginTop: "48px",
        }}
      >
        <Heading text={"   Sectors wise investment"} />
        <DoughnutChart />
      </Box>
    </Box>
  );
};

export default DashBoardLeft;
