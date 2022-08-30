import React from "react";
import { MdCancel } from "react-icons/md";
// import "./Bankdetails.css";
import { Modal } from "react-bootstrap";

export default function Bankdetails({closeModal}) {
  return (
    <>
      <Modal
        className="mt-4 pt-5 d-flex justify-content-between self-align-start"
        show={true}
      >
        <Modal.Body
          className="bg-white rounded"
          style={{ width: "700px", height: "350px" }}
        >
          <div className="container ">
            <div className="row d-flex flex-colum align-item-center justify-content-center text-align-center">
              <div className="col-md-12 me-4">
                <div
                  className=""
                  style={{
                    width: "650px",
                    height: "300px",
                    textAlign: "center",
                  }}
                >
                  <div className="row">
                    <div className="col text-end me-2">
                      <span
                        style={{
                          color: "gray",
                          borderLeft: "none",
                          marginTop: "4",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          borderRightt: "none",
                          paddingLeft: "20px",
                          color: "#333333",
                        }}
                        id="basic-addon1"
                      >
                       
                          <MdCancel size={18} onClick={() => closeModal(false)} />
                     
                      </span>

                      <h3 className=" text-center h3medium"> Bank Details</h3>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6  mt-3">
                        <input
                          type="text"
                          class="form-control  ps-1"
                          placeholder="Name as in Bank"
                          required
                        />
                      </div>

                      <div className="col-md-6 mt-3 ">
                        <input
                          type="text"
                          class="form-control  ps-1"
                          placeholder="Bank Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mt-3">
                        <input
                          type="text"
                          class="form-control  ps-1"
                          placeholder="Bank Account No"
                          required
                        />
                      </div>

                      <div className="col-md-6 mt-3">
                        <input
                          type="text"
                          class="form-control  ps-1"
                          placeholder="IFSC Code"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mt-3">
                        <input
                          type="text"
                          class="form-control  ps-1"
                          placeholder="Branch Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row ">
                      <div className="col mt-5 mb-4 text-center">
                        <button
                          type="button"
                          class=" text-center btn text-white rounded-pill w-25 "
                          style={{ background: "#FF9B44" }}
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
