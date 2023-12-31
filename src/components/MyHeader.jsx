import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import MyDropDown from "./MyDropDown";

const MyHeader = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#221f1f" }}
        >
            <a className="navbar-brand ms-2" href="www">
                <img
                    src={logo}
                    style={{ width: "100px", height: "55px" }}
                    alt="Logo"
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold" href="www">
                            TV Shows
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Movies
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Recently Added
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            My List
                        </a>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <Search />
                    <p className="text-white mt-3 ms-2">KIDS</p>
                    <FontAwesomeIcon icon={faBell} className="icons ms-4" />
                    <MyDropDown />
                </div>
            </div>
        </nav>
    );
};

export default MyHeader;
