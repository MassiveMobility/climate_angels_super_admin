import React from "react";
import { Box, Button, MenuItem, Grid, Typography } from "@mui/material";

const data = [
  {
    title: "Users",
    totalLabel: "Total Users",
    totalValue: "1500",
    newLabel: "New Users",
    newValue: "12",
  },
  {
    title: "Syndicates",
    totalLabel: "Total Syndicates",
    totalValue: "05",
    pendingLabel: "Syndicates pending approval",
    pendingValue: "12",
  },
  {
    title: "Commitments",
    totalLabel: "No. of commitments",
    totalValue: "13",
    amountLabel: "Amount committed",
    amountValue: "₹49,02,000",
  },
  {
    title: "Deal & schemes",
    liveLabel: "Live deals",
    liveValue: "08",
    closedLabel: "Closed deals",
    closedValue: "117",
    pendingLabel: "Deals pending approval",
    pendingValue: "12",
  },
];

const DashData = () => {
  return (
    // <Grid container columnSpacing={2}>
    //   {data.map((item, index) => (
    //     <Grid item md={4} xs={12} key={index}>
    //       <Box
    //         sx={{
    //           padding: "24px",
    //           borderRadius: "12px",
    //           marginTop: "16px",
    //           boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
    //           background: "#FFF",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             display: "flex",
    //             alignItems: "center",
    //             marginBottom: "16px",
    //           }}
    //         >
    //           {/* Image Box */}
    //           <Box
    //             sx={{
    //               width: "48px",
    //               height: "48px",
    //               borderRadius: "48px",
    //               background: "rgba(210, 225, 216, 0.50)",
    //               display: "flex",
    //               justifyContent: "center",
    //               alignItems: "center",
    //             }}
    //           >
    //             <img src="/images/pot.png" alt="" />
    //           </Box>

    //           <Box sx={{ marginLeft: "12px" }}>
    //             <Typography
    //               mt={"4px"}
    //               fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //               fontFamily={"myFirstFont"}
    //               color={"#484644"}
    //               fontWeight={"600"}
    //             >
    //               {item.title}
    //             </Typography>
    //           </Box>
    //         </Box>

    //         <Box sx={{ paddingBottom: "12px", display: "flex" }}>
    //           <Box sx={{ width: "100%" }}>
    //             <Typography
    //               mt={"4px"}
    //               fontSize={"16px"}
    //               fontFamily={"myThirdFont"}
    //               color={"#484644"}
    //             >
    //               {item.liveLabel}
    //             </Typography>
    //             <Typography
    //               mt={"4px"}
    //               fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //               fontFamily={"myFirstFont"}
    //               color={"#484644"}
    //               fontWeight={"600"}
    //             >
    //               08
    //             </Typography>
    //           </Box>

    //           <Box sx={{ width: "100%" }}>
    //             <Typography
    //               mt={"4px"}
    //               fontSize={"16px"}
    //               fontFamily={"myThirdFont"}
    //               color={"#484644"}
    //             >
    //               Closed deals
    //             </Typography>
    //             <Typography
    //               mt={"4px"}
    //               fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //               fontFamily={"myFirstFont"}
    //               color={"#484644"}
    //               fontWeight={"600"}
    //             >
    //               117
    //             </Typography>
    //           </Box>
    //         </Box>

    //         <Box>
    //           <Typography
    //             mt={"4px"}
    //             fontSize={"16px"}
    //             fontFamily={"myThirdFont"}
    //             color={"#484644"}
    //           >
    //             Deals pending approval
    //           </Typography>
    //           <Typography
    //             mt={"4px"}
    //             fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //             fontFamily={"myFirstFont"}
    //             color={"#484644"}
    //             fontWeight={"600"}
    //           >
    //             12
    //           </Typography>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     // <Grid item md={4} xs={12} key={index}>
    //     //   <Box
    //     //     sx={{
    //     //       padding: "24px",
    //     //       borderRadius: "12px",
    //     //       marginTop: "16px",
    //     //       boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
    //     //       background:
    //     //         "linear-gradient(0deg, rgba(232, 240, 235, 0.50) 0%, rgba(232, 240, 235, 0.50) 100%), #FFF",
    //     //     }}
    //     //   >
    //     //     <Box
    //     //       sx={{
    //     //         display: "flex",
    //     //         alignItems: "center",
    //     //         marginBottom: "16px",
    //     //       }}
    //     //     >
    //     //       <Box
    //     //         sx={{
    //     //           width: "48px",
    //     //           height: "48px",
    //     //           borderRadius: "48px",
    //     //           background: "rgba(210, 225, 216, 0.50)",
    //     //           display: "flex",
    //     //           justifyContent: "center",
    //     //           alignItems: "center",
    //     //         }}
    //     //       >
    //     //         <img src="/images/pot.png" alt="" />
    //     //       </Box>

    //     //       <Box sx={{ marginLeft: "12px" }}>
    //     //         <Typography
    //     //           mt={"4px"}
    //     //           fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //     //           fontFamily={"myFirstFont"}
    //     //           color={"#484644"}
    //     //           fontWeight={"600"}
    //     //         >
    //     //           {item.title}
    //     //         </Typography>
    //     //       </Box>
    //     //     </Box>

    //     //     <Box sx={{ paddingBottom: "12px" }}>
    //     //       {item.totalLabel && (
    //     //         <>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"16px"}
    //     //             fontFamily={"myThirdFont"}
    //     //             color={"#484644"}
    //     //           >
    //     //             {item.totalLabel}
    //     //           </Typography>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //     //             fontFamily={"myFirstFont"}
    //     //             color={"#484644"}
    //     //             fontWeight={"600"}
    //     //           >
    //     //             {item.totalValue}
    //     //           </Typography>
    //     //         </>
    //     //       )}

    //     //       {item.newLabel && (
    //     //         <>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"16px"}
    //     //             fontFamily={"myThirdFont"}
    //     //             color={"#484644"}
    //     //           >
    //     //             {item.newLabel}
    //     //           </Typography>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //     //             fontFamily={"myFirstFont"}
    //     //             color={"#484644"}
    //     //             fontWeight={"600"}
    //     //           >
    //     //             {item.newValue}
    //     //           </Typography>
    //     //         </>
    //     //       )}

    //     //       {item.amountLabel && (
    //     //         <>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"16px"}
    //     //             fontFamily={"myThirdFont"}
    //     //             color={"#484644"}
    //     //           >
    //     //             {item.amountLabel}
    //     //           </Typography>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //     //             fontFamily={"myFirstFont"}
    //     //             color={"#484644"}
    //     //             fontWeight={"600"}
    //     //           >
    //     //             {item.amountValue}
    //     //           </Typography>
    //     //         </>
    //     //       )}
    //     //     </Box>

    //     //     {item.liveLabel && (
    //     //       <Box sx={{ paddingBottom: "12px", display: "flex" }}>
    //     //         <Box sx={{ width: "100%" }}>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"16px"}
    //     //             fontFamily={"myThirdFont"}
    //     //             color={"#484644"}
    //     //           >
    //     //             {item.liveLabel}
    //     //           </Typography>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //     //             fontFamily={"myFirstFont"}
    //     //             color={"#484644"}
    //     //             fontWeight={"600"}
    //     //           >
    //     //             {item.liveValue}
    //     //           </Typography>
    //     //         </Box>

    //     //         <Box sx={{ width: "100%" }}>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"16px"}
    //     //             fontFamily={"myThirdFont"}
    //     //             color={"#484644"}
    //     //           >
    //     //             {item.closedLabel}
    //     //           </Typography>
    //     //           <Typography
    //     //             mt={"4px"}
    //     //             fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
    //     //             fontFamily={"myFirstFont"}
    //     //             color={"#484644"}
    //     //             fontWeight={"600"}
    //     //           >
    //     //             {item.closedValue}
    //     //           </Typography>
    //     //         </Box>
    //     //       </Box>
    //     //     )}
    //     //   </Box>
    //     // </Grid>
    //   ))}
    // </Grid>
    <Grid container columnSpacing={2}>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            padding: "24px",
            borderRadius: "12px",
            marginTop: "16px",
            boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
            background:
              "linear-gradient(0deg, rgba(232, 240, 235, 0.50) 0%, rgba(232, 240, 235, 0.50) 100%), #FFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "48px",
                background: "rgba(210, 225, 216, 0.50)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/images/pot.png" alt="" />
            </Box>

            <Box sx={{ marginLeft: "12px" }}>
              <Typography
                mt={"4px"}
                fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
                fontFamily={"myFirstFont"}
                color={"#484644"}
                fontWeight={"600"}
              >
                Users
              </Typography>
            </Box>
          </Box>

          <Box sx={{ paddingBottom: "12px" }}>
            <Typography
              mt={"4px"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
              color={"#484644"}
            >
              Total Users
            </Typography>
            <Typography
              mt={"4px"}
              fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
              fontFamily={"myFirstFont"}
              color={"#484644"}
              fontWeight={"600"}
            >
              1500
            </Typography>
          </Box>

          <Box>
            <Typography
              mt={"4px"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
              color={"#484644"}
            >
              New Users
            </Typography>
            <Typography
              mt={"4px"}
              fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
              fontFamily={"myFirstFont"}
              color={"#484644"}
              fontWeight={"600"}
            >
              12
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item md={4} xs={12}>
        <Box
          sx={{
            padding: "24px",
            borderRadius: "12px",
            marginTop: "16px",
            boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
            background: "#FFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "48px",
                background: "rgba(210, 225, 216, 0.50)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/images/pot.png" alt="" />
            </Box>

            <Box sx={{ marginLeft: "12px" }}>
              <Typography
                mt={"4px"}
                fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
                fontFamily={"myFirstFont"}
                color={"#484644"}
                fontWeight={"600"}
              >
                Syndicates
              </Typography>
            </Box>
          </Box>

          <Box sx={{ paddingBottom: "12px" }}>
            <Typography
              mt={"4px"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
              color={"#484644"}
            >
              Total Syndicates
            </Typography>
            <Typography
              mt={"4px"}
              fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
              fontFamily={"myFirstFont"}
              color={"#484644"}
              fontWeight={"600"}
            >
              05
            </Typography>
          </Box>

          <Box>
            <Typography
              mt={"4px"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
              color={"#484644"}
            >
              Syndicates pending approval
            </Typography>
            <Typography
              mt={"4px"}
              fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
              fontFamily={"myFirstFont"}
              color={"#484644"}
              fontWeight={"600"}
            >
              12
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item md={4} xs={12}>
        <Box
          sx={{
            padding: "24px",
            borderRadius: "12px",
            marginTop: "16px",
            boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
            background:
              "linear-gradient(0deg, rgba(232, 240, 235, 0.50) 0%, rgba(232, 240, 235, 0.50) 100%), #FFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "48px",
                background: "rgba(210, 225, 216, 0.50)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/images/pot.png" alt="" />
            </Box>

            <Box sx={{ marginLeft: "12px" }}>
              <Typography
                mt={"4px"}
                fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
                fontFamily={"myFirstFont"}
                color={"#484644"}
                fontWeight={"600"}
              >
                Commitments
              </Typography>
            </Box>
          </Box>

          <Box sx={{ paddingBottom: "12px" }}>
            <Typography
              mt={"4px"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
              color={"#484644"}
            >
              No. of commitments
            </Typography>
            <Typography
              mt={"4px"}
              fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
              fontFamily={"myFirstFont"}
              color={"#484644"}
              fontWeight={"600"}
            >
              13
            </Typography>
          </Box>

          <Box>
            <Typography
              mt={"4px"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
              color={"#484644"}
            >
              Amount committed
            </Typography>
            <Typography
              mt={"4px"}
              fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
              fontFamily={"myFirstFont"}
              color={"#484644"}
              fontWeight={"600"}
            >
              ₹49,02,000
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item md={4} xs={12}>
        <Box
          sx={{
            padding: "24px",
            borderRadius: "12px",
            marginTop: "16px",
            boxShadow: "0px 2px 4px 0px rgba(0, 31, 1, 0.15)",
            background: "#FFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "48px",
                background: "rgba(210, 225, 216, 0.50)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/images/pot.png" alt="" />
            </Box>

            <Box sx={{ marginLeft: "12px" }}>
              <Typography
                mt={"4px"}
                fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
                fontFamily={"myFirstFont"}
                color={"#484644"}
                fontWeight={"600"}
              >
                Deal & schemes
              </Typography>
            </Box>
          </Box>

          <Box sx={{ paddingBottom: "12px", display: "flex" }}>
            <Box sx={{ width: "100%" }}>
              <Typography
                mt={"4px"}
                fontSize={"16px"}
                fontFamily={"myThirdFont"}
                color={"#484644"}
              >
                Live deals
              </Typography>
              <Typography
                mt={"4px"}
                fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
                fontFamily={"myFirstFont"}
                color={"#484644"}
                fontWeight={"600"}
              >
                08
              </Typography>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography
                mt={"4px"}
                fontSize={"16px"}
                fontFamily={"myThirdFont"}
                color={"#484644"}
              >
                Closed deals
              </Typography>
              <Typography
                mt={"4px"}
                fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
                fontFamily={"myFirstFont"}
                color={"#484644"}
                fontWeight={"600"}
              >
                117
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              mt={"4px"}
              fontSize={"16px"}
              fontFamily={"myThirdFont"}
              color={"#484644"}
            >
              Deals pending approval
            </Typography>
            <Typography
              mt={"4px"}
              fontSize={"clamp(1rem, 0.9741rem + 0.1258vw, 1.125rem);"}
              fontFamily={"myFirstFont"}
              color={"#484644"}
              fontWeight={"600"}
            >
              12
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashData;
