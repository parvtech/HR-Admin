import React from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import '../modal/Modal.css'

const Education = ({closeModal}) => {
    return (
        <React.Fragment>
            <Modal show={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="container mt-0 my-modal">
                        <div className="row">
                            <div className=""></div>
                            <div className="col-md-12 col-lg-6 col-sm-12 mt-0">
                                <div className="" style={{width:'450px',height:'580px'}}>
                                    <div className="row mb-2">
                                        <div className="col text-end me-2">
                                            <button className='rounded-1' onClick={() => closeModal(false)}>
                                            <span>
                                                <MdCancel />
                                            </span>
                                            </button>
                                            <h3 className="text-center h3medium mb-4 mt-0">Education Informations</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="h3medium">Education Information</h5>
                                                    <h3 className='me-1 pt-0'>
                                                        <AiOutlineDelete size={20} style={{ 'color': '#FF9B44' }} />
                                                    </h3>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Institution "
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder='Subject'
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        class="form-control mt-2 "
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
                                                    <select
                                                        className="form-select mt-2"
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
                                                        class="form-control mt-2"
                                                        placeholder="CGPA/%"
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
                                                    <h5 className="b1medium">Education Information</h5>
                                                    <h3 className='me-1'>
                                                        <AiOutlineDelete size={20} style={{ 'color': '#FF9B44' }} />
                                                    </h3>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Institution "
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder='Subject'
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
                                                <div className="col-md-6  ">
                                                    <input
                                                        type="date"
                                                        class="form-control mt-2"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <select
                                                        className="form-select mt-2"
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
                                                        class="form-control mt-2"
                                                        placeholder="CGPA/%"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 mt-1 mb-1 text-center">
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
                            <div className=""></div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default Education;