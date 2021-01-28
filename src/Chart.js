import React from 'react';
import { Pie } from "react-chartjs-2";


import "./Chart.css";

function Chart({ labelOne, labelTwo,  amount, totalInterest }) {
    

    const state = {
        labels: [`${labelOne}`, `${labelTwo}`],
        datasets: [
            {
                label: "Money",
                backgroundColor: [
                    "#007AFF",
                    "#FF9933"
                ],
                borderColor: "white",
                borderAlign: "inner",
                borderWidth: 1,
                data: [Math.floor(amount, 2), Math.floor(totalInterest, 0)],
                weight: 20,

            }
        ]
    }

    const option = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat((currentValue/total*100).toFixed(1));
              return currentValue + ' (' + percentage + '%)';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
    }
    return (
        <div className="chart">
            <Pie data={state}
            options={option} />
        </div>
    )
}

export default Chart
