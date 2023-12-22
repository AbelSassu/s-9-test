import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <div className="d-inline-flex align-items-center">
            <button
                className="btn btn-outline-secondary text-white fill-white"
                type="button"
                id="searchIcon"
                onClick={handleSearchClick}
                style={{ border: "none", padding: 0, margin: 0 }}
            >
                <FontAwesomeIcon icon={faSearch} className="icons" />
            </button>
            <input
                type="text"
                className={`form-control ${isSearchVisible ? "" : "d-none"}`}
                placeholder="Cerca..."
                id="searchInput"
            />
        </div>
    );
};

const Search = () => {
    return (
        <div className="d-flex align-items-center">
            <SearchComponent />
            <div id="kids" className="ms-3">
                KIDS
                <FontAwesomeIcon icon={faBell} className="icons ms-4" />
                <FontAwesomeIcon icon={faUser} className="icons" />
            </div>
        </div>
    );
};

export default Search;
