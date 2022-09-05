import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import profileImg from "../../assests/img/Rectangle (2).png";
import axios from 'axios'
import "./Addemployeepopup.css"
const Addemployeepopup = ({ closeModal }) => {
  const [formValues, setFormValues] = useState({
    initialValues: {
      fullname: "",
      emp_id: "",
      date_of_birth: "",
      email: "",
      date_of_joining: "",
      mobile_no: "",
      desingnation: "",
      profile_img: "",
      department: "",
      gender: "",

    }
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [selectDesingnation, setSelectDesingnation] = useState([])
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
    let user = {
      fullname: formValues.initialValues.fullname,
      emp_id: formValues.initialValues.emp_id,
      email: formValues.initialValues.email,
      date_of_birth: formValues.initialValues.date_of_birth,
      mobile_no: formValues.initialValues.mobile_no,
      desingnation: formValues.initialValues.desingnation,
      profile_img: formValues.initialValues.profile_img,
      department: formValues.initialValues.department,
      gender: formValues.initialValues.gender,

    }
    let url = process.env.REACT_APP_BASEURL + "employee/"
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    };


    axios.post(url, user, config)
      .then(res => {
        alert('user added succesfull')
        // setSelectDesingnation(e.target.value)

      }
      ).catch(err => {
        alert('user not added')
      })
  };

  const handleChange = (e) => {
    setFormValues(
      {
        ...formValues,
        initialValues: {
          ...formValues.initialValues,
          [e.target.name]: e.target.value
        }
      }
    )
    console.log(formValues)
  }
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
    if (!values.fullname) {
      errors.fullname = "Name is required!";
    }
    if (!values.emp_id) {
      errors.emp_id = "emp_id is required!";
    }
    if (!values.date_of_birth) {
      errors.date_of_birth = "date_of_birth is required!";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }
    if (!values.date_of_joining) {
      errors.date_of_joining = "Joining Date is required!";
    }
    if (!values.mobile_no) {
      errors.mobile_no = "mobile_number is required!";
    } else if (!mobilecheck.test(values.mobile_no)) {
      errors.mobile_no = "This is not valid phone mobile_number.";
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
        <form onSubmit={handleSubmit} className="">
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
              <p className="h3medium mt-0 my-0 text-center ">
                Add Employee</p>
            </div>
          </div>

          <Modal.Body className="bg-white rounded " style={{ height: "450px" }}>
            <div className="container mt-0 ">
              <div className="row">
                <div className="col-12 mt-0 d-flex justify-content-center">
                  <div className="container position-relative overflow-hidden mt-0 pt-0">
                    <div className="container position-relative">
                      <div className="row mt-4">
                        <div className="">
                          <div className="mt-3">
                            <img
                              alt=""
                              src={profileImg}
                              style={{ width: "100px", height: "100px" }}
                              className="mt mx-auto d-flex justify-content-center"
                            />
                            <input type="file" accept="image/*" name="image-upload" id="input" />
                            <div className="label">
                              <label className="image-upload font-bold" htmlFor="input" style={{ color:"#ff9b44",fontWeight:"bold" }}>
                                <i className="material-icons "></i>Choose your Photo</label>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Full Name
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="fullname"
                                  value={formValues.initialValues.fullname}
                                  onChange={handleChange}
                                  placeholder="Full Name"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.fullname}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Employee ID
                                <span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="emp_id"
                                  value={formValues.initialValues.emp_id}
                                  onChange={handleChange}
                                  placeholder="Employee ID"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.emp_id}
                              </span>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                date_of_birth<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="date"
                                  class="form-control ps-1"
                                  name="date_of_birth"
                                  value={formValues.initialValues.date_of_birth}
                                  onChange={handleChange}
                                  placeholder="date_of_birth"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.date_of_birth}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Designation<span className="text-danger">*</span>
                              </lable>
                              <select
                                class="form-select ps-1"
                                type="select"
                                name="desingnation"
                                aria-label="Default select example"
                                onChange={handleChange}
                                defaultValue={formValues.initialValues.desingnation}

                              >
                                <option selected className="" value="">
                                  Select Designation
                                </option>
                                <option defaultValue="one">One</option>
                                <option defaultValue="two">Two</option>
                                <option defaultValue="three">Three</option>
                              </select>
                            </div>
                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                date_of_joining<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="date"
                                  class="form-control ps-1"
                                  name="date_of_joining"
                                  value={formValues.initialValues.date_of_joining}
                                  onChange={handleChange}
                                  placeholder="date_of_joining"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.date_of_joining}
                              </span>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Email Address<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="email"
                                  value={formValues.initialValues.email}
                                  onChange={handleChange}
                                  placeholder="Email Address"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.email}
                              </span>
                            </div>

                            <div class="w-100"></div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Gender<span className="text-danger">*</span>
                              </lable>
                              <select
                                class="form-select ps-1"
                                type="select"
                                name="gender"
                                aria-label="Default select example"
                                onChange={handleChange}
                                defaultValue={formValues.initialValues.gender}

                              >
                                <option selected className="" value="">
                                  Select Gender
                                </option>
                                <option defaultValue="one">Male</option>
                                <option defaultValue="two">Female</option>
                                
                              </select>
                            </div>
                            <div className="col m-1">
                              <lable className="form-lable small mb-1">
                                Department<span className="text-danger">*</span>
                              </lable>
                              <select
                                class="form-select ps-1"
                                type="select"
                                name="department"
                                aria-label="Default select example"
                                onChange={handleChange}
                                defaultValue={formValues.initialValues.department}

                              >
                                <option selected className="" value="">
                                  Select Department
                                </option>
                                <option defaultValue="one">One</option>
                                <option defaultValue="two">Two</option>
                                <option defaultValue="three">Three</option>
                              </select>
                            </div>
                            <div class="w-100"></div>

                            <div className="col-6 m-1">
                              <lable className="form-lable small mb-1">
                                Phone mobile_number<span className="text-danger">*</span>
                              </lable>
                              <div class="input-group mb-1">
                                <input
                                  type="text"
                                  class="form-control ps-1"
                                  name="mobile_no"
                                  value={formValues.initialValues.mobile_no}
                                  onChange={handleChange}
                                  placeholder="Phone mobile_number"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <span className="text-danger">
                                {formErrors.mobile_no}
                              </span>
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
        </form>
      </Modal>
    </>
  );
};

export default Addemployeepopup;



