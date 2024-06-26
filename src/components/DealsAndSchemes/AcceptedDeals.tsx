import React from 'react';
import DealsAndSchemesTable from "@/components/CustomTable/DealsAndSchemesTable"

const AcceptedDeals = () => {
  return (
    <div>
      <DealsAndSchemesTable dealtype="accepted"/>
    </div>
  )
}

export default AcceptedDeals
