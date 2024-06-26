import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Grid, Typography, Stack } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const chartDataLabel = {
    labels: [
      "Low Carbon Transport",
      "Sustainability Textiles",
      "Plastics",
      "Industrial Decarbonization",
      "Sustainable Building",
      "Waste Management",

      "Low Carbon Power",

      "Water Sanitation & Hygiene",
    ],
  };
  const chartData = {
    options: {
      responsive: true, // Enable responsiveness overall
      maintainAspectRatio: false, // Allow the chart to adapt to container size
      aspectRatio: 1, // Maintain a square aspect ratio if desired (optional)
    },
    datasets: [
      {
        responsive: true,

        label: "Sector Wise Investment",
        data: [25, 15, 15, 10, 10, 10, 10, 5],
        radius: 100,
        cutout: 90,
        // cutout: 130,
        spacing: 10,
        backgroundColor: [
          "#0F5032",
          "#186E47",
          "#7BA68C",
          "#BCD2C4",
          "#E8F0EB",

          "#161514",
          "#63615E",
          "#BEBAB4",
        ],
        borderColor: [
          "#0F5032",
          "#186E47",
          "#7BA68C",
          "#BCD2C4",
          "#E8F0EB",

          "#161514",
          "#63615E",
          "#BEBAB4",
        ],
      },
    ],
  };
  return (
    <Grid
      container
      sx={{ alignItems: "center", justifyContent: "center", padding: "10px" }}
      spacing={3}
    >
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            position: "relative",
            width: "240px",
            height: "240px",
            // width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Doughnut data={chartData} />
          <Box
            sx={{
              position: "absolute",
              top: { md: "45%", xs: "45%" },
              left: { md: "20%;", xs: "21%" },
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "myThirdFont",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Total amount invested
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "myFirstFont",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ₹18,24,000
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {chartDataLabel.labels.slice(0, 4).map((label, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <Box
                style={{
                  //BGCOLOR Updated -> due to slice()
                  backgroundColor: chartData.datasets[0].backgroundColor[index],
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "myThirdFont",
                  fontSize: { md: "14px", xs: "12px" },
                }}
                variant="body2"
              >
                {chartData.datasets[0].data[index]}% - {label}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {chartDataLabel.labels.slice(4).map((label, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <Box
                style={{
                  //BGCOLOR Updated -> due to slice()
                  backgroundColor:
                    chartData.datasets[0].backgroundColor[index + 4],
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "myThirdFont",
                  fontSize: { md: "14px", xs: "12px" },
                }}
                variant="body2"
              >
                {chartData.datasets[0].data[index + 4]}% - {label}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DoughnutChart;
