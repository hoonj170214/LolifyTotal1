import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutGraph = ({ wins, losses }) => {
  const colors = ["#ee5a52", "#1f8ecd"];

  const data = {
    datasets: [
      {
        data: [losses, wins],
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  const options = {
    cutoutPercentage: 71,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    tooltips: {
      enabled: false,
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutGraph;
