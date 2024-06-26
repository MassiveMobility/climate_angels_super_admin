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
} from "@mui/material";
import Heading from "../Utils/Heading";
import EditIcon from "@mui/icons-material/Edit";
import {
  syndicateAllRequestTableData,
  acceptedSyndicatesDataTable,
  rejectedSyndicatesDataTable,
} from "@/constants/data";
import SyndicateRequestModal from "@/components/Modals/SyndicateRequestModal";
import { useRouter } from "next/navigation";

type prop = {
  syndicateReqType: string;
};

const SyndicateRequestTable = ({ syndicateReqType }: prop) => {
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

  const handleClose = () => {
    setOpen(false);
  };

  const newRequests = syndicateAllRequestTableData.filter(
    (item) => item.status === "New"
  );
  const allRequests = syndicateAllRequestTableData;

  console.log(allRequests.length);


  const router = useRouter();
  const handleClickSyndicateDetails = (id:string) => {
    // router.push(`/syndicate/syndicate-details?id=${id}`);
    router.push("/syndicates/syndicate-details");
  };



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
      {newRequests.length > 0 && syndicateReqType === "pending" && (
        <Box>
          <Box sx={{marginBottom:"16px"}}>
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
                        Syndicate name
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Stage
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Industry
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Syndicate lead
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Status
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
                    {newRequests.map((row) => (
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
                              style={{
                                objectFit: "contain",
                                maxWidth: "48px",
                                width: "100%",
                              }}
                              src={row.startupLogo}
                              alt=""
                            />
                            <Typography
                              fontSize={"16px"}
                              fontFamily={"myThirdFont"}
                              color={"#484644"}
                            >
                              {row.syndicateName}
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
                              {row.stage}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            fontSize={"16px"}
                            fontFamily={"myThirdFont"}
                            color={"#484644"}
                          >
                            {row.industry}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#484644",
                            fontFamily: "myThirdFont",
                            fontSize: "16px",
                          }}
                        >
                          {row.syndicateLeadName}
                        </TableCell>
                        <TableCell>
                          <Typography
                            color={"#161514"}
                            fontFamily={"mySecondFont"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            sx={{
                              background:
                                row.status === "New"
                                  ? "#FFF1BD"
                                  : row.status === "Accepted"
                                  ? "#BDEED1"
                                  : "#FFD8D1",
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
            ...(syndicateReqType === "pending" && {
              marginBottom: "16px",
              marginTop: "64px",
            }),
          }}
        >
          <Heading
            text={syndicateReqType === "pending" ? "All requests" : ""}
          />
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
                fontSize:"16px"
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
                    <TableCell
                      sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                    >
                      Syndicate name
                    </TableCell>

                    {!(syndicateReqType === "rejected") && (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Stage
                      </TableCell>
                    )}

                    {!(syndicateReqType === "rejected") && (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Industry
                      </TableCell>
                    )}

                    {!(syndicateReqType === "rejected") && (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Syndicate lead
                      </TableCell>
                    )}

                    {syndicateReqType === "pending" ? (
                      <TableCell
                        sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                      >
                        Status
                      </TableCell>
                    ) : syndicateReqType === "accepted" ? (
                      <>
                        <TableCell
                          sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                        >
                          LPs
                        </TableCell>
                        <TableCell
                          sx={{ color: "#fff", fontFamily: "myThirdFont" }}
                        >
                          LPs
                        </TableCell>
                      </>
                    ) : null}

                    {syndicateReqType === "rejected" && (
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
                  {syndicateReqType === "pending"
                    ? allRequests
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
                                  style={{
                                    objectFit: "contain",
                                    maxWidth: "48px",
                                    width: "100%",
                                  }}
                                  src={row.startupLogo}
                                  alt=""
                                />
                                <Typography
                                  fontSize={"16px"}
                                  fontFamily={"myThirdFont"}
                                  color={"#484644"}
                                >
                                  {row.syndicateName}
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
                                  {row.stage}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography
                                fontSize={"16px"}
                                fontFamily={"myThirdFont"}
                                color={"#484644"}
                              >
                                {row.industry}
                              </Typography>
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#484644",
                                fontFamily: "myThirdFont",
                                fontSize: "16px",
                              }}
                            >
                              {row.syndicateLeadName}
                            </TableCell>
                            <TableCell>
                              <Typography
                                color={"#161514"}
                                fontFamily={"mySecondFont"}
                                fontSize={"16px"}
                                textAlign={"center"}
                                sx={{
                                  background:
                                    row.status === "New"
                                      ? "#FFF1BD"
                                      : row.status === "Accepted"
                                      ? "#BDEED1"
                                      : "#FFD8D1",
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
                    : syndicateReqType === "accepted"
                    ? acceptedSyndicatesDataTable
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
                                  style={{
                                    objectFit: "contain",
                                    maxWidth: "48px",
                                    width: "100%",
                                  }}
                                  src={row.startupLogo}
                                  alt=""
                                />
                                <Typography
                                  fontSize={"16px"}
                                  fontFamily={"myThirdFont"}
                                  color={"#484644"}
                                >
                                  {row.syndicateName}
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
                                  {row.stage}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography
                                fontSize={"16px"}
                                fontFamily={"myThirdFont"}
                                color={"#484644"}
                              >
                                {row.industry}
                              </Typography>
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#484644",
                                fontFamily: "myThirdFont",
                                fontSize: "16px",
                              }}
                            >
                              {row.syndicateLeadName}
                            </TableCell>
                            <TableCell>
                              <Typography
                                fontSize={"16px"}
                                fontFamily={"myThirdFont"}
                                color={"#484644"}
                              >
                                {row.investorNumberLP}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                fontSize={"16px"}
                                fontFamily={"myThirdFont"}
                                color={"#484644"}
                              >
                                {row.Deals}
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
                    : syndicateReqType === "rejected"
                    ? rejectedSyndicatesDataTable
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
                                  style={{
                                    objectFit: "contain",
                                    maxWidth: "48px",
                                    width: "100%",
                                  }}
                                  src={row.startupLogo}
                                  alt=""
                                />
                                <Typography
                                  fontSize={"16px"}
                                  fontFamily={"myThirdFont"}
                                  color={"#484644"}
                                >
                                  {row.syndicateName}
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
                                  {row.reasonForRejection}
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
                                  onClick={() => handleClickSyndicateDetails(row.id)}
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
        {allRequests.length >= 5 && (
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={allRequests.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Box>

      {/* Request Modal */}
      <SyndicateRequestModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        selectedRow={selectedRow}
      />
    </Box>
  );
};

export default SyndicateRequestTable;
