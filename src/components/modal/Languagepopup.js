import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
// import './modal/Modal.css';
const Bankpopup = ({ closeModal }) => {
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
      <Modal show={true} size="lg">
        <Modal.Body className="bg-white" style={{height: "500px"}}>
          <div className=" row sticky-top bg-white">
            <div className="col-11 ps-5">
                <h2 className="h3medium mt-0 my-0 mx-auto text-center">Languages known</h2>
            </div>
            <div className=" col text-end">
                <span>
                    <div className="" style={{color: '#DDDDDD'}}  onClick={() => closeModal(false)}>
                    <MdCancel></MdCancel>
                    </div>
                </span>
            </div>
          </div>
          <div className="container card mt-4">
            <div className="row">
            <h5 className="pb-1 mb-1">Language 1</h5>
              <div className="col-12 d-flex justify-content-center">
                <div className="">
                  <form onSubmit={handleSubmit} className="">
                    <div className="container position-relative  ">
                      <div className="row mt-2 mb-2">
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Language
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Language"
                              aria-label="Language"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.fullName}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Read Yes/No<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Read Yes/No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.employeeID}
                          </span>
                        </div>
                        <div class="w-100"></div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Speak Yes/No
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Speak Yes/No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.birthday}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Write Yes/No<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Write Yes/No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div class="w-100"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3 "></div>
            </div>
          </div>
          <div className="container card mt-3 mb-3 pb-3">
            <div className="row">
            <h5 className="pb-1 mb-1">Language 2</h5>
              <div className="col-12 d-flex justify-content-center">
                <div className="">
                  <form onSubmit={handleSubmit} className="">
                    <div className="container position-relative  ">
                      <div className="row mt-2 mb-2">
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Language
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Language"
                              aria-label="Language"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.fullName}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Read Yes/No<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Read Yes/No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.employeeID}
                          </span>
                        </div>
                        <div class="w-100"></div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Speak Yes/No
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Speak Yes/No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="text-danger">
                            {formErrors.birthday}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Write Yes/No<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Write Yes/No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div class="w-100"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3 "></div>
            </div>
          </div>
          <div className=" footer pb-0 mb-0 container bg-white sticky-bottom">
            <div className="row">
              <div className="col-6 text-center ">
                <button
                  type="submit"
                  class="btn rounded-pill px-5 text-dark"
                  style={{ background: "#DDDDDD", border: "#DDDDDD" ,width:"200px",}}
                >
                  + Add More
                </button>
              </div>
              <div className="col-6 text-center">
                <button
                  type="submit"
                  class="btn rounded-pill px-5 text-white"
                  style={{ background: "#FF9B44", border: "#FF9B44" ,width:"200px"}}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
       </Modal>
    </>
  );
};

export default Bankpopup;

