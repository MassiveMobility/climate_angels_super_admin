"use client";

import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  TablePagination,
  Typography,
  Button,
  MenuItem,
  Chip,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Heading from "../Utils/Heading";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
  dealTableData,
  acceptedDealTableData,
  rejectedDealTableData,
} from "@/constants/data";
import DealsAndSchemesRequestModal from "@/components/Modals/DealsAndSchemesRequestModal";
import { useRouter } from "next/navigation";

type prop = {
  dealtype: string;
};

const DealsAndSchemesTable = ({ dealtype }: prop) => {
  // pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Request Modal
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleClickOpen = (row: any) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const router = useRouter();
  const handleClickOpenLedgerAccount = (id:string) => {
    router.push("/deals&schemes/ledger-account");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newDealRequests = dealTableData.filter(
    (item) => item.approvalStatus === "New"
  );
  const allDealRequests = dealTableData;

  console.log(allDealRequests.length);

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginTop: "16px",
      }}
    >
      {newDealRequests.length > 0 && dealtype === "pending" && (
        <Box>
          <Box sx={{ marginBottom: "16px" }}>
            <Heading text="New requests" />
          </Box>

          {/* Invite - Table */}
          <TableContainer component={Paper}>
            <Box sx={{ overflow: "auto" }}>
              <Box
                sx={{ width: "100%", display: "table", tableLayout: "fixed" }}
              >
                <Table sx={{ minWidth: 850 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ background: "#484644" }}>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Request Date
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Company name
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Deal creator
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Approval status
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#fff",
                          fontFamily: "myThirdFont",
                          textAlign: "center",
                        }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {newDealRequests.map((row) => (
                      <TableRow key={row.id}>
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
                              {row.requestDate}
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
                            <img
                              style={{ objectFit: "contain" }}
                              src={row.logo}
                              alt=""
                            />
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              }}
                            >
                              <Typography
                                fontSize={"18px"}
                                fontFamily={"mySecondFont"}
                                color={"#161514"}
                              >
                                {row.companyName}
                              </Typography>
                              <Typography
                                fontSize={"14px"}
                                fontFamily={"Montserrat, sans-serif"}
                                fontWeight={"400"}
                                color={"#484644"}
                              >
                                {row.companyIndustry}
                              </Typography>
                              <Typography
                                fontSize={"14px"}
                                fontFamily={"Montserrat, sans-serif"}
                                fontWeight={"400"}
                                color={"#484644"}
                              >
                                {row.companyLocation}
                              </Typography>
                            </Box>
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
                            <img
                              style={{ objectFit: "contain" }}
                              src={row.dealCreatorPic}
                              alt=""
                            />
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              }}
                            >
                              <Typography
                                fontSize={"18px"}
                                fontFamily={"mySecondFont"}
                                color={"#161514"}
                              >
                                {row.dealCreatorName}
                              </Typography>
                              <Typography
                                fontSize={"14px"}
                                fontFamily={"Montserrat, sans-serif"}
                                fontWeight={"400"}
                                color={"#484644"}
                              >
                                {row.dealCreatorPosition}
                              </Typography>
                              <Typography
                                fontSize={"14px"}
                                fontFamily={"Montserrat, sans-serif"}
                                fontWeight={"400"}
                                color={"#484644"}
                              >
                                {row.dealCreatorSyndicate}
                              </Typography>
                            </Box>
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
                                row.approvalStatus === "New"
                                  ? "#FFF1BD"
                                  : row.approvalStatus === "Accepted"
                                  ? "#BDEED1"
                                  : "#FFD8D1",
                            }}
                            borderRadius={"50px"}
                            padding={"4px 16px"}
                          >
                            {row.approvalStatus}
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
                                padding: "8px 24px",
                                borderRadius: "4px",
                                border: "1px solid #186E47",
                                color: "#186E47",
                                fontFamily: "myThirdFont",
                                maxWidth: "116px",
                                width: "100%",
                              }}
                            >
                              View
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
                              onClick={() => handleClickOpen(row)}
                            >
                              <EditIcon
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
        </Box>
      )}

      <Box>
        <Box
          sx={{
            ...(dealtype === "pending" && {
              marginBottom: "16px",
              marginTop: "64px",
            }),
          }}
        >
          <Heading text={dealtype === "pending" ? "All requests" : ""} />
        </Box>

        {/* Search-SortFilter */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
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
                fontFamily: "mySecondFont",
                fontSize: "16px",
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

        {/* Invite - Table */}
        <TableContainer component={Paper}>
          <Box sx={{ overflow: "auto" }}>
            <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
              <Table sx={{ minWidth: 850 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ background: "#484644" }}>
                    {dealtype === "pending" && (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Request Date
                      </TableCell>
                    )}

                    <TableCell
                      sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                    >
                      Company name
                    </TableCell>

                    <TableCell
                      sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                    >
                      Deal creator
                    </TableCell>

                    {dealtype === "accepted" && (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Ledger
                      </TableCell>
                    )}

                    {dealtype === "pending" ? (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Approval status
                      </TableCell>
                    ) : dealtype === "accepted" ? (
                      <>
                        <TableCell
                          sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                        >
                          Deal Status
                        </TableCell>
                      </>
                    ) : null}

                    {dealtype === "rejected" && (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Reason for Rejection
                      </TableCell>
                    )}

                    <TableCell
                      sx={{
                        color: "#fff",
                        fontFamily: "myThirdFont",
                        textAlign: "center",
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dealtype === "pending"
                    ? allDealRequests
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow key={row.id}>
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
                                  {row.requestDate}
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
                                <img
                                  style={{ objectFit: "contain" }}
                                  src={row.logo}
                                  alt=""
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                  }}
                                >
                                  <Typography
                                    fontSize={"18px"}
                                    fontFamily={"mySecondFont"}
                                    color={"#161514"}
                                  >
                                    {row.companyName}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.companyIndustry}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.companyLocation}
                                  </Typography>
                                </Box>
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
                                <img
                                  style={{ objectFit: "contain" }}
                                  src={row.dealCreatorPic}
                                  alt=""
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                  }}
                                >
                                  <Typography
                                    fontSize={"18px"}
                                    fontFamily={"mySecondFont"}
                                    color={"#161514"}
                                  >
                                    {row.dealCreatorName}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.dealCreatorPosition}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.dealCreatorSyndicate}
                                  </Typography>
                                </Box>
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
                                    row.approvalStatus === "New"
                                      ? "#FFF1BD"
                                      : row.approvalStatus === "Accepted"
                                      ? "#BDEED1"
                                      : "#FFD8D1",
                                }}
                                borderRadius={"50px"}
                                padding={"4px 16px"}
                              >
                                {row.approvalStatus}
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
                                    padding: "8px 24px",
                                    borderRadius: "4px",
                                    border: "1px solid #186E47",
                                    color: "#186E47",
                                    fontFamily: "myThirdFont",
                                    maxWidth: "116px",
                                    width: "100%",
                                  }}
                                >
                                  View
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
                                  onClick={() => handleClickOpen(row)}
                                >
                                  <EditIcon
                                    sx={{
                                      color: "#186E47",
                                    }}
                                  />
                                </Button>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))
                    : dealtype === "accepted"
                    ? acceptedDealTableData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: "12px",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  style={{ objectFit: "contain" }}
                                  src={row.logo}
                                  alt=""
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                  }}
                                >
                                  <Typography
                                    fontSize={"18px"}
                                    fontFamily={"mySecondFont"}
                                    color={"#161514"}
                                  >
                                    {row.companyName}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.companyIndustry}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.companyLocation}
                                  </Typography>
                                </Box>
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
                                <img
                                  style={{ objectFit: "contain" }}
                                  src={row.dealCreatorPic}
                                  alt=""
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                  }}
                                >
                                  <Typography
                                    fontSize={"18px"}
                                    fontFamily={"mySecondFont"}
                                    color={"#161514"}
                                  >
                                    {row.dealCreatorName}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.dealCreatorPosition}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.dealCreatorSyndicate}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "start",
                                  alignItems: "center",
                                  justifyContent: "start",
                                }}
                                onClick={() => handleClickOpenLedgerAccount(row.id)}
                              >
                                <RemoveRedEyeOutlinedIcon sx={{color:"#186E47"}}
                                
                                />

                                <Typography
                                  color={"#186E47"}
                                  fontSize={"16px"}
                                  fontFamily={"mySecondFont"}
                                  sx={{
                                    textDecoration: "underline",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    marginLeft: "4px",
                                  }}
                                >
                                  Ledger
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
                              <Chip
                                icon={
                                  <FiberManualRecordIcon
                                    fontSize="small"
                                    sx={{ color: "#186E47 !important" }}
                                  />
                                }
                                label={row.dealStatus}
                                sx={{
                                  bgcolor: "#E8F0EB",
                                  color: "#186E47",
                                  fontFamily: "myFirstFont",
                                }}
                              />
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
                                    padding: "8px 24px",
                                    borderRadius: "4px",
                                    border: "1px solid #186E47",
                                    color: "#186E47",
                                    fontFamily: "myThirdFont",
                                    maxWidth: "116px",
                                    width: "100%",
                                  }}
                                >
                                  View
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
                                  onClick={() => handleClickOpen(row)}
                                >
                                  <EditIcon
                                    sx={{
                                      color: "#186E47",
                                    }}
                                  />
                                </Button>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))
                    : dealtype === "rejected"
                    ? rejectedDealTableData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: "12px",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  style={{ objectFit: "contain" }}
                                  src={row.logo}
                                  alt=""
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                  }}
                                >
                                  <Typography
                                    fontSize={"18px"}
                                    fontFamily={"mySecondFont"}
                                    color={"#161514"}
                                  >
                                    {row.companyName}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.companyIndustry}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.companyLocation}
                                  </Typography>
                                </Box>
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
                                <img
                                  style={{ objectFit: "contain" }}
                                  src={row.dealCreatorPic}
                                  alt=""
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                  }}
                                >
                                  <Typography
                                    fontSize={"18px"}
                                    fontFamily={"mySecondFont"}
                                    color={"#161514"}
                                  >
                                    {row.dealCreatorName}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.dealCreatorPosition}
                                  </Typography>
                                  <Typography
                                    fontSize={"14px"}
                                    fontFamily={"Montserrat, sans-serif"}
                                    fontWeight={"400"}
                                    color={"#484644"}
                                  >
                                    {row.dealCreatorSyndicate}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: "12px",
                                  alignItems: "center",
                                  width: "100%",
                                  maxWidth: "300px",
                                }}
                              >
                                <Typography
                                  fontSize={"16px"}
                                  fontFamily={"myThirdFont"}
                                  color={"#484644"}
                                >
                                  {row.dealRejectReason}
                                </Typography>
                              </Box>
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
                                    padding: "8px 24px",
                                    borderRadius: "4px",
                                    border: "1px solid #186E47",
                                    color: "#186E47",
                                    fontFamily: "myThirdFont",
                                    maxWidth: "116px",
                                    width: "100%",
                                  }}
                                >
                                  View
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
                                  onClick={() => handleClickOpen(row)}
                                >
                                  <EditIcon
                                    sx={{
                                      color: "#186E47",
                                    }}
                                  />
                                </Button>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))
                    : null}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </TableContainer>
        {/* Pagination */}
        {allDealRequests.length >= 5 && (
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={allDealRequests.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Box>

      {/* Request Modal */}
      <DealsAndSchemesRequestModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        selectedRow={selectedRow}
      />
    </Box>
  );
};

export default DealsAndSchemesTable;
