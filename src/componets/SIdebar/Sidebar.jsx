import React from "react";

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
            <label htmlFor="Funiture1"> Funiture(1439)</label> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="workspaces"
              name="workspaces"
              value="workspaces"
            />
            <label htmlFor="kitchen"> Workspaces(302)</label> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="kitchen"
              name="kitchen"
              value="kitchen"
            />
            <label htmlFor="kitchen"> Kitchen(110)</label> <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="bathroom"
              name="bathroom"
              value="bathroom"
            />
            <label htmlFor="bathroom"> Bathroom(382)</label> <br />
          </div>
        </form>
      </div>

      <div className="tags">
        <h4>Tags</h4>
        <form className="Form">
          <div className="cheklist">
            <input type="checkbox" id="store" name="store" value="store" />
            <label htmlFor="store"> Oficial store 👑</label>

            <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="Recomended"
              name="Recomended"
              value="Recomended"
            />
            <label htmlFor="kitchen">Recomended✅</label>

            <br />
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="Product"
              name="Product"
              value="Product"
            />
            <label htmlFor="Product">Top Product📌</label>
          </div>
          <div className="cheklist">
            <input
              type="checkbox"
              id="Trending"
              name="Trending"
              value="Trending"
            />
            <label htmlFor="Trending">Trending🔥</label>
            <br />
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
