import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
// import './modal/Modal.css';
const Bankpopup = ({ closeModal }) => {
  const initialValues = {
    employeeName: '',
    bankName: '',
    accountNum: '',
    ifsc: '',
    address: ''
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) =>{
    const {name, value}  = event.target;
    setFormValues({
      ...formValues,
      [name] : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const accNumCheck  = /^\d{9,18}$/;
    const ifcsCheck = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if(!values.employeeName){
      errors.employeeName = "Please fill the employee name!"
    }
    if(!values.bankName){
      errors.bankName = "Please fill the bank name!";
    }
    if(!values.accountNum){
      errors.accountNum = "Please fill the account number!";
    } else if(!accNumCheck.test(values.accountNum)) {
      errors.accountNum = "Incorrect account number!";
    }
    if(!values.ifsc){
      errors.ifsc = "Please fill the IFSC code!";
    } else if(!ifcsCheck.test(values.ifsc)){
      errors.ifsc = "Incorrect IFSC code.";
    }
    if(!values.address){
      errors.address = "Please fill the address field."
    }
    return errors;
  }

  return (
    <>
      <Modal centered show={true} size="lg">
        <form onSubmit={handleSubmit}>
          <div className=" mt-1 bg-white sticky-top overflow-hidden me-1 modal-content-header">
            <div className="text-end mt-0 my-0">
              <span>
                <div className=" pt-1 pe-1" onClick={() => closeModal(false)}>
                  <MdCancel></MdCancel>
                </div>
              </span>
              <div>
                <p className="h3medium mt-0 my-0 mx-auto text-center">
                  Bank Details
                </p>
              </div>
            </div>
          </div>
          <Modal.Body
            className="bg-white rounded  "
            style={{ width: "", height: "300px", border: " 2px solid #EDEDED;" }}
          >
            {/* <div className=" bg-white sticky-top overflow-hidden">
            <div className="text-end mt-0 my-0">
              <span>
                <div className=" pt-1 pe-1" onClick={() => closeModal(false)}>
                  <MdCancel></MdCancel>
                </div>
              </span>
              <div>
                <p className="h3medium mt-0 my-0 mx-auto text-center">
                  Bank Details
                </p>
              </div>
            </div>
          </div> */}
            <div className="container mt-0">
              <div className="row">
                <div className="mt-0"></div>
                <div className="col-12 mt-0 d-flex justify-content-center">
                  <div className="mt-0 pt-0">
                    <div className="container position-relative  ">
                      <div className="row mt-4">
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Name as in Bank
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Name as in Bank"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="employeeName"
                              onChange={handleChange}
                              value={formValues.employeeName}
                            />
                          </div>
                          <span className="text-danger">
                                {formErrors.employeeName}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Bank Name<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Bank Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="bankName"
                              onChange={handleChange}
                              value={formValues.bankName}
                            />
                          </div>
                          <span className="text-danger">
                                {formErrors.bankName}
                          </span>
                        </div>
                        <div class="w-100"></div>

                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            Bank Account No
                            <span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="Bank Account No"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="accountNum"
                              onChange={handleChange}
                              value={formValues.accountNum}
                            />
                          </div>
                          <span className="text-danger">
                                {formErrors.accountNum}
                          </span>
                        </div>
                        <div className="col m-1">
                          <lable className="form-lable small mb-1">
                            IFSC Code<span className="text-danger">*</span>
                          </lable>
                          <div class="input-group mb-1">
                            <input
                              type="text"
                              class="form-control ps-1"
                              placeholder="IFSC Code"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="ifsc"
                              onChange={handleChange}
                              value={formValues.ifsc}
                            />
                          </div>
                          <span className="text-danger">
                                {formErrors.ifsc}
                          </span>
                        </div>
                        <div class="w-100"></div>

                        <div className="col-sm-6 m-1 w-50">
                          <lable className="form-lable small mb-1">
                            Branch Address<span className="text-danger">*</span>
                          </lable>
                          <input
                            type="text"
                            class="form-control ps-1"
                            placeholder="Branch Address"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="address"
                            onChange={handleChange}
                            value={formValues.address}
                          />
                        </div>
                        <span className="text-danger">
                                {formErrors.address}
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <div className="container  mb-3 bg-white sticky-bottom modal-content-footer">
            <div className="row">
              <div className="col text-center">
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
        </form>
      </Modal>
    </>
  );
};

export default Bankpopup;
