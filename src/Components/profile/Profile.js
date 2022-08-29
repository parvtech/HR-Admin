import React, { useState } from 'react'
import './Profile.css'
import Logo from "../../assests/Logo.png"
import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'
import Personalinfopopup from '../modals/Personalinfopopup'

export default function Profile() {

    const [openModal, setOpenModal] = useState(false);
    let [input, setInput] =useState({
        personalInfo : {
            uan: '9876543210',
            tel: '9876543210',
            natioanlity : 'Indian',
        }
    })
    return (
        <div>
            <div className='container-fluid'>
                <div className='row b3book'>
                    <div className='col h1book'><h2>Profile </h2></div>
                </div>
                <div className='b3medium'><h4 >Dashboard<span className='text-muted'><span> / </span>Profile </span></h4></div>
                <div className='col'>
                    <div className="card mb-3" style={{ maxWidth: "100%" }}>
                        <div className="row no-gutters">
                            <span className='text-end ps-5 pe-4'><button><FaPen></FaPen></button></span>
                            <div className="col-md-4">
                                <img src={Logo} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body row">
                                    <h5 className="card-title pb-4">John Doe</h5>
                                    <div className='card-text col wrapper_1'>
                                        <p>Designation  : <span className=' px-5'>Web Designer</span></p>
                                        <p>Department   : <span className=' px-5'>UI/UX Design Team</span></p>
                                        <p>Employee ID  : <span className=' px-5'>TR0007</span></p>
                                        <p>Date of Join : <span className=' px-5'>1st Jan 2021</span></p>
                                    </div>
                                    <div className='card-text col'>
                                        <p>Phone : <span className=' px-5 '><Link to="" className='text-decoration-none'>9876543210</Link></span></p>
                                        <p>Email   : <span className=' px-5 '><Link to="" className='text-decoration-none'>johndoe@example.com</Link></span></p>
                                        <p>Birthday  : <span className=' px-5'>24th July</span></p>
                                        <p>Gender : <span className=' px-5'>Male</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <span className='text-end ps-5 pe-4'><button onClick={() =>setOpenModal(true)}><FaPen></FaPen></button></span>
                                    {
                                        openModal && input && <Personalinfopopup closeModal={setOpenModal} data={input.personalInfo} />
                                    }
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-4">Personal Informations</h5>
                                            <div className='card-text col '>
                                                <p>UAN number   <span className=' px-5'>9876543210</span></p>
                                                <p>Tel <span> <Link to="" className='px-5  text-decoration-none'>9876543210</Link></span></p>
                                                <p>Nationality <span className=' px-5'>Indian</span></p>
                                                <p>Religion <span className=' px-5'>Christian</span></p>
                                                <p>Marital status <span className=' px-5'>Married</span></p>
                                                <p>Aadhar card <span className=' px-5'>4588 5858 9696</span></p>
                                                <p>Pan card <span className=' px-5'>DVJPP8778L</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <span className='text-end ps-5 pe-4'><button><FaPen></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-4">Bank information</h5>
                                            <div className='card-text col '>
                                                <p>Name as in Bank   <span className=' px-5'>ICICI Bank</span></p>
                                                <p>Bank Name   <span className=' px-5'>159843014641</span></p>
                                                <p>IFSC Code<span className=' px-5'>ICI24504</span></p>
                                                <p>Bank account no <span className=' px-5'>159843014641</span></p>
                                                <p>Bank Address <span className=' px-5'>ICI24504</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <span className='text-end ps-5 pe-4'><button><FaPen></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-4"> Address</h5>
                                            <div className='card-text col '>
                                                <h6>Present Address</h6>
                                                <p>Flat/Door No   <span className=' px-5'>105</span></p>
                                                <p>Floor   <span className=' px-5'>1ST</span></p>
                                                <p>Premises Name<span className=' px-5'>Rituraaj Business center</span></p>
                                                <p>Landmark (near) <span className=' px-5'>UNO Business park building</span></p>
                                                <p>Dist, Pin Code <span className=' px-5'>452003</span></p>
                                                <p>State <span className=' px-5'>Madhya Pradesh</span></p>
                                            </div>
                                            <hr />
                                            <div className='card-text col '>
                                                <h6>Present Address</h6>
                                                <p>Flat/Door No   <span className=' px-5'>105</span></p>
                                                <p>Floor   <span className=' px-5'>1ST</span></p>
                                                <p>Premises Name<span className=' px-5'>Rituraaj Business center</span></p>
                                                <p>Landmark (near) <span className=' px-5'>UNO Business park building</span></p>
                                                <p>Dist, Pin Code <span className=' px-5'>452003</span></p>
                                                <p>State <span className=' px-5'>Madhya Pradesh</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <span className='text-end ps-5 pe-4'><button><FaPen></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-4">Education Informations</h5>
                                            <div className='card-text col '>
                                                <p>International College of Arts and Science (UG)</p>
                                                <p>Bsc Computer Science</p>
                                                <p><small className='text-muted'>2000 - 2003</small></p>
                                                <p>International College of Arts and Science (PG)</p>
                                                <p>Msc Computer Science</p>
                                                <p><small className='text-muted'>2000 - 2003</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <span className='text-end ps-5 pe-4'><button><FaPen></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-4">Family Informations</h5>
                                            <div className='card-text col '>
                                                <table class="table  justify-content-center">

                                                    <tr>
                                                        <th className='px-4'>Name</th>
                                                        <th className='px-4'>Relationship</th>
                                                        <th className='px-4'>Date of Birth</th>
                                                        <th className='px-4'>Occupation</th>
                                                        <th className='px-4'>Phone</th>
                                                    </tr>

                                                    <tr>
                                                        <td className='px-4' >Leo</td>
                                                        <td className='px-4'>Brother</td>
                                                        <td className='px-4'>Feb 16th, 2019</td>
                                                        <td className='px-4'>Clerk</td>
                                                        <td className='px-4'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-4' >Leo</td>
                                                        <td className='px-4'>Brother</td>
                                                        <td className='px-4'>Feb 16th, 2019</td>
                                                        <td className='px-4'>Clerk</td>
                                                        <td className='px-4'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-4' >Leo</td>
                                                        <td className='px-4'>Brother</td>
                                                        <td className='px-4'>Feb 16th, 2019</td>
                                                        <td className='px-4'>Clerk</td>
                                                        <td className='px-4'>9876543210</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="card mb-3" style={{ maxWidth: "100%" }}>
                            <div className="row no-gutters">
                                <span className='text-end ps-5 pe-4'><button><FaPen></FaPen></button></span>
                                <div className="col-md-8">
                                    <div className="card-body row">
                                        <h5 className="card-title pb-4">Experience</h5>
                                        <div className='card-text col '>
                                            <p>Web Designer at Zen Corporation</p>
                                            <p><small >Jan 2013 - Present (5 years 2 months)</small></p>
                                            <p>Web Designer at Ron-tech</p>
                                            <p><small >Jan 2013 - Present (5 years 2 months)</small></p>
                                            <p>Jan 2013 - Present (5 years 2 months)</p>
                                            <p><small >Jan 2013 - Present (5 years 2 months)</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card mb-3" style={{ maxWidth: "100%" }}>
                            <div className="row no-gutters">
                                <span className='text-end ps-5 pe-4'><button><FaPen></FaPen></button></span>
                                <div className="col-md-8">
                                    <div className="card-body row">
                                        <h5 className="card-title pb-4">Languages Known</h5>
                                        <div className='card-text col '>
                                            <table class="table justify-content-center">

                                                <tr>
                                                    <th className='px-4'>Languages</th>
                                                    <th className='px-4'>Read</th>
                                                    <th className='px-4'>Speak</th>
                                                    <th className='px-4'>Write</th>
                                                </tr>

                                                <tr>
                                                    <td className='px-4' >English</td>
                                                    <td className='px-4'>Yes</td>
                                                    <td className='px-4'>Yes</td>
                                                    <td className='px-4'>Yes</td>

                                                </tr>
                                                <tr>
                                                    <td className='px-4' >Hindi</td>
                                                    <td className='px-4'>Yes</td>
                                                    <td className='px-4'>Yes</td>
                                                    <td className='px-4'>Yes</td>

                                                </tr>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
