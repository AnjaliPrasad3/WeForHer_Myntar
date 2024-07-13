import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  // Generate random data for demonstration
  const generateRandomData = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const randomSalesData = labels.map(() => Math.floor(Math.random() * 1000));
    const randomOrdersData = labels.map(() => Math.floor(Math.random() * 100));
    
    return {
      labels,
      datasets: [
        {
          label: 'Sales',
          data: randomSalesData,
          borderColor: '#198753',
          backgroundColor: 'rgba(42, 117, 83, 0.5)',
          yAxisID: 'y',
        },
        {
          label: 'Orders',
          data: randomOrdersData,
          borderColor: 'rgb(220, 52, 69)',
          backgroundColor: 'rgba(201, 68, 82, 0.5)',
          yAxisID: 'y1',
        },
      ],
    };
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Sales & Order Data',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // Generate random data for demonstration
  const data = generateRandomData();

  return <Line options={options} data={data} />;
}
