import React from 'react'
import Profileimg from '../Components/img/Rectangle.png'
import Svg1 from '../Components/img/Stroke 2.svg'

export default function () {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 mt-4 d-flex justify-content-center'>
                        <div className="card " style={{ width: "800px", height: "500px" }}>
                            <div className="text-center mb-0 ">
                                <div className="text-end me-2">
                                    <img alt='' src={Svg1} className="text-secondary" />
                                </div>
                                <p className='h3medium'>Profile Information</p>
                                <img alt='' src={Profileimg} style={{ width: "100px", height: "100px" }} className="mt-1" />
                            </div>
                            <div className='container'>
                                <div className="row mt-4">
                                    <div className='col-6'>
                                        <div class="input-group mb-1">
                                            <input type="text" class="form-control" placeholder="Full Name*" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="input-group mb-1">
                                            <input type="text" class="form-control" placeholder="Employee ID*" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className='col-6'>
                                        <div class="input-group mb-1">
                                            <input type="text" class="form-control" placeholder="Birthday*" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Male</option>
                                            <option value="1">Female</option>
                                            <option value="2"></option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className='col-6'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Department*</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className='col-6'>
                                        <div class="input-group mb-1">
                                            <input type="text" class="form-control" placeholder="Email Address*" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className='col-6'>
                                        <div class="input-group mb-1">
                                            <input type="text" class="form-control" placeholder="Email Address*" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="input-group mb-1">
                                            <input type="text" class="form-control" placeholder="Joining Date" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className='col-6'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className='col-6'>

                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col text-center mt-4'>
                                    <button type="button" class="btn btn-secondary rounded-pill">Secondary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>


        </>

    )
}
