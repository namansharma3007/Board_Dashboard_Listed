import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Details from "./DetailsTab/Details";
import Navbar from "./Navbar/Navbar";
import LineGraph from "./Graph/LineGraph/LineGraph";
import PieGraph from "./Graph/PieGraph/PieGraph";

const Dashboard = (userDetails) => {
  const user = userDetails;
  return (
    <section className="dashboard-main-container">
      <Sidebar />
      <div className="dashboard-container">

        {/* Top bar */}
        <Navbar user={user}/>

        {/* Details bar: tabs */}

        <Details />

        {/* LineGraph Data */}
        <LineGraph />

        <div className="pie-graph-schedule">

          {/* Pie graph */}

          
          <PieGraph />

          <aside className="schedule-details-display">
            <div className="top-heading">
              <h4>Today's Schedule</h4>
              <a href="#">See All &#x3e;</a>
            </div>

              <div className="schedule-tabs">

                <div className="tab-schedule1">
                  <p className="schedule-name">Meeting with suppliers from Kuta Bali</p>
                  <span className="timing-schedule">14.00-15.00</span>
                  <p className="address">at Sunset Road, Kuta, Bali</p>
                </div>

                <div className="tab-schedule2">
                  <p className="schedule-name">Meeting with suppliers from Kuta Bali</p>
                  <span className="timing-schedule">14.00-15.00</span>
                  <p className="address">at Sunset Road, Kuta, Bali</p>
                </div>

              </div>
            
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
