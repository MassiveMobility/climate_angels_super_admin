"use client";
import React, { useState } from "react";
import { Box, Button, Grid, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { newUserData } from "@/constants/data";
import { onboardingUserData } from "@/constants/data";
import { verifiedUserData } from "@/constants/data";

type prop = {
  userType: any;
};
const UsersTable = ({ userType }: prop) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Box sx={{ overflow: "auto" }}>
          <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ background: "#484644" }}>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    User ID
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Email ID
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Category
                  </TableCell>

                  {/* For Onboarding and verified Users-removing date col */}
                  {!(
                    userType === "onboardingUser" || userType === "verifiedUser"
                  ) && (
                    <TableCell
                      sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                    >
                      Date Joined
                    </TableCell>
                  )}

                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Current status
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontFamily: "myThirdFont",
                      textAlign: "center",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userType === "newUser"
                  ? newUserData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.userID}
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <a href={row.userLinkedin}>
                              <img
                                style={{ objectFit: "contain" }}
                                src="/images/link.png"
                                alt=""
                                width={"24px"}
                                height={"24px"}
                              />
                            </a>
                            <Typography
                              fontSize={"16px"}
                              fontFamily={"myThirdFont"}
                              color={"#484644"}
                            >
                              {row.userName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              fontSize={"16px"}
                              fontFamily={"myThirdFont"}
                              color={"#484644"}
                            >
                              {row.userEmail}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.userCategory}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.dateJoined}
                        </TableCell>
                        <TableCell>
                          <Typography
                              color={
                                row.status === "Payment made"
                                  ? "#07331F" 
                                  : "#161514" 
                              }
                            fontFamily={"mySecondFont"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            sx={{
                              background:
                                row.status === "Call scheduled"
                                  ? "#FFF1BD"
                                  : row.status === "Payment made"
                                  ? "#BDEED1"
                                  : "#DED9D4",
                            }}
                            borderRadius={"50px"}
                            padding={"4px 16px"}
                          >
                            {row.status}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                            textAlign: "-webkit-center",
                          }}
                        >
                          <Button
                            sx={{
                              padding: "4px",
                              border: "1px solid #c0c0c0",
                              borderRadius: "4px",
                              width: "32px",
                              height: "32px",
                              minWidth: "32px !important",
                            }}
                            // onClick={() => handleClickOpen(row)}
                            // onClick={() => handleChnange()}
                          >
                            <EditIcon
                              sx={{
                                color: "#186E47",
                              }}
                            />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : userType === "onboardingUser"
                  ? onboardingUserData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.userID}
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <a href={row.userLinkedin}>
                              <img
                                style={{ objectFit: "contain" }}
                                src="/images/link.png"
                                alt=""
                                width={"24px"}
                                height={"24px"}
                              />
                            </a>
                            <Typography
                              fontSize={"16px"}
                              fontFamily={"myThirdFont"}
                              color={"#484644"}
                            >
                              {row.userName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              fontSize={"16px"}
                              fontFamily={"myThirdFont"}
                              color={"#484644"}
                            >
                              {row.userEmail}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.userCategory}
                        </TableCell>
                        <TableCell>
                          <Typography
                              color={
                                row.status === "Form Filled"
                                  ? "#07331F" 
                                  : "#161514" 
                              }
                            fontFamily={"mySecondFont"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            sx={{
                              background:
                                row.status === "Call scheduled"
                                  ? "#FFF1BD"
                                  : row.status === "Form Filled"
                                  ? "#BDEED1"
                                  : "#DED9D4",
                            }}
                            borderRadius={"50px"}
                            padding={"4px 16px"}
                          >
                            {row.status}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                            textAlign: "-webkit-center",
                          }}
                        >
                          <Button
                            sx={{
                              padding: "4px",
                              border: "1px solid #c0c0c0",
                              borderRadius: "4px",
                              width: "32px",
                              height: "32px",
                              minWidth: "32px !important",
                            }}
                            // onClick={() => handleClickOpen(row)}
                            // onClick={() => handleChnange()}
                          >
                            <EditIcon
                              sx={{
                                color: "#186E47",
                              }}
                            />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : userType === "verifiedUser"
                  ? verifiedUserData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.userID}
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <a href={row.userLinkedin}>
                              <img
                                style={{ objectFit: "contain" }}
                                src="/images/link.png"
                                alt=""
                                width={"24px"}
                                height={"24px"}
                              />
                            </a>
                            <Typography
                              fontSize={"16px"}
                              fontFamily={"myThirdFont"}
                              color={"#484644"}
                            >
                              {row.userName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              fontSize={"16px"}
                              fontFamily={"myThirdFont"}
                              color={"#484644"}
                            >
                              {row.userEmail}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.userCategory}
                        </TableCell>
                        <TableCell>
                          <Typography
                            color={"#07331F"}
                            fontFamily={"mySecondFont"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            sx={{
                              background:"#BDEED1"
                            }}
                            borderRadius={"50px"}
                            padding={"4px 16px"}
                          >
                            {row.status}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                            textAlign: "-webkit-center",
                          }}
                        >
                          <Button
                            sx={{
                              padding: "4px",
                              border: "1px solid #c0c0c0",
                              borderRadius: "4px",
                              width: "32px",
                              height: "32px",
                              minWidth: "32px !important",
                            }}
                            // onClick={() => handleClickOpen(row)}
                            // onClick={() => handleChnange()}
                          >
                            <EditIcon
                              sx={{
                                color: "#186E47",
                              }}
                            />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </TableContainer>
    </>
  );
};

export default UsersTable;
