import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_CONFIG } from "./navbar-config";
import "./Navbar.scss";

const Navbar = ({ setCurrentTab, currentTab }) => {
  const windowWidth = window.innerWidth;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      // if()
      setDropdownOpen(false);
      if (window.innerWidth > 499) {
        setToggleMenu(false);
      } else if (window.innerWidth < 499) {
        setToggleMenu(true);
      }
    });

    // this will clean up the event every time the component is re-rendered
    // return function cleanup() {
    //   window.removeEventListener("resize");
    // };
  }, [windowWidth]);
  const navbarItems = () => {
    return NAVBAR_CONFIG.map((each) => {
      return (
        <li
          onClick={() => {
            // setDropdownOpen(false);
            setCurrentTab(each.url);
          }}
        >
          <div>{each.icon}</div>
          <Link
            className={currentTab === each.url ? "selected-tab" : ""}
            to={each.url}
          >
            {each.disp}
          </Link>
        </li>
      );
    });
  };
  const createSideNav = () => {
    return (
      <div
        className={
          dropdownOpen && window.innerWidth > 699 ? "showToggleMenu side-nav" : "hideToggleMenu side-nav"
        }
      >
        {navbarItems()}
      </div>
    );
  };
  return (
    <nav className="navbar">
      {toggleMenu ? (
        <ul>{navbarItems()}</ul>
      ) : (
        <div className="navbar-header">
          <div className="navbar-name">
            <span>Suman Mondal</span>
          </div>
          <div
            className="navbar-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          </div>
        </div>
      )}
      {createSideNav()}
    </nav>
  );
};

export default Navbar;
