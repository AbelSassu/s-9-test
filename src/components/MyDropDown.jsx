import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MyDropDown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <Dropdown show={isDropdownOpen} onClick={handleDropdownToggle}>
            <Dropdown.Toggle variant="none" id="dropdown-basic" className="p-0 drop me-2">
                <FontAwesomeIcon icon={faUser} className="icons" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="./profile.html">
                    <div className="d-flex align-items-center">
                        
                        Abel Sassu
                    </div>
                </Dropdown.Item>
                <Dropdown.Item >
                    Manage Profiles
                </Dropdown.Item>
                <Dropdown.Item >Account</Dropdown.Item>
                <Dropdown.Item >Help Center</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Signout Netflix</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MyDropDown;
