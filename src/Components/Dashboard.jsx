import React from "react";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  //   navigate to back button button
  const BackHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div style={{ margin: "3% 29%" }} I>
        <div className="card">
          <div className="card-body">
            {" "}
            <h2>Dashboard</h2>{" "}
          </div>
        </div>
        <button className="btn btn-success mt-5" onClick={BackHandler}>
          Back
        </button>
      </div>
    </div>
  );
};
