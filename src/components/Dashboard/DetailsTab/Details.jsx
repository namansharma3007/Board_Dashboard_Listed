import React from "react";
import "./Details.css";
import DisplayData from "./DetailsData";

const Details = () => {
  return (
    <div className="details-tab">
      {DisplayData.map((item, index) => (
        <div key={index} className="tab-data">
          <span className="icon-tab-data">{item.icon}</span>
          <div className="details-tab-data">
            <p>{item.title}</p>
            <h3>{item.data}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
