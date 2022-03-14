import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

const Chart = () => {
  const incomes = [121.62, 214.14, 153.22, 167.35];
  const expenses = [156.76, 177.13, 92.16, 135.21];
  const weeks = [1, 2, 3, 4];

  const theme = {
    negative: "rgb(239, 68, 68)",
    positive: "rgb(34, 197, 94)",
  };

  const data = {
    labels: weeks,
    datasets: [
      {
        label: "label",
        data: incomes,
        borderColor: theme.positive,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="flex justify-center ">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
