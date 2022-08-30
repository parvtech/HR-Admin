import React from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";

import '../modal/Modal.css'

export default function Address({closeModal}) {
    return (
        <>
            <Modal className='mt-2 pt-2 d-flex justify-content-between self-align-start'  show={true}>
                <Modal.Body  style={{width: "650px", height: '630px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <div className="">
                                    <div className="row">
                                        <div className="col text-end me-1 mt-0">
                                    <span>
                                        <button className="rounded-1" onClick={() => closeModal(false)}>
                                            <MdCancel></MdCancel>
                                        </button>
                                    </span>
                                            <h3 className="text-center h3medium mt-0 mb-3">Address</h3>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <div className=" card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium">Current Address</h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Flat/Door No."
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6  ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Floor"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Premises Name"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Landmark"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row pt-3">
                                                <div className="col-md-6">
                                                    <select
                                                        className="form-select ps-1"
                                                        aria-label="Default select example"
                                                        required
                                                    >
                                                        <option selected>Pincode</option>
                                                        <option value="1">0123</option>
                                                        <option value="2">012345</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="State"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0 mt-3">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium">Permanent Address</h5>
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Flat/Door No "
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Floor"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Prrmises Name"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Landmark"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row pt-3">
                                                <div className="col-md-6 ">
                                                    <select
                                                        className="form-select ps-1"
                                                        aria-label="Default select example"
                                                        required
                                                    >
                                                        <option selected>Pincode</option>
                                                        <option value="1">0123</option>
                                                        <option value="2">012345</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="State"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container mt-3">
                                        <div className="row">
                                            <div className="col-md mt-3 mb-0 text-center">
                                                <button
                                                    type="button"
                                                    class="btn rounded-pill px-5 text-white"
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