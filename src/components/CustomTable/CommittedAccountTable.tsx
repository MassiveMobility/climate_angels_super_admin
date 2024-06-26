"use client";
import React, {useState} from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

import { committedAccountTableData } from "@/constants/data";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LedgerAccountTableRequestModal from "../Modals/LedgerAccountTableRequestModal";

const CommittedAccountTable = () => {

    // Request Modal
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleClickOpen = (row: any) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <TableContainer component={Paper}>
        <Box sx={{ overflow: "auto" }}>
          <Box
            sx={{
              width: "100%",
              display: "table",
              tableLayout: "fixed",
            }}
          >
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ background: "#484644" }}>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Drop down amount
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Invested amount
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Fee type
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Share class of units
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontFamily: "myThirdFont" }}>
                    Status
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
                {committedAccountTableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell
                      sx={{
                        color: "#484644",
                        fontFamily: "myThirdFont",
                        fontSize: "16px",
                      }}
                    >
                      {row.name}
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
                          {row.dropdownAmount}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography
                          fontSize={"16px"}
                          fontFamily={"myThirdFont"}
                          color={"#484644"}
                        >
                          {row.investedAmount}
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
                      {row.feeType}
                    </TableCell>

                    <TableCell>
                      <Box>
                        <Typography
                          fontSize={"16px"}
                          fontFamily={"myThirdFont"}
                          color={"#484644"}
                        >
                          "{row.ShareClassOfUnits}" class
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Typography
                        color={"#161514"}
                        fontFamily={"mySecondFont"}
                        fontSize={"16px"}
                        textAlign={"center"}
                        sx={{
                          background:
                            row.status === "Invested"
                              ? "#BDEED1"
                              : row.status === "Cancelled"
                              ? "#FFD8D1"
                              : row.status === "Partially Invested"
                              ? "#DED9D4"
                              : "#FFF1BD",
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
                      <Box
                        sx={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          sx={{
                            padding: "20px",
                            border: "1px solid #c0c0c0",
                            borderRadius: "4px",
                            width: "32px",
                            height: "32px",
                            minWidth: "32px !important",
                          }}
                          onClick={() => handleClickOpen(row)}
                        >
                          <EditIcon
                            sx={{
                              color: "#186E47",
                            }}
                          />
                        </Button>

                        <Button
                          sx={{
                            padding: "20px",
                            border: "1px solid #c0c0c0",
                            borderRadius: "4px",
                            width: "32px",
                            height: "32px",
                            minWidth: "32px !important",
                          }}
                        >
                          <AccountCircleOutlinedIcon
                            sx={{
                              color: "#186E47",
                            }}
                          />
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </TableContainer>

            {/* Request Modal */}
            <LedgerAccountTableRequestModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default CommittedAccountTable;
