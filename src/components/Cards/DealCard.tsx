"use client";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { useRouter } from "next/navigation";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";


type Deal = {
  id?: string;
  deal_type: string;
  sector: string;
  name: string;
  sub: string;
  place: string;
  founding_year: string;
  asking_price: string;
  commited_price: string;
  syndicate: string;
  deal_live_at: string;
  companyLogo:any;
  is_commited: string;
  syndicateLogo:any;
};

type Props = {
  deal: Deal;
};

const DealCard = ({ deal }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/deal-details");
  };
  return (
    <Grid item md={6} sm={12} xs={12}>
      <Box
        borderRadius={"12px"}
        border={"1px solid #C0C0C0"}
        padding={"24px 16px"}
        // height={"452px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            {/* chip for live deals */}
            {deal.deal_type === "live" && (
              <Chip
                icon={
                  <FiberManualRecordIcon
                    fontSize="small"
                    sx={{ color: "#186E47 !important" }}
                  />
                }
                label="Live deal"
                sx={{
                  bgcolor: "#E8F0EB",
                  color: "#186E47",
                  fontFamily: "myFirstFont",
                }}
              />
            )}

            {/* chip for closed deals */}
            {deal.deal_type !== "live" && (
              <Chip
                label="Closed deal"
                sx={{
                  bgcolor: "#FFECE8",
                  color: "#8E0000",
                  fontFamily: "myFirstFont",
                }}
              />
            )}
            <Chip
              label={"Pre seed"}
              sx={{
                bgcolor: "rgba(232, 240, 235, 0.50)",
                color: "#484644",
                fontFamily: "myThirdFont",
              }}
            />
          </Box>
          <Box>
            <MoreVertIcon />
          </Box>
        </Box>
        <Box mt={"12px"}>
          <Chip
            label={deal.sector}
            sx={{
              bgcolor: "rgba(232, 240, 235, 0.50)",
              color: "#484644",
              fontFamily: "myThirdFont",
            }}
          />
        </Box>

        <Box display={"flex"} mt={"20px"} gap={"12px"}>
          <Box
              sx={{
                width: "64px",
                height: "64px",
                borderRadius: "64px",
                border: "1px solid #E8E8E8",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  maxWidth: "64px",
                  width: "100%",
                }}
                src={deal.companyLogo}
                alt=""
              />
            </Box>
          <Box>
            <Typography
              fontSize={"18px"}
              color={"#161514"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
            >
              {deal.name}
            </Typography>
            <Typography
              color={"#484644"}
              fontSize={"14px"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"400"}
              mt={"4px"}
            >
              {deal.sub}
            </Typography>
            <Typography
              color={"#484644"}
              fontSize={"14px"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"400"}
              mt={"4px"}
            >
              {deal.place} | {deal.founding_year}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: "16px" }} />

        <Box>
          {deal.is_commited === "true" ? (
            <Box
              sx={{
                background: "#E8F0EB",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 12px",
                width: "100%",
                borderRadius: "8px"
              }}
              display={"flex"}
              flexDirection={"column"}
          
            >
              <Typography
                color={"#484644"}
                justifyContent={"center"}
                fontSize={"16px"}
                fontFamily={"myFourthFont"}
                textAlign="center"
              >
                Your Commitment
              </Typography>
              <Typography
                color={"#484644"}
                justifyContent={"center"}
                fontSize={"18px"}
                fontFamily={"mySecondFont"}
                textAlign="center"
              >
                 <CurrencyRupeeRoundedIcon fontSize="small"/>{deal.asking_price}
              </Typography>
            </Box>
          ) : (
            <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
              <Typography
                color={"#484644"}
                fontSize={"18px"}
                fontFamily={"myFourthFont"}
              >
                Ask:{" "}
                <span
                  style={{
                    color: "#161514",
                    fontFamily: "mySecondFont",
                    fontSize: "18px",
                  }}
                >
                  <CurrencyRupeeRoundedIcon fontSize="small"/>{deal.asking_price}
                </span>
              </Typography>

              <Box height={"8px"} width={"100%"} bgcolor={"#C0C0C0"}>
                <Box height={"8px"} width={"70%"} bgcolor={"#186E47"}></Box>
              </Box>

              <Box display={"flex"} gap={"4px"}>
                <HandshakeOutlinedIcon sx={{ color: "#484644" }} />
                <Typography
                  color={"#484644"}
                  fontSize={"14px"}
                  fontFamily={"myFourthFont"}
                >
                  Commitment:{" "}
                  <span
                    style={{
                      color: "#161514",
                      fontFamily: "mySecondFont",
                      fontSize: "14px",
                    }}
                  >
                    ₹15,56,500 (3 investors)
                  </span>
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        <Divider sx={{ my: "16px" }} />

        <Box display={"flex"} gap={"8px"} alignItems={"center"}>
        <Box
              sx={{
                width: "32px",
                height: "32px",
                borderRadius: "64px",
                border: "1px solid #E8E8E8",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  maxWidth: "32px",
                  width: "100%",
                }}
                src={deal.syndicateLogo}
                alt=""
              />
            </Box>

          <Typography
            color={"#484644"}
            fontSize={"14px"}
            fontFamily={"myFourthFont"}
          >
            Syndicate:
            <span
              style={{
                color: "#161514",
                fontFamily: "mySecondFont",
                marginLeft: "4px",
              }}
            >
              {deal.syndicate}
            </span>
          </Typography>
        </Box>

        <Button
          sx={{
            my: "16px",
            padding: "8px 16px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #186E47",
            textTransform: "uppercase",
            color: "#186E47",
            display: "flex",
            gap: "4px",
          }}
          onClick={handleClick}
        >
          view deal
          <img
            src="../images/arrow.png"
            alt=""
            width={"24px"}
            height={"24px"}
            style={{ objectFit: "scale-down" }}
          />
        </Button>

        <Typography
          color={"#484644"}
          fontSize={"14px"}
          fontFamily={"myFourthFont"}
        >
          Deal live from: 23-02-2024
        </Typography>
      </Box>
    </Grid>
  );
};

export default DealCard;
