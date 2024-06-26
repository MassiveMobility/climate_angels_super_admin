import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { syndicateDetailData, dealData } from "@/constants/data";
import DealCard from "@/components/Cards/DealCard";
import SyndicateMembersTable from "@/components/CustomTable/SyndicateMembersTable"

type Prop = {
  syndicateDetails: any;
  status: any;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const monthName = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();
  return `${monthName} ${year}`;
};

type DealsProps = {
  dealType: string;
};

const SyndicateDetailsLeft = ({ dealType }: DealsProps) => {
  console.log(syndicateDetailData);


  return (
    <Box>
      {syndicateDetailData.map((item) => (
        <Box key={item.id}>
          <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
                src={item.startupLogo}
                alt=""
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography
                fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                fontFamily={"Montserrat, sans-serif"}
                fontWeight={"600"}
                color={"#161514"}
              >
                {item.syndicateName}
              </Typography>
              <Typography
                color={"#484644"}
                fontSize={"14px"}
                fontFamily={"Montserrat, sans-serif"}
                fontWeight={"400"}
              >
                {formatDate(item.dateCreated)}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ marginTop: "20px", marginBottom: "24px" }} />

          {/* About */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              color={"#161514"}
              fontSize={"clamp(1.25rem, 1.1981rem + 0.2516vw, 1.5rem)"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
            >
              About
            </Typography>
            <Typography
              color={"#484644"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
            >
              {item.about}
            </Typography>
          </Box>

          {/* Investment */}
          {/* Uncomment and fill in your investment rendering logic */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "64px",
            }}
          >
            <Typography
              color={"#161514"}
              fontSize={"clamp(1.25rem, 1.1981rem + 0.2516vw, 1.5rem)"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
            >
              Investments
            </Typography>
            <Grid container rowSpacing={"32px"}>
              {item.investmentCard.map((investmentData) => {
                return (
                  <Grid item md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <img src={investmentData.logo} alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <Typography
                          fontFamily={"mySecondFont"}
                          color={"#484644"}
                          fontSize={"18px"}
                        >
                          {investmentData.companyName}
                        </Typography>
                        <Typography
                          color={"#484644"}
                          fontSize={"14px"}
                          fontFamily={"Montserrat, sans-serif"}
                          fontWeight={"400"}
                        >
                          {investmentData.companyIndustry}
                        </Typography>
                        <Typography
                          color={"#484644"}
                          fontSize={"14px"}
                          fontFamily={"Montserrat, sans-serif"}
                          fontWeight={"400"}
                        >
                          {investmentData.companyLocation}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          {/* Live Deals */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", }}>
            <Typography
              color={"#161514"}
              fontSize={"clamp(1.25rem, 1.1981rem + 0.2516vw, 1.5rem)"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
              marginTop={"64px"}
            >
              Live Deals
            </Typography>
            <Grid sx={{marginTop:"0px"}} container columnSpacing={3} mt={3} rowSpacing={3}>
              {/* {filteredDeals.map((deal: any) => (
                <DealCard key={deal.id} deal={deal} />
              ))} */}
              {item.syndicateDealCardData
                .filter((deal) => deal.deal_type === dealType)
                .map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
            </Grid>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              color={"#161514"}
              fontSize={"clamp(1.25rem, 1.1981rem + 0.2516vw, 1.5rem)"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
              marginTop={"64px"}
            >
              Syndicate Members
            </Typography>

            <SyndicateMembersTable/>
          
          </Box>



          {/* Team Profile */}
          {/* Uncomment and fill in your team profile rendering logic */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "64px",
            }}
          >
            <Typography
              color={"#161514"}
              fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
            >
              Team Profile
            </Typography>
            <Grid container rowSpacing={"24px"}>
              {item.teamProfile.map((teamdata) => {
                return (
                  <Grid item md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <img src={teamdata.image} alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <Typography
                          fontFamily={"mySecondFont"}
                          color={"#484644"}
                          fontSize={"18px"}
                        >
                          {teamdata.name}
                        </Typography>
                        <Typography
                          color={"#484644"}
                          fontSize={"14px"}
                          fontFamily={"myThirdFont"}
                        >
                          {teamdata.designation}
                        </Typography>
                        <a href={teamdata.linkedIn}>
                          <img
                            style={{ marginTop: "4px" }}
                            src="/images/link.png"
                            alt=""
                          />
                        </a>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box> */}

          {/* Investment */}
          {/* Uncomment and fill in your investment rendering logic */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "64px",
            }}
          >
            <Typography
              color={"#161514"}
              fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
            >
              Investments
            </Typography>
            <Grid container rowSpacing={"32px"}>
              {item.investment.map((investmentData) => {
                return (
                  <Grid item md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <img src={investmentData.image} alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <Typography
                          fontFamily={"mySecondFont"}
                          color={"#484644"}
                          fontSize={"18px"}
                        >
                          {investmentData.companyName}
                        </Typography>
                        <Typography
                          color={"#484644"}
                          fontSize={"14px"}
                          fontFamily={"Montserrat, sans-serif"}
                          fontWeight={"400"}
                        >
                          {investmentData.work}
                        </Typography>
                        <Typography
                          color={"#484644"}
                          fontSize={"14px"}
                          fontFamily={"Montserrat, sans-serif"}
                          fontWeight={"400"}
                        >
                          {investmentData.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box> */}
        </Box>
      ))}
    </Box>
  );
};

export default SyndicateDetailsLeft;
