import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
const Addresspop = ({ closeModal }) => {
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
        className=" d-flex justify-content-between self-align-start rounded-2 mt-5"
        show={true}
        size="lg"
      >
        <div className="mt-0 w-100 sticky-top overflow-hidden mt-1 bg-white modal-content-header">
          <div className="text-end mt-0 my-0">
            <span>
              <div
                className="rounded-circle mt-0 pe-1"
                onClick={() => closeModal(false)}
              >
                <MdCancel></MdCancel>
              </div>
            </span>
            <p className="h3medium mt-0 my-0 text-center ">Address</p>
          </div>
        </div>
        <Modal.Body className="bg-white rounded " style={{ height: "450px" }}>
          <div className="container mt-0 ">
            <div className="row">
              <div className="col-12 mt-0 d-flex justify-content-center">
                <div className="container position-relative overflow-hidden mt-0 pt-0">
                  <form onSubmit={handleSubmit} className="">
                    <div className="container position-relative">
                      <div className="row mt-4">
                        <div className="card">
                          <p className="b1medium mb-0 mt-2">Current Address</p>
                          <div className="row mb-2">
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Flat/Door No
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name=" Flat/Door No"
                                  value={formValues.fullName}
                                  onChange={handleChange}
                                  placeholder="Flat/Door No"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.fullName}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Permises Name
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="Permises Name"
                                  value={formValues.employeeID}
                                  onChange={handleChange}
                                  placeholder="Permises Name"
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
                                Landmark<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="Landmark"
                                  value={formValues.birthday}
                                  onChange={handleChange}
                                  placeholder="Landmark"
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
                                City<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="City"
                                  value={formValues.birthday}
                                  onChange={handleChange}
                                  placeholder="City"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.birthday}
                              </span>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Pincoad<span className="text-danger">*</span>
                              </lable>
                              <select
                                class="form-select ps-
                                                    1"
                                aria-label="Default select example"
                              >
                                <option selected>Pincoad</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                State
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name=" State"
                                  value={formValues.email}
                                  onChange={handleChange}
                                  placeholder=" State"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.email}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="card mt-4">
                          <p className="b1medium mb-0 mt-2">
                            Permanent Address
                          </p>
                          <div className="row mb-2">
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Flat/Door No
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name=" Flat/Door No"
                                  value={formValues.fullName}
                                  onChange={handleChange}
                                  placeholder="Flat/Door No"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.fullName}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Permises Name
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="Permises Name"
                                  value={formValues.employeeID}
                                  onChange={handleChange}
                                  placeholder="Permises Name"
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
                                Landmark<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="Landmark"
                                  value={formValues.birthday}
                                  onChange={handleChange}
                                  placeholder="Landmark"
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
                                City<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="City"
                                  value={formValues.birthday}
                                  onChange={handleChange}
                                  placeholder="City"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.birthday}
                              </span>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Pincoad<span className="text-danger">*</span>
                              </lable>
                              <select
                                class="form-select ps-
                                                    1"
                                aria-label="Default select example"
                              >
                                <option selected>Pincoad</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                State
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name=" State"
                                  value={formValues.email}
                                  onChange={handleChange}
                                  placeholder=" State"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <div className="container sticky-bottom mb-1 pb-2 bg-white modal-content-footer">
          <div className="row">
            <div className="col text-center ">
              <button
                type="submit"
                class="btn rounded-pill px-5 text-white"
                style={{ background: "#FF9B44", border: "#FF9B44" }}
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

export default Addresspop;



