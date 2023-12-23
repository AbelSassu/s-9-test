import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

const Search = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <Form className="d-inline-flex align-items-center">
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
        </Form>
    );

};



export default Search;
