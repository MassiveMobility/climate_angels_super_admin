import { Typography } from "@mui/material";
import React from "react";

type prop = {
  text: string;
};
const Header = ({ text }: prop) => {
  return (
    <Typography
      fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem);"}
      color={"#0D0D0D"}
      mb={"24px"}
      fontFamily={"Montserrat, sans-serif"}
      fontWeight={"600"}
    >
      {text}
    </Typography>
  );
};

export default Header;
