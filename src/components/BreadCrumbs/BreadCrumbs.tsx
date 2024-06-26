"use client";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type CustomSeparatorProps = {
  currentURLPath?: any;
};

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function CustomSeparator({
  currentURLPath,
}: CustomSeparatorProps) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={currentURLPath || "/material-ui/getting-started/installation/"}
      onClick={handleClick}
    >
      Core
    </Link>,

    <Link
    underline="hover"
    key="2"
    color="inherit"
    href={currentURLPath || "/material-ui/getting-started/installation/"}
    onClick={handleClick}
  >
      {currentURLPath}
  </Link>
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
