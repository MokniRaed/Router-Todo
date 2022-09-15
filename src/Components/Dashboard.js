import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Dashboard = ({ job }) => {


  return (
    <div>
      <h1>Done</h1>
      <Link to="/list">
        <div className="card-holder">
          <div className="card bg-gold">-</div>
        </div>
      </Link>
      <h1>Waiting</h1>
      <div className="card-holder">
        <div className="card bg-news">-</div>
      </div>
    </div>
  );
};

export default Dashboard;
