import { Grid } from "@mui/material";
import React from "react";
import DashBoardLeft from "@/components/Dashboard/DashBoardLeft";
import DashBoardRight from "@/components/Dashboard/DashBoardRight";

const DashBoard = () => {
  return (
    <Grid container columnSpacing={4} rowSpacing={4}>
      <Grid item md={9}>
        <DashBoardLeft />
      </Grid>
      <Grid item md={3}>
        <DashBoardRight />
      </Grid>
    </Grid>
  );
};

export default DashBoard;
