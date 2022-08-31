import React, { useState, useEffect } from 'react'
import Profileimg from '../Components/img/Rectangle.png'
import { MdCancel } from "react-icons/md"
import { Modal } from 'react-bootstrap'
import './modal/Modal.css'

const AddEmployee = ({ closeModal }) => {
    const initialValues = { fullName: '', employeeID: '', birthday: '', email: '', joiningDate: '', number: '', department: '', desgination : '', gender : '' }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        var mobilecheck = /^[0-9]{10}$/;
        if (!values.fullName) {
            errors.fullName = "Name is required"
        }
        if (!values.employeeID) {
            errors.employeeID = "EmployeeID is required"
        }
        if (!values.birthday) {
            errors.birthday = "Birthday is required"
        }
        if (!values.email) {
            errors.email = "Email is required"
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email."
        }
        if (!values.joiningDate) {
            errors.joiningDate = "Joining Date is required"
        }
        if (!values.number) {
            errors.number = "Number is required"
        } else if (!mobilecheck.test(values.number)) {
            errors.number = "This is not valid phone number."
        }
        if(!values.gender && (values.gender != 'Gender*')){
            errors.gender = "Please fill the gender."
        }
        return errors
    }
    return (
        <>

            <Modal className='mt-0 pt-0 d-flex justify-content-between self-align-start' show={true}>
                <Modal.Body className='bg-white rounded ' style={{ width: "700px", height: '580px' }}>
                    <div className='container mt-0'>
                        <div className='row'>
                            <div className='mt-0'></div>
                            <div className='col-12 mt-0 d-flex justify-content-center'>
                                <div className="mt-0 pt-0" style={{ width: "1500px", height: "500px" }}>
                                    <form onSubmit={handleSubmit} className=''>
                                    <div className="mt-0 w-100 sticky-top overflow-hidden  bg-white">
                                        <div className="text-end mt-0 my-0">
                                            <span>
                                                <button className="rounded-1 border" onClick={() => closeModal(false)}>
                                                    <MdCancel></MdCancel>
                                                </button>
                                            </span>
                                        <p className='h3medium mt-0 my-0 text-center'>Add Employee</p>
                                        </div>
                                        </div>

                                            <div className='container position-relative  overflow-hidden'>
                                            <img alt='' src={Profileimg} style={{ width: "100px", height: "100px" }} className="mt- mx-auto d-block" />
                                            <div className="row mt-4">
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='fullName' value={formValues.fullName} onChange={handleChange} placeholder="Full Name*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.fullName}</span>
                                                </div>
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='employeeID' value={formValues.employeeID} onChange={handleChange} placeholder="Employee ID*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.employeeID}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="date" class="form-control ps-1" name='birthday' value={formValues.birthday} onChange={handleChange} placeholder="Birthday*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.birthday}</span>
                                                </div>
                                                <div className='col-6'>
                                                    <select class="form-select ps-1" name="gender" onChange={handleChange} value={formValues.gender} aria-label="Default select example">
                                                        <option selected>Gender*</option>
                                                        <option value="1">Male</option>
                                                        <option value="2">Female</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <select class="form-select ps-1" aria-label="Default select example">
                                                        <option selected>Department*</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='email' value={formValues.email} onChange={handleChange} placeholder="Email Address*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.email}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='joiningDate' value={formValues.joiningDate} onChange={handleChange} placeholder="Joining Date" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.joiningDate}</span>
                                                </div>
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='number' value={formValues.number} onChange={handleChange} placeholder="Phone Number*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.number}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <select class="form-select ps-1" aria-label="Default select example">
                                                        <option selected className=''>Select Designation</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className='col-6'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='container position-relative '>
                                            <div className="row mt-4">
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='fullName' value={formValues.fullName} onChange={handleChange} placeholder="Full Name*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.fullName}</span>
                                                </div>
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='employeeID' value={formValues.employeeID} onChange={handleChange} placeholder="Employee ID*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.employeeID}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="date" class="form-control ps-1" name='birthday' value={formValues.birthday} onChange={handleChange} placeholder="Birthday*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.birthday}</span>
                                                </div>
                                                <div className='col-6'>
                                                    <select class="form-select ps-1" aria-label="Default select example">
                                                        <option selected>Male</option>
                                                        <option value="1">Female</option>
                                                        <option value="2"></option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <select class="form-select ps-1" aria-label="Default select example">
                                                        <option selected>Department*</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='email' value={formValues.email} onChange={handleChange} placeholder="Email Address*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.email}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='joiningDate' value={formValues.joiningDate} onChange={handleChange} placeholder="Joining Date" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.joiningDate}</span>
                                                </div>
                                                <div className='col-6'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control ps-1" name='number' value={formValues.number} onChange={handleChange} placeholder="Phone Number*" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <span className='text-danger'>{formErrors.number}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className='col-6'>
                                                    <select class="form-select ps-1" aria-label="Default select example">
                                                        <option selected className=''>Select Designation</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className='col-6'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='container sticky-bottom mt-3 pt-3  bg-white'>
                                            <div className='row'>
                                                <div className='col text-center mt-4'>
                                                    <button type="submit" class="btn rounded-pill px-5 text-white" style={{ background: "#FF9B44", border: '#FF9B44' }}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='col-md-3 '></div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )
}
export default AddEmployee