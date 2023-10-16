import React, { useState, useEffect } from "react";
// import { MainData } from "../DashbordData/Data";
import Card from "../Card/Card";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Main = ({ openSideBarToggle }) => {
  const [apiData, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const apiData = await response.json();
      setData(apiData);
    }
    getData();
  }, []);

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
        {apiData.map((item, i) => (
          <div key={i}>
            <Card FunitureDescription={item} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
