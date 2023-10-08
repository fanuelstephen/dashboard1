import React from "react";
import { MainData } from "../DashbordData/Data";
import Card from "../Card/Card";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import "./Main.css";

const Main = ({ openSideBarToggle }) => {
  return (
    <main className="main-container">
      <div className="main-content">
        <div className="title">
          <h6>Sort by:</h6>
          <ul>
            <li>Name</li>
            <li>Newest</li>
            <li>Trend</li>
            <li>Popular</li>
          </ul>
        </div>
        <div className="main_icon">
          <GrFormPrevious className="icongr" />
          <GrFormNext className="icongr" />
        </div>
      </div>

      <div className="card">
        {MainData.map((item) => (
          <Card FunitureDescription={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
