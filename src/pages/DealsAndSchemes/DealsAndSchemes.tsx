import React from 'react';
import CustomTabs from "@/components/CustomTabs/CustomTabs";
import Header from "@/components/Utils/Header";
import { Box } from "@mui/material";

import Deals from '@/components/DealsAndSchemes/Deals';
import AcceptedDeals from '@/components/DealsAndSchemes/AcceptedDeals';
import RejectedDeals from '@/components/DealsAndSchemes/RejectedDeals';


const DealsAndSchemes = () => {
    const numberOfTabs = [
        {
          id: 0,
          label: "Requests",
          component: <Deals />,
        },
        {
          id: 1,
          label: "Accepted deals",
          component: <AcceptedDeals />,
        },
        {
          id: 2,
          label: "Rejected deals",
          component: <RejectedDeals />,
        },
      ];

  return (
    <main>
      <Box sx={{ padding: { md: "32px", xs: "32px 0px" } }}>
        <Header text="Deals & Schemes" />
        <CustomTabs tabs={numberOfTabs} />
      </Box>
    </main>
  )
}

export default DealsAndSchemes
