import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MetricComp = () => {
  const series = [44, 55, 67, 83];
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: ["Computer", "Tablet", "Laptop", "Mobiles"],
    colors: ["#3258f2", "#a0eade", "#f2545b", "#a93f55"],
  };
  return (
    <Card>
      <div className="text-center">
        <h5>Views</h5>
        <div className="d-flex justify-content-center">
          <h3 className="m-0">27,000</h3>
          <div className="d-flex align-items-end px-2">
            <FontAwesomeIcon icon="fa-solid fa-caret-up" color="green" />
            <span className="text-success">12%</span>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={230}
          className="apex-charts"
        ></ReactApexChart>
      </div>
    </Card>
  );
};
