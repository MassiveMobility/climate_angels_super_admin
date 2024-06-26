import React from 'react'
import Heading from "@/components/Utils/Heading";
import { Box } from "@mui/material";
// import AllRequestTable from "@/components/CustomTable/AllRequestTable";
import SyndicateRequestTable from "@/components/CustomTable/SyndicateRequestTable";

const RejectedSyndicates = () => {
  return (
    <Box>
     
      <SyndicateRequestTable syndicateReqType="rejected" />
      {/* <AllRequestTable /> */}
    </Box>
  )
}

export default RejectedSyndicates
