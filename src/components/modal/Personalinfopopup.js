import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import "./Personalpopupinfo.css"
import { MdCancel } from "react-icons/md"
const PersonalInfo = ({ closeModal }) => {
    const initialValues = {uan : '', esci : '', phone : '', religion: '', aadhar: '', pancard : ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
            [name] : value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors])  

    const validate = (values) => {
        const errors = {};
        const mobilecheck = /^[0-9]{10}$/;
        const twelveval = /^[0-9]{12}$/;
        const pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

        if(!values.uan){
            errors.uan = "UAN is requried!"
        } else if(!twelveval.test(values.uan)){
            errors.uan = "UAN is incorrect!";
        }
        if(!values.esci){
            errors.esci = "ESCI is requried!"
        } else if(!twelveval.test(values.esci)){
            errors.esci = "ESCI is incorrect!";
        }
        if(!values.phone){
            errors.phone = "Phone number is requried!"
        } else if(!mobilecheck.test(values.phone)){
            errors.phone = "Phone number is incorrect!";
        }
        if(!values.aadhar){
            errors.aadhar = "Aadhar card number is requried!"
        } else if(!twelveval.test(values.aadhar)){
            errors.aadhar = "Aadhar card number is incorrect!";
        }
        if(!values.pancard){
            errors.pancard = "Pancard number is requried!"
        } else if(!pan.test(values.pancard)){
            errors.pancard = "Pancard number is incorrect!";
        }
        return errors;
    }
    return (
        <>
        <Modal className='mt-5 pt-5 d-flex justify-content-between self-align-start' show={true}>
            <Modal.Body  className='bg-white rounded' style={{width: "700px", height: '480px'}}>
                <div className='container'>
                        <div className="row">
                            <div className="col-md-12 mt-0 d-flex justify-content-center">
                                <form onSubmit={handleSubmit}>
                                    <div className="text-center mb-0">
                                        <div className="text-end me-2 mt-0">
                                            <span>
                                                <button className='rounded-1' onClick={() => closeModal(false)}>
                                                    <MdCancel></MdCancel>
                                                </button>
                                            </span>
                                        </div>
                                        <p className="h3medium mb-3 mt-0">Personal Information</p>
                                    </div>
                                    <div className="container">
                                        <div className="row mt-3">

                                            <div className="col-6">
                                                <div className="input-group mb-1 col-12">
                                                    <input
                                                        type="text"
                                                        className="form-control col-12 ps-1"
                                                        placeholder="UAN Number"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name="uan"
                                                        value={formValues.uan}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <span className='text-danger'>{formErrors.uan}</span>
                                            </div>
                                            <div className="col-6">
                                                <div className="input-group mb-1 col-12">
                                                    <input
                                                        type="text"
                                                        className="form-control col-12 ps-1"
                                                        placeholder="ESCI Number"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name="esci"
                                                        value={formValues.esci}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <span className='text-danger'>{formErrors.esci}</span>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <div className="input-group mb-1 ps-1">
                                                    <input
                                                        type="text"
                                                        className="form-control ps-1"
                                                        placeholder="Telephone Number"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name="phone"
                                                        value={formValues.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <span className='text-danger'>{formErrors.phone}</span>
                                            </div>
                                            <div className="col-6">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    required
                                                >
                                                    <option selected>Maritial Status</option>
                                                    <option value="1">Female</option>
                                                    <option value="2">Male</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    required
                                                >
                                                    <option selected>Nationality</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <div className="input-group mb-1">
                                                    <input
                                                        type="text"
                                                        className="form-control ps-1"
                                                        placeholder="Religion"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name="religion"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <div className="input-group mb-1">
                                                    <input
                                                        type="text"
                                                        className="form-control ps-1"
                                                        placeholder="Aadhar Card Number"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name="aadhar"
                                                        value={formValues.aadhar}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <span className='text-danger '>{formErrors.aadhar}</span>
                                            </div>
                                            <div className="col-6">
                                                <div className="input-group mb-1">
                                                    <input
                                                        type="text"
                                                        className="form-control ps-1"
                                                        placeholder="Pan Card Number"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name="pancard"
                                                        value={formValues.pancard}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <span className='text-danger'>{formErrors.pancard}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col text-center mt-4 mb-2">
                                                <button
                                                    type="submit"
                                                    className="btn rounded-pill px-5 text-white"
                                                    style={{ background: "#FF9B44", border: "#FF9B44" }}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                </div>
                
            </Modal.Body>
        </Modal>
    </>
    );
}

export default PersonalInfo