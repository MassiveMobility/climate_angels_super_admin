"use client";
import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SyndicateDetailsLeft from "./SyndicateDetailsLeft";
import SyndicateDetailCard from "./SyndicateDetailCard";

//breadcrumbs
import AllBreadcrumbs from "@/components/BreadCrumbs/AllBreadcrumbs";
import { usePathname, useSearchParams } from "next/navigation";

const paths = [
  { label: "MY SYNDICATE", href: "/syndicates" },
  { label: "SYNDICATE DETAILS", href: "/syndicates/syndicate-details" },
];

const SyndicateDetails = () => {
  //for breadcrumbs
  const currPath = usePathname();

  return (
    <Box>
      <Grid container columnSpacing={"24px"} rowSpacing={"24px"} mt={"8px"}>
        <Grid item md={9} xs={12}>
          <Box
            sx={{
              paddingBottom: { md: "24px", xs: "12px" },
              paddingTop: { md: "0px", xs: "0px" },
            }}
          >
            <AllBreadcrumbs paths={paths} currentPath={currPath} />
          </Box>
          <SyndicateDetailsLeft dealType="live" 
            // syndicateDetails={syndicateDetails}
            // status={status}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <SyndicateDetailCard

          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SyndicateDetails;
