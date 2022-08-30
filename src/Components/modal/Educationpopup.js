import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import './Modal.css'
import { Modal } from 'react-bootstrap';
export default function Education() {
    return (
        <>
            <Modal className='mt-4 pt-5 d-flex justify-content-between self-align-start' show={true}>
                <Modal.Body className='bg-white rounded' style={{ width: "650px", height: '350px' }}>
                    <div className="container">
                        <div className="row d-flex flex-colum align-item-center justify-content-center text-align-center">
                            <div className="col-md-12 col-lg-12 col-sm-12 ">
                                <div style={{Width:'2500px',height:'380px'}}>
                                    <div className="row">
                                        <div className="col text-end me-2">
                                            <span
                                                style={{
                                                    color: "gray",
                                                    borderLeft: "none",
                                                    marginTop: "4x",
                                                    borderTopRightRadius: "5px",
                                                    borderBottomRightRadius: "5px",
                                                    borderRightt: "none",
                                                    color: "#333333"
                                                }}
                                                id="basic-addon1"
                                            >
                                                <MdCancel size={18} />
                                            </span>
                                            <h3 className=" text-center h3medium"> Education Informations </h3>
                                        </div>
                                    </div>
                                    <div className="card-body mt-4">
                                        <div className="w-100">
                                            <div className="row ">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium ms-2 mt-2 ">Education Information</h5>
                                                    <h3 className="me-1">
                                                        <AiOutlineDelete
                                                            size={20}
                                                            style={{ color: "#FF9B44" }}
                                                        />
                                                    </h3>
                                                </div>

                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control col-6 ps-1"
                                                        placeholder="Institution"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control col-6 ps-1"
                                                        placeholder="Subject"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row pt-3 mb-2">
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        class="form-control col-12 pe-0"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-6 ">
                                                    <input
                                                        type="date"
                                                        class="form-control col-6 pe-0"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row pt-2">
                                                <div className="col-md-6">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        required
                                                    >
                                                        <option selected>Degree</option>
                                                        <option value="1">Degree</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control col-6 ps-1"
                                                        placeholder="CGPA/%"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row mt-3">
                                            <div className="text-center">
                                                <button
                                                    type="button"
                                                    class=" text-center btn  btn rounded-pill m-2 me-4 px-3 w-25 "
                                                    style={{ background: "#DDDDDD", border: "#8E8E8E", color: "#8E8E8E" }}
                                                >
                                                    <AiOutlinePlus style={{ marginBottom: '4px' }} />
                                                    Add More
                                                </button>

                                                <button
                                                    type="button"
                                                    class="btn rounded-pill w-25 text-white "
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
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}