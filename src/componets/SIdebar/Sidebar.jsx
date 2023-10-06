import React from "react";
import { GiPin } from "react-icons/gi";
import { AiTwotoneFire } from "react-icons/ai";
import { BiSolidCheckboxChecked } from "react-icons/bi";

const Sidebar = ({ openSideBarToggle }) => {
  return (
    <aside id="sidebar" className={openSideBarToggle ? "nav_responsive" : ""}>
      <div className="product">
        <h4>Product Type</h4>
        <form className="Form">
          <div className="cheklist">
            <input
              type="checkbox"
              id="Funiture"
              name="Funiture"
              value="Funiture"
            />
            <label for="Funiture1"> Funiture(1439)</label> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="workspaces"
              name="workspaces"
              value="workspaces"
            />
            <label for="kitchen"> Workspaces(302)</label> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="kitchen"
              name="kitchen"
              value="kitchen"
            />
            <label for="kitchen"> Kitchen(110)</label> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="bathroom"
              name="bathroom"
              value="bathroom"
            />
            <label for="bathroom"> Bathroom(382)</label> <br />
          </div>
        </form>
      </div>

      <div className="tags">
        <h4>Tags</h4>
        <form className="Form">
          <div className="cheklist">
            <input type="checkbox" id="store" name="store" value="store" />
            <label for="store"> Oficial store</label> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="Recomended"
              name="Recomended"
              value="Recomended"
            />
            <label for="kitchen">Recomended</label>
            <BiSolidCheckboxChecked />
            <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="Product"
              name="Product"
              value="Product"
            />
            <label for="Product">Top Product</label> <GiPin /> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="Trending"
              name="Trending"
              value="Trending"
            />
            <label for="Trending">Trending</label>
            <AiTwotoneFire /> <br />
          </div>
        </form>
      </div>

      <div className="price">
        <h4>Price</h4>
        <div className="amount">
          <p>Tsh 10,000 - Tsh 40,000</p>
        </div>
        <div className="amount">
          <p>Tsh 50,000 - Tsh 100,000</p>
        </div>
        <div className="amount">
          <p>Tsh 200,000 - Tsh 400,000</p>
        </div>
        <div className="amount">
          <p>Tsh 1,000,000</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
