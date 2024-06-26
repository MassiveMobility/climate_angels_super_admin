import React from 'react';
import DealsAndSchemesTable from "@/components/CustomTable/DealsAndSchemesTable"

const RejectedDeals = () => {
  return (
    <div>
      <DealsAndSchemesTable dealtype="rejected"/>
    </div>
  )
}

export default RejectedDeals
