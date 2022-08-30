import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
export default function Emergency({ closeModal }) {

    return (
        <>
            <Modal show={true}>
                <Modal.Body >
                    <div className="container mt-4">
                        <div className="row ">
                            <div className="col-3"></div>
                            <div className="col-md-12 col-lg-6 col-sm-12 ">
                                <div className="card ">
                                    <div className="row">
                                        <div className="col text-end me-2 mt-2 mb-2">
                                            <span>
                                                <button onClick={() => closeModal(false)}>
                                                    <MdCancel></MdCancel>
                                                </button>
                                            </span>
                                            <h3 className="text-center h3medium mt-0">Emergency Contacts</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium">Primary Contact</h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Name "
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6  ">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Relationship"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Phone"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Phone 2"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium">Permanent Address</h5>
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Name "
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Relationship"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Phone"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Phone 2"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md mt-1 mb-3 text-center">
                                                <button
                                                    type="button"
                                                    class="btn rounded-pill w-25 text-white"
                                                    style={{ background: "#FF9B44", border: "#FF9B44" }}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}