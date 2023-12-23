// Importa le librerie necessarie
import React, { useState } from "react";
import { Dropdown, Modal, Button } from "react-bootstrap";
import Abel from "../abel.jpg"

// Definisci il componente MyProfile
const MyProfile = () => {
    const [showModal, setShowModal] = useState(false);

    // Gestisce l'apertura della modale
    const handleProfileClick = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <Dropdown.Item onClick={handleProfileClick}>
                <div className="d-flex align-items-center">Abel Sassu</div>
            </Dropdown.Item>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row mt-4 pb-2">
                        <div className="col-12 col-md-auto">
                            <img
                                src={Abel}
                                className="img-fluid"
                                width="150px"
                                alt="avatar"
                            />
                        </div>
                        <div className="col-12 col-md">
                            <input
                                className="form-control border-0 p-0 rounded-0"
                                value="Abel Sassu"
                                type="text"
                            />
                            <div className="mb-2 mt-4">
                                <h4 className="text-muted">Language:</h4>
                                <div className="mt-4">
                                    <span className="text-dark">English</span>
                                </div>
                            </div>
                            <hr className="mt-0" />
                            <div className="pb-2">
                                <h4 className="text-muted">
                                    Maturity Settings:
                                </h4>
                                <button className="btn btn-dark fw-bold my-2">
                                    ALL MATURITY SETTINGS
                                </button>
                                <p className="text-dark mt-2">
                                    Show files for all maturity settings for
                                    this profile.
                                </p>
                                <button className="btn btn-outline-secondary px-4">
                                    EDIT
                                </button>
                            </div>

                            <hr className="my-4" />

                            <div>
                                <h4 className="text-muted">
                                    Autoplay Controls:
                                </h4>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <input
                                            className="form-check-input bg-transparent border-dark opacity-50 rounded-0"
                                            type="checkbox"
                                            checked
                                        />
                                    </div>
                                    <div>
                                        Autoplay next episode in a series on all
                                        devices
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                    <div className="me-2">
                                        <input
                                            className="form-check-input bg-transparent border-dark opacity-50 rounded-0"
                                            type="checkbox"
                                        />
                                    </div>
                                    <div>
                                        Autoplay next episode in a series on all
                                        devices
                                    </div>
                                    <hr class="my-4" />
                                </div>
                                <hr />
                                <div class="action-buttons pt-2 row">
                                    <div class="col-auto col-3">
                                        <button class="btn btn-light fw-bold">
                                            SAVE
                                        </button>
                                    </div>
                                    <div class="col-auto col-4">
                                        <button class="btn btn-outline-secondary ">
                                            CANCEL
                                        </button>
                                    </div>
                                    <div class="col-auto col-5">
                                        <button class="btn btn-outline-secondary">
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MyProfile;
