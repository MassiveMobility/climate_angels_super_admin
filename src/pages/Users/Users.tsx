import React from 'react';
import CustomTabs from "@/components/CustomTabs/CustomTabs";
import NewUsers from '@/components/Users/NewUsers';
import OnboardingUsers from '@/components/Users/OnboardingUsers';
import VerifiedUsers from '@/components/Users/VerifiedUsers';
import Header from "@/components/Utils/Header";
import { Box } from "@mui/material";

const Users = () => {

  const numberOfTabs = [
    {
      id: 0,
      label: "New Users",
      component: <NewUsers />,
    },
    {
      id: 1,
      label: "Onboarding",
      component: <OnboardingUsers />,
    },
    {
      id: 2,
      label: "Verified Users",
      component: <VerifiedUsers />,
    },
  ];

  return (
    <main>
      <Box sx={{ padding: { md: "32px", xs: "32px 0px" } }}>
        <Header text="Users" />
        <CustomTabs tabs={numberOfTabs} />
      </Box>
    </main>
  );
};

export default Users;