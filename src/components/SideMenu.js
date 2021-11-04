import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import MenuItem from "./MenuItem";

const menuItem = [
  { name: "Dashboard", exact:true, to: "/", iconClassName: "bi bi-bookmark-dash" },
  { name: "About", to: "/about", iconClassName: "bi bi-bookmark-dash" },
  {
    name: "Content",
    to: "/content",
    exact:true,
    iconClassName: "bi bi-bookmark-dash",
    subMenus: [{ name: "Course", to:'/content/course' }, { name: "Videos", to:'/content/videos' }, { name: "Socials", to:'/content/social' }],
  },
  { name: "Contact", to: "/contact", iconClassName: "bi bi-bookmark-dash" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if(inactive){
      document.querySelectorAll('.sub-menu').forEach(el => {
        el.classList.remove('active')
      })
    }

    props.onCollapse(inactive);
  }, [inactive, props])

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i className="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>

      <div className="devider"></div>

      <div className="main-menu">
        <ul>
          {menuItem.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              exact={menuItem.exact}
              iconClassName={menuItem.iconClassName}
              subMenus={menuItem.subMenus || []}
              onClick={() => {
                setInactive(false);
              }}
            />
          ))}
          {/* <li>
            <a href="#!" className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-bookmark-dash"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#!" className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-bookmark-dash"></i>
              </div>
              <span>About</span>
            </a>
          </li>

          <MenuItem
            name={"Content"}
            subMenus={[
              { name: "Course" },
              { name: "Videos" },
              { name: "Social" },
            ]}
          />

          <li>
            <a href="#!" className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-bookmark-dash"></i>
              </div>
              Contact
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={logo} alt="" />
        </div>
        <div className="user-info">
          <h5>Ibnul Ashir</h5>
          <p>ibnulashir42@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
