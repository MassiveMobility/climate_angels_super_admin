"use client";
import React, { useState } from "react";
import { Box, Button, Grid, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import UsersTable from "../CustomTable/UsersTable";

const VerifiedUsers = () => {

    const [age, setAge] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };


    return (
        <>
          {/* Search+Filter Func */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { md: "row", xs: "column" },
              marginTop: "32px",
              marginBottom: "16px",
              gap: { md: "0px", xs: "16px" },
            }}
          >
            <Box sx={{ display: "flex", gap: "16px", width: { xs: "100%" } }}>
              <input
                className="headerInput"
                style={{
                  border: "1px solid #c0c0c0",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  outline: "none",
                  color: "#9C9C9B",
                }}
                placeholder="Search by company name..."
                type="text"
              />
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ borderRadius: "8px", width: { md: "136px", xs: "100%" } }}
              >
                <MenuItem value="">
                  <em>Sort</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Box>
    
          {/* Table */}

          <Box><UsersTable userType="verifiedUser"/></Box>
        </>
      );
}

export default VerifiedUsers
