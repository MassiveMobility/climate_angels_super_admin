import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Button, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";

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

const SyndicateRequestModal = ({
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
            {/* Syndicate */}
            <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
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
                    maxWidth: "48px",
                    width: "100%",
                  }}
                  src={selectedRow?.startupLogo}
                  alt=""
                />
              </Box>
              <Typography
                fontSize={"18px"}
                fontFamily={"mySecondFont"}
                color={"#161514"}
              >
                {selectedRow?.syndicateName}
              </Typography>
            </Box>
            {/* User - Name */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"myThirdFont"}
              >
                Creator name
              </Typography>
              <Typography
                color={"#161514"}
                fontSize={"16px"}
                fontFamily={"mySecondFont"}
              >
                {selectedRow?.syndicateLeadName}
              </Typography>
            </Box>

            {/* User - Email and User Mobile*/}
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
                  Creator Email ID
                </Typography>
                <Typography
                  color={"#161514"}
                  fontSize={"16px"}
                  fontFamily={"mySecondFont"}
                >
                  {selectedRow?.email}
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                  color={"#484644"}
                  fontSize={"14px"}
                  fontFamily={"myThirdFont"}
                  textAlign={"left"}
                >
                  Creator phone no.
                </Typography>
                <Typography
                  color={"#161514"}
                  fontSize={"16px"}
                  fontFamily={"mySecondFont"}
                  textAlign={"left"}
                >
                  {selectedRow?.mobileNumber}
                </Typography>
              </Box>
            </Box>
            {/* Radio */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"myThirdFont"}
              >
                Syndicate request approval status
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChangeStatus}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <Typography
                    color={"#07331F"}
                    fontSize={"18px"}
                    fontFamily={"mySecondFont"}
                  >
                    Approved
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChangeStatus}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  <Typography
                    color={"#07331F"}
                    fontSize={"18px"}
                    fontFamily={"mySecondFont"}
                  >
                    Rejected
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Re-Confirm Radio */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"myThirdFont"}
              >
                Reconfirm approval status
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Radio
                    checked={selectedConfirmValue === "a"}
                    onChange={handleChangeConfirmStatus}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <Typography
                    color={"#07331F"}
                    fontSize={"18px"}
                    fontFamily={"mySecondFont"}
                  >
                    Approved
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Radio
                    checked={selectedConfirmValue === "b"}
                    onChange={handleChangeConfirmStatus}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  <Typography
                    color={"#07331F"}
                    fontSize={"18px"}
                    fontFamily={"mySecondFont"}
                  >
                    Rejected
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Description */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"myThirdFont"}
              >
                Reason (incase of rejection - optional)
              </Typography>
              <textarea
                className="requestModalTextarea"
                style={{
                  padding: "12px 16px",
                  border: "1px solid #BEBAB5",
                  borderRadius: "8px",
                  outline: "none",
                  marginTop: "4px",
                  width: "400px",
                }}
                name="description"
                placeholder="Please enter here"
                rows={8}
              />
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
                SUBMIT
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
export default SyndicateRequestModal;
