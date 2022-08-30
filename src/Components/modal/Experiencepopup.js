import React from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
const Experience = ({ closeModal }) => {
    return (
        <React.Fragment>
            <Modal show={true} >
                <Modal.Body>
                    <div className="container mt-1">
                        <div className="row ">
                            <div className="col-3"></div>
                            <div className="col-md-12 col-lg-6 col-sm-12 mt-4">
                                <div className="card ">
                                    <div className="row">
                                        <div className="col text-end me-2">
                                            <button onClick={() => closeModal(false)}>
                                                <span>
                                                    <MdCancel />
                                                </span>
                                            </button>
                                            <h3 className="text-center h3medium">Expercience Informations</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="h3medium">Expercience Information</h5>
                                                    <h3 className='me-1 pt-0'>
                                                        <AiOutlineDelete size={20} style={{ 'color': '#FF9B44' }} />
                                                    </h3>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control mb-1"
                                                        placeholder="Company Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder='Location'
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control mt-2"
                                                        placeholder='Job Position'
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        class="form-control mt-2"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        class="form-control mt-2"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="b1medium">Expercience Information</h5>
                                                    <h3 className='me-1 pt-0'>
                                                        <AiOutlineDelete size={20} style={{ 'color': '#FF9B44' }} />
                                                    </h3>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control mb-1"
                                                        placeholder="Company Name "
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder='Location'
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder='Job Position'
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6  ">
                                                    <input
                                                        type="date"
                                                        class="form-control mt-2"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        class="form-control mt-2"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 mt-1 mb-3 text-center">
                                                <div className='text-center mt-2'>
                                                    <button style={{ backgroundColor: '#DDDDDD', color: '#333333' }} className='btn btn rounded-pill px-3 text-center mx-4 mt-2 c2book '>
                                                        <AiOutlinePlus style={{ marginBottom: '4px' }} /> Add More
                                                    </button>
                                                    <button style={{ backgroundColor: '#FF9B44', }} className='btn btn rounded-pill px-5 text-white me-2 c2book mt-2'> Save</button>
                                                </div>
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
        </React.Fragment>
    )
}

export default Experience;