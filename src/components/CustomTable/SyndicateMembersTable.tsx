import React from "react";
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

import { syndicateMembersTableData } from "@/constants/data"; 

const SyndicateMembersTable = () => {
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
                {syndicateMembersTableData.map((row) => (
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
                        textAlign: "-webkit-center",
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </TableContainer>
    </>
  );
};

export default SyndicateMembersTable;
