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


export function LineChart({linedata,date}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Line Chart of Price in ${date}`,
      },
    },
  };
  const price = linedata.map((object)=>{return(object.price);});
  let labels;
  if(date=="1h" || date=="3h" ||date=="12h" || date=="24h"){
    labels = linedata.map((object)=>{return(new Date(object.timestamp*1000).toTimeString().slice(0,8));});
  }
  else{
    labels = linedata.map((object)=>{return(new Date(object.timestamp*1000).toUTCString()).slice(5,25)});;
    console.log(labels);
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: price,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  
  return( <Line options={options} data={data} />);
}