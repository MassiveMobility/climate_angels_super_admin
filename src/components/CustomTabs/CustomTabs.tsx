"use client";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type Tab = {
  id: number;
  label: string;
  component: React.ReactNode;
};
type Props = {
  tabs: Tab[];
};

const CustomTabs = ({ tabs }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: { xs: 360, sm: 480, md: "100%" }, width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              sx={{
                fontFamily: "mySecondFont",
                fontSize: { md: "16px", xs: "14px" },
                color: "#484644 !important",
              }}
              label={tab.label}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab) => (
        <CustomTabPanel key={tab.id} value={value} index={tab.id}>
          {tab.component}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTabs;
