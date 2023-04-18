import React, { useState } from "react";
import "./LineGraph.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { DataGraph } from "./DataGraph";

const LineGraph = () => {
  const [displayData, setDisplayData] = useState(DataGraph[0]["weeks"]);

  const setWeeks = (e) => {
    const displayWeeksIndex = e.target.value;
    setDisplayData(DataGraph[displayWeeksIndex]["weeks"]);
  };
  const renderLineChart = (
    <LineChart width={1000} height={330} data={displayData}>
      <Line type="monotone" dataKey="users" stroke="#9BDD7C" />
      <Line type="monotone" dataKey="guests" stroke="#E9A0A0" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="week-range" />
      <YAxis />
    </LineChart>
  );

  return (
    <section className="graph-container">
      <div className="selection-month-index">
        <div className="selection-month">
          <h4>Activities</h4>
          <select name="months-change" id="" onChange={setWeeks}>
            {DataGraph.map((item, index) => (
              <option value={index} key={item["month-range"]}>
                {item["month-range"]}
              </option>
            ))}
          </select>
        </div>
        <div className="index-g-u">
          <div className="dot-text">
            <span className="dot dot1"></span>
            Guest
          </div>
          <div className="dot-text">
            <span className="dot dot2"></span>
            User
          </div>
        </div>
      </div>

      {renderLineChart}
    </section>
  );
};

export default LineGraph;
