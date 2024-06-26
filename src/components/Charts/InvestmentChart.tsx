"use client";
import React , {useEffect,useState} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Box } from "@mui/material";
Chart.register(CategoryScale);

const InvestmentChart = () => {
  const labels = [
    "Nov 2023",
    "Dec 2023",
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
    "Aug 2024",
    "Sep 2024",
    "Oct 2024",
  ];
  const options = {
    responsive: true,
    maintainAspectRatio: true,

    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100,

        title: {
          display: true,
          text: "Investment amount in Millions (₹)", // Set your desired label text
        },
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Investment",
        backgroundColor: "#65987B",
        borderColor: "rgb(255, 99, 132)",
        barThickness: window.innerWidth < 768 ? 15 : 40, // Adjust breakpoint as needed
        data: [35, 85, 48, 64, 72, 15, 43, 95, 58, 26, 34, 21],
      },
    ],
  };

  const [barThickness, setBarThickness] = useState(40); // Default thickness

  useEffect(() => {
    if (typeof window !== "undefined") { // Check for window object
      const handleResize = () => {
        setBarThickness(window.innerWidth < 768 ? 15 : 40);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function to remove event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array to run effect only once

  return (
    <Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default InvestmentChart;
