import { Typography } from "@mui/material";
import React from "react";

type prop = {
  text: string;
};
const Heading = ({ text }: prop) => {
  return (
    <Typography
      fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
      color={"#161514"}
      fontFamily={"Montserrat, sans-serif"}
      fontWeight={"600"}
    >
      {text}
    </Typography>
  );
};

export default Heading;
