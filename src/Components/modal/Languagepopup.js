import React from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";

export default function New2({ closeModal }) {
    return (
        <>
            <Modal className='mt-3 pt-3 d-flex justify-content-between self-align-start' show={true}>
                <Modal.Body className='bg-white rounded' style={{ width: "768px", height: '588px' }}>
                    <div className='container'>
                        <div className="row ">
                            <div className="col-3"></div>
                            <div className="col-md-12 col-lg-12 col-sm-12 ">
                                <div className="row">
                                    <div className="col text-end me-2 mt-1">
                                        <span>
                                            <button onClick={() => closeModal(false)} className="rounded-1">
                                                <MdCancel></MdCancel>
                                            </button>
                                        </span>
                                        <h3 className="text-center h3medium mt-0 mb-2">
                                            Language Known
                                        </h3>
                                    </div>
                                </div>
                                <div className="card pb-2 mb-2">
                                    <div className="card-body">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium">Language 1</h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Language"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6  ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Read Yes/No"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Speak Yes/No"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Write Yes/No"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card pt-3 mt-3">
                                        <div className="card-body pt-2">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium">Language 2</h5>
                                                    <div className="text-end me-1">
                                                        <span
                                                            style={{ color: "#FF9B44", height: "40px" }}
                                                        >
                                                            <RiDeleteBin7Line></RiDeleteBin7Line>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Language "
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Language"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Speak Yes/No"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="text"
                                                        class="form-control ps-1"
                                                        placeholder="Write Yes/No"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className="pt-3">
                                    <div className="row">
                                        <div className="col-md-6 mt-1 mb-3 text-end">
                                            <button
                                                type="button"
                                                class="btn rounded-pill text-black"
                                                style={{ background: "#DDDDDD", border: "#DDDDDD" }}
                                            >
                                                + Add More
                                            </button>
                                        </div>
                                        <div className="col-md-6 mt-1 mb-3 text-start">
                                            <button
                                                type="button"
                                                class="btn rounded-pill text-white"
                                                style={{ background: "#FF9B44", border: "#FF9B44" }}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}