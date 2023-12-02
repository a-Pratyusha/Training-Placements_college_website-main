import React from 'react'
import ReactApexChart from 'react-apexcharts';



function Charts() {

    const options = {
        chart: {
          type: 'bar',
          height: 630,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff'],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff'],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: [`2022-23`, `2021-22`, `2020-21`, `2019-20`, `2018-19`],
        },
        annotations: {
          labels: [
            {
              borderColor: '#00E396',
              borderWidth: 1,
              text: 'Label 1',
              textAnchor: 'middle',
              textOffsetY: 0,
              style: {
                background: '#00E396',
                color: '#fff',
                fontSize: '12px',
              },
              offsetY: -20,
            },
            {
              borderColor: '#FFD600',
              borderWidth: 1,
              text: 'Label 2',
              textAnchor: 'middle',
              textOffsetY: 0,
              style: {
                background: '#FFD600',
                color: '#fff',
                fontSize: '12px',
              },
              offsetY: -20,
            },
          ],
        },
      };
    
      const series = [
        {
            name: "No. Of Offers",
          data: [100, 200, 150, 140, 130],
        },
        {
            name:"No. Of Placement opportunities",
          data: [20, 40, 30, 30, 25],
        },
      ];
    

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={630} />
        </div>
    )
}

export default Charts
