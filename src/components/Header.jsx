import React from "react";
import LogoDesktop from "../images/logo-desktop.svg";
import LogoDarkDesktop from "../images/logo-mobile-modo-noct.svg";

const Header = (props) => {
  const darkModeHandler = () => {
    props.setDarkMode(!props.darkMode);
  };
  return (
    <header className="Header">
      {/* LOGO PÁGINA */}
      {props.darkMode ? (
        <img width="55px" height="55px" src={LogoDarkDesktop} alt="header" />
      ) : (
        <img width="55px" height="55px" src={LogoDesktop} alt="header" />
      )}

      {/* BOTÓN DARK / LIGHT MODE */}
      <button
        className={`${props.darkMode ? "dark-mode" : "light-mode"}`}
        onClick={darkModeHandler}
      >{`Ir a modo ${props.darkMode ? "claro" : "oscuro"}`}</button>
    </header>
  );
};

export default Header;
