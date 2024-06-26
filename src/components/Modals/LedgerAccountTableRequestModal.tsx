"use client";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Button, Typography, MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

type prop = {
  open: any;
  handleClickOpen: any;
  handleClose: any;
  selectedRow: any;
};

const LedgerAccountTableRequestModal = ({
  open,
  handleClickOpen,
  handleClose,
  selectedRow,
}: prop) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const [selectedConfirmValue, setSelectedConfirmValue] = React.useState("a");

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeConfirmStatus = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedConfirmValue(event.target.value);
  };

  //Dropdown States and Functions-handler
  const [classUnit, setClassUnit] = useState("");
  const [status, setStatus] = useState("");
  const [feesType, setFeesType] = useState("");

  const handleChangeClassUnits = (event: SelectChangeEvent) => {
    setClassUnit(event.target.value);
  };
  const handleChangeStatusType = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  const handleChangeFeesType = (event: SelectChangeEvent) => {
    setFeesType(event.target.value);
  };

  const totalFees =
    parseFloat(selectedRow?.investedAmount.replace(/[^\d.-]/g, "")) *
    (parseFloat(selectedRow?.feeType) / 100);
  console.log(totalFees);

  return (
    <Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Box
            sx={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Basic Details */}
            <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #E8E8E8",
                }}
              >
                <img
                  style={{
                    objectFit: "contain",
                    maxWidth: "80px",
                    width: "100%",
                  }}
                  src={selectedRow?.logo}
                  alt=""
                />
              </Box>
              <Box>
                <Typography
                  fontSize={"18px"}
                  fontFamily={"mySecondFont"}
                  color={"#484644"}
                >
                  {selectedRow?.name}
                </Typography>
                <Typography
                  fontSize={"14px"}
                  fontFamily={"myThirdFont"}
                  color={"#484644"}
                >
                  {selectedRow?.email}
                </Typography>
                <Typography
                  fontSize={"14px"}
                  fontFamily={"myThirdFont"}
                  color={"#484644"}
                >
                  +91 {selectedRow?.mobile}
                </Typography>
              </Box>
            </Box>

            {/* Share Class UNit - DropDown */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"myThirdFont"}
              >
                Share Class of Units
              </Typography>
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
                <Box
                  sx={{ display: "flex", gap: "16px", width: { xs: "100%" } }}
                >
                  <Select
                    value={classUnit}
                    onChange={handleChangeClassUnits}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      borderRadius: "8px",
                      width: { md: "400px", xs: "100%" },
                    }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                  </Select>
                </Box>
              </Box>
            </Box>

            {/* Status Type - DropDown */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"myThirdFont"}
              >
                Status
              </Typography>
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
                <Box
                  sx={{ display: "flex", gap: "16px", width: { xs: "100%" } }}
                >
                  <Select
                    value={status}
                    onChange={handleChangeStatusType}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      borderRadius: "8px",
                      width: { md: "400px", xs: "100%" },
                    }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"Invested"}>Invested</MenuItem>
                    <MenuItem value={"Partially Invested"}>
                      Partially Invested
                    </MenuItem>
                    <MenuItem value={"Cnacelled"}>Cancelled</MenuItem>
                  </Select>
                </Box>
              </Box>
            </Box>

            {/* Fee Type - DropDown */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"myThirdFont"}
              >
                Fees Type
              </Typography>
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
                <Box
                  sx={{ display: "flex", gap: "16px", width: { xs: "100%" } }}
                >
                  <Select
                    value={feesType}
                    onChange={handleChangeFeesType}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      borderRadius: "8px",
                      width: { md: "400px", xs: "100%" },
                    }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"2"}>2%</MenuItem>
                    <MenuItem value={"0"}> 0 </MenuItem>
                  </Select>
                </Box>
              </Box>
            </Box>

            {/* Invested Amount*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  color={"#484644"}
                  fontSize={"14px"}
                  fontFamily={"myThirdFont"}
                >
                  Invested amount
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                  color={"#161514"}
                  fontSize={"16px"}
                  fontFamily={"mySecondFont"}
                  textAlign={"right"}
                >
                  ₹ {selectedRow?.investedAmount}
                </Typography>
              </Box>
            </Box>

            {/* Fees*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  color={"#484644"}
                  fontSize={"14px"}
                  fontFamily={"myThirdFont"}
                >
                  Fees
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                       color={"#161514"}
                       fontSize={"16px"}
                       fontFamily={"mySecondFont"}
                       textAlign={"right"}
                >
                  ₹ {totalFees}
                </Typography>
              </Box>
            </Box>

            {/* Total Contribution*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  color={"#484644"}
                  fontSize={"14px"}
                  fontFamily={"myThirdFont"}
                >
                  Total Contribution
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                     color={"#161514"}
                     fontSize={"16px"}
                     fontFamily={"mySecondFont"}
                     textAlign={"right"}
                >
                  ₹ {totalFees +
                    parseFloat(
                      selectedRow?.investedAmount.replace(/[^\d.-]/g, "")
                    )}
                </Typography>
              </Box>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <Button
                sx={{
                  padding: "12px 16px",
                  maxWidth: "288px",
                  width: "100%",
                  background: "#186E47",
                  borderRadius: "8px",
                  color: "#fff",
                  fontFamily: "mySecondFont",
                  fontSize: "16px",
                  ":hover": {
                    background: "#186E47",
                  },
                }}
              >
                UPDATE
              </Button>
              <Button
                sx={{
                  padding: "12px 16px",
                  maxWidth: "132px",
                  width: "100%",
                  borderRadius: "8px",
                  color: "#484644",
                  fontFamily: "mySecondFont",
                  fontSize: "14px",
                  border: "1px solid #484644",
                }}
                onClick={handleClose}
              >
                CANCEL
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default LedgerAccountTableRequestModal;
