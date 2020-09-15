import React from "react";
import IphoneIpad from "../images/iphone-ipad.png";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/logo.png";
import RepairPopup from "./RepairPopup";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/* <!--- Navbar  --> */}
        <nav className="navbar navbar-expand-md navbar-light">
          <Link className="navbar-brand" to="#">
            <img src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler bg-light "
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className=" navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Sell
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  data-toggle="modal"
                  data-target="#store"
                >
                  Repair
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  0987563421
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-dark btn"
                  id="btnbook"
                  data-toggle="modal"
                  data-target="#store"
                >
                  BOOK REPAIR
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!--- Ending of Navbar  -->  */}
        {/* model starts here */}
        <RepairPopup />
      </div>
    );
  }
}

export default Header;
