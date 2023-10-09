import React from "react";
import { HeadeData } from "../DashbordData/Data";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ openNav, openSideBarToggle }) => {
  return (
    <header className="header">
      {HeadeData.map((val) => (
        <div className="header-content">
          <div className="left">
            <div className="nav">
              <div className="logo">
                <img src={val.logo} alt="" />
                <h3>Logo</h3>
              </div>
              <div className="search__container">
                <input
                  type="text"
                  placeholder="search"
                  className="search_input"
                />
                <BiSearch className="search-icon" />
              </div>
            </div>
            <ul
              id="nav-list"
              className={openSideBarToggle ? "nav_responsive" : ""}
            >
              <li className="home-nav">{val.item1}</li>
              <li className="product-nav">
                {val.item2}
                <MdKeyboardArrowDown className="arrow-icon" />
              </li>
              <li className="promo-nav">{val.item3}</li>
              <li className="contact-nav">{val.item4}</li>
            </ul>
          </div>

          <div id="nav_icon">
            <IoIosNotificationsOutline className="icon" />
            <AiOutlineMessage className="icon" />
            <AiOutlineShoppingCart className="icon" />
            <img src={val.photo} alt="" />
          </div>
          <FiMenu className="icon menu_icon" onClick={openNav} />
        </div>
      ))}
    </header>
  );
};

export default Header;
