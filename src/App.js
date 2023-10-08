import { useState } from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import Sidebar from "./componets/SIdebar/Sidebar";

function App() {
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false);

  const openNav = () => {
    setOpenSideBarToggle(!openSideBarToggle);
  };
  
  return (
    <div className="grid_container">
      <Header openNav={openNav} />
      <Sidebar openSideBarToggle={openSideBarToggle} />
      <Main openSideBarToggle={openSideBarToggle} />
    </div>
  );
}

export default App;
