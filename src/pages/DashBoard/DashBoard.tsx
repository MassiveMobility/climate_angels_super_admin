import { Grid } from "@mui/material";
import React from "react";

const DashBoard = () => {
  return (
    <Grid container>
      <Grid item md={9}>
        Left
      </Grid>
      <Grid item md={3}>
        Right
      </Grid>
    </Grid>
  );
};

export default DashBoard;
