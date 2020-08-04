import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader } from "@material-ui/core";

function Lines(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const tHourlyData = props.location.state.data;
  const LineChart = tHourlyData.length ? (
    <Line
      data={{
        labels: tHourlyData.map(
          ({ dt_txt }) => new Date(dt_txt).getHours().toString() + ":00 hrs"
        ),
        datasets: [
          {
            data: tHourlyData.map((data) => data.main.temp_min),
            label: "Minimum Temperature",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: tHourlyData.map((data) => data.main.temp_max),
            label: "Maximum Temperature",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div>
      <Card>
        <CardHeader
          title={[new Date(props.location.state.data[0].dt_txt).toDateString()]}
        ></CardHeader>
        <CardContent style={{ maxWidth: "75%" }}>{LineChart}</CardContent>
      </Card>
    </div>
  );
}
export default Lines;
