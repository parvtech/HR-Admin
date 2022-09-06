import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
// import './modal/Modal.css';
const Familypopup = ({ closeModal }) => {
  const initialValues = {
    fullName: "",
    employeeID: "",
    birthday: "",
    email: "",
    joiningDate: "",
    number: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var mobilecheck = /^[0-9]{10}$/;
    if (!values.fullName) {
      errors.fullName = "Name is required";
    }
    if (!values.employeeID) {
      errors.employeeID = "EmployeeID is required";
    }
    if (!values.birthday) {
      errors.birthday = "Birthday is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email.";
    }
    if (!values.joiningDate) {
      errors.joiningDate = "Joining Date is required";
    }
    if (!values.number) {
      errors.number = "Number is required";
    } else if (!mobilecheck.test(values.number)) {
      errors.number = "This is not valid phone number.";
    }
    return errors;
  };

  return (
    <>
      <Modal
        show={true}
        size="lg"
        className=" d-flex justify-content-between self-align-start rounded-2 mt-5"
      >
        <div className="mt-0 w-100 sticky-top overflow-hidden mt-1 bg-white modal-content-header">
          <div className="text-end mt-0 my-0">
            <span>
              <div
                className="rounded-circle mt-0 pe-2"
                style={{ cursor: "pointer" }}
                onClick={() => closeModal(false)}
              >
                <MdCancel></MdCancel>
              </div>
            </span>
            <p className="h3medium mt-0 my-0 text-center">Family Information</p>
          </div>
        </div>
        <Modal.Body className="bg-white rounded" style={{ height: "450px" }}>
          <div className="container mt-0">
            <div className="row">
              <div className="col-12 mt-0 d-flex justify-content-center">
                <div className="container position-relative overflow-hidden mt-0 pt-0">
                  <div className="container position-relative">
                    <div className="row mt-4">
                      <div className="card">
                        <div className="d-flex justify-content-between align-item-center">
                          <p className="b1medium mb-0 mt-3">Family Member 1</p>
                          <div className="me-1 mt-2">
                            <AiOutlineDelete
                              size={20}
                              style={{ color: "#FF9B44" }}
                            />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Name
                              <span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="text"
                                class="form-control ps-1"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span className="text-danger">
                              {formErrors.fullName}
                            </span>
                          </div>
                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Relationship<span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="text"
                                class="form-control ps-1"
                                name="employeeID"
                                value={formValues.employeeID}
                                onChange={handleChange}
                                placeholder="Relationship"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span className="text-danger">
                              {formErrors.employeeID}
                            </span>
                          </div>
                          <div class="w-100"></div>

                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Phone
                              <span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="text"
                                class="form-control ps-1"
                                name="Bank Account No"
                                onChange={handleChange}
                                placeholder="Phone"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span className="text-danger">
                              {formErrors.birthday}
                            </span>
                          </div>
                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Date of birth
                              <span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="date"
                                class="form-control ps-1"
                                onChange={handleChange}
                                placeholder="Date of birth"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-3">
                        <div className="d-flex justify-content-between align-item-center">
                          <p className="b1medium mb-0 mt-3">Family Member 2</p>
                          <div className="me-1 mt-2">
                            <AiOutlineDelete
                              size={20}
                              style={{ color: "#FF9B44" }}
                            />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Name
                              <span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="text"
                                class="form-control ps-1"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span className="text-danger">
                              {formErrors.fullName}
                            </span>
                          </div>
                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Relationship<span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="text"
                                class="form-control ps-1"
                                name="employeeID"
                                value={formValues.employeeID}
                                onChange={handleChange}
                                placeholder="Relationship"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span className="text-danger">
                              {formErrors.employeeID}
                            </span>
                          </div>
                          <div class="w-100"></div>
                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Phone
                              <span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="text"
                                class="form-control ps-1"
                                name="Bank Account No"
                                onChange={handleChange}
                                placeholder="Phone"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span className="text-danger">
                              {formErrors.birthday}
                            </span>
                          </div>
                          <div className="col m-1 mt-0">
                            <lable className="form-lable small mb-1">
                              Date of birth
                              <span className="text-danger">*</span>
                            </lable>
                            <div class="input-group mb-1">
                              <input
                                type="date"
                                class="form-control ps-1"
                                onChange={handleChange}
                                placeholder="Date of birth"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <div className="container mb-3 pb-2 mt-3 bg-white sticky-bottom modal-content-footer">
          <div className="row">
            <div className="col text-center ">
              <button
                type="submit"
                class="btn rounded-pill px-5 text-white"
                style={{
                  background: " #DDDDDD",
                  border: "#FF9B44",
                  width: "200px",
                }}
              >
                <span className="" style={{ color: "#8E8E8E" }}>
                  + Add More
                </span>
              </button>
            </div>
            <div className="col text-center ">
              <button
                type="submit"
                class="btn rounded-pill px-5 text-white"
                style={{
                  background: "#FF9B44",
                  border: "#FF9B44",
                  width: "200px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Familypopup;
