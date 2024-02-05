import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import logo from "../assets/logo.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import "./Components Css/SideBar.css";

const NavLinks = ({ handleClick }) => (
  <div className="navLinks">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="links"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="iconClass" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      
      {windowWidth >= 700 && (
        <div className={`sideBar ${mobileMenu ? "hiddenClass" : "showClass"}`}>
          <img className="Logo" src={logo} alt="" />
          <NavLinks />
        </div>
      )}

      
      {windowWidth < 700 && (
        <div
          className='mobilemenu'
         
        >
          {mobileMenu ? <RiCloseLine style={{color: 'white', width: '3rem', height: '3rem'}}  onClick={handleOnClick} /> : <HiOutlineMenu style={{color: 'white', width: '3rem', height: '3rem'}} onClick={handleOnClick}/>}
        </div>
      )}

      {/* Render mobile bar based on window width */}
      {windowWidth < 700 && mobileMenu && (
        <div className={`moblieBar ${mobileMenu ? "showClass" : ""}`}>
          <img className="Logo" src={logo} alt="" />
          <NavLinks handleOnClick={()=> setMobileMenu(!mobileMenu)} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
