import React from 'react';
import CustomTabs from "@/components/CustomTabs/CustomTabs";
import Header from "@/components/Utils/Header";
import { Box } from "@mui/material";
import Requests from '@/components/Syndicates/Requests';
import AcceptedSyndicates from '@/components/Syndicates/AcceptedSyndicates';
import RejectedSyndicates from '@/components/Syndicates/RejectedSyndicates';

const Syndicates = () => {
    const numberOfTabs = [
        {
          id: 0,
          label: "Requests",
          component: <Requests />,
        },
        {
          id: 1,
          label: "Accepted Syndicates",
          component: <AcceptedSyndicates />,
        },
        {
          id: 2,
          label: "Rejected Syndicates",
          component: <RejectedSyndicates />,
        },
      ];

      
  return (
    <main>
      <Box sx={{ padding: { md: "32px", xs: "32px 0px" } }}>
        <Header text="Syndicates" />
        <CustomTabs tabs={numberOfTabs} />
      </Box>
    </main>
  );
}

export default Syndicates
