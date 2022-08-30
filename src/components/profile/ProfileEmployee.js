import React from 'react'
import './Profile.css'
import Proimg from "../../assests/proimg.png"
import Reportimg from "../../assests/reportimg.png"
import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'

export default function Profile() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col h3book'><h2>Profile </h2></div>
                </div>
                <div className='.b3medium'><h4 >Dashboard<span className='text-muted'><span> / </span>Profile </span></h4></div>
                <div className='col'>
                    <div className="card  card-box mb-3" >
                        <div className="row ">
                            <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                            <div className="col-md-5 mt-5 mx-5 profile_img">
                                <img src={Proimg} alt="..." />
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body row">
                                    <h5 className="card-title pb-0 pt-0 h2bold">John Doe</h5>
                                    <div className='card-text col wrapper_1'>
                                        <dl className='row'>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Designation  :</dt><dd className="col-sm-8 c2book text-gry">Web Designer</    dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Department   :</dt><dd className="col-sm-8 c2book text-gry"> UI/UX Design Team</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Employee ID  :</dt><dd className="col-sm-8 c2book text-gry"> TR0007</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Date of Join :</dt><dd className="col-sm-8 c2book text-gry"> 1st Jan 2021</dd>
                                        </dl>
                                    </div>
                                    <div className='card-text  col'>
                                        <dl className='row'>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Phone     : </dt><dd className="col-sm-8 c2book"><Link to="" className='text-decoration-none'>9876543210</Link></dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Email     : </dt><dd className="col-sm-8 c2book"><Link to="" className='text-decoration-none'>johndoe@example.com</Link></dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Birthday  : </dt><dd className="col-sm-8 c2book text-gry">24th July</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Address : </dt><dd className="col-sm-8 c2book text-gry">1861 Bayonne Ave, Manchester Township, NJ, 08759</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Gender    :</dt><dd className="col-sm-8 c2book text-gry"> Male</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Report  : </dt><dd className="col-sm-8 c2book "><img src={Reportimg} alt="..." /><Link to="" className='text-decoration-none'>Jeffery Lalor</Link></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col '>
                            <div className="card mb-3 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Personal Informations</h5>
                                            <div className='card-text col '>
                                                <dl className='row'>
                                                    <dt className=" c1book text-content pb-0 mb-0">UAN number     </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">UAN number     </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Tel             </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Nationality    </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Religion       </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Marital status  </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Aadhar card     </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Pan card        </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 py-0 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Bank information</h5>
                                            <div className='card-text col '>
                                                <dl className='row'>
                                                    <dt className=" c1book text-content pb-0 mb-0">Name as in Bank  </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Bank Name        </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">IFSC Code        </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Bank account no   </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Bank Address     </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card pb-5 py-4 mb-1  card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title  pb-2 pt-0 b1bold text-content" > Address</h5>
                                            <div className='card-text col '>
                                                <h6 className='b2book text-content'>Present Address</h6>
                                                <dl className='row'>
                                                    <dt className=" c1book text-content pb-0 mb-0">Flat/Door No    </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Floor            </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Premises Name    </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Landmark (near)  </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Dist, Pin Code   </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">State           </dt>
                                                </dl>
                                            </div>
                                            <hr />
                                            <div className='card-text col '>
                                                <h6 className='b2book text-content'>Present Address</h6>
                                                <dl className='row'>
                                                    <dt className=" c1book text-content pb-0 mb-0">Flat/Door No    </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Floor            </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Premises Name    </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Landmark (near)  </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Dist, Pin Code   </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">State           </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col'>
                            <div className="card mb-3 pb-5 card-box" style={{ height: "178px" }}>
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Education Informations</h5>
                                            <div className='card-text col '>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3 card-box" style={{ height: "178px" }}>
                                <div className="row ">
                                    <span className='text-end pb-2 ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Family Informations</h5>
                                            <div className='card-text col '>
                                                <table className="table ">
                                                    <tr>
                                                        <th className='c1book text-content pb-0 mb-0 '>Name</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Relationship</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Date of Birth</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Occupation</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Phone</th>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="card mb-3 pb-5 card-box" style={{ height: "178px" }} >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Experience</h5>
                                            <div className='card-text col '>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3 pb-2 card-box" style={{ height: "178px" }}>
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Languages Known</h5>
                                            <div className='card-text col '>
                                                <table className="table ">
                                                    <tr>
                                                        <th className='c1book text-content px-4'>Languages</th>
                                                        <th className='c1book text-content px-4'>Read</th>
                                                        <th className='c1book text-content px-4'>Speak</th>
                                                        <th className='c1book text-content px-4'>Write</th>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="card mb-3 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" > Emergency Contact</h5>
                                            <div className='card-text col '>
                                                <h6 className='c2medium text-content'>Contact 1</h6>
                                                <dl className='row'>
                                                    <dt className=" c1book text-content pb-0 mb-0">Name    </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Relationship </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Phone    </dt>
                                                </dl>
                                            </div>
                                            <hr />
                                            <div className='card-text col '>
                                                <h6 className='c2medium text-content'>Contact 2</h6>
                                                <dl className='row'>
                                                    <dt className=" c1book text-content pb-0 mb-0">Name    </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Relationship </dt>
                                                    <dt className=" c1book text-content pb-0 mb-0">Phone    </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3 card-box" style={{ height: "178px" }}>
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Family Informations</h5>
                                            <div className='card-text col '>
                                                <table className="table ">
                                                    <tr>
                                                        <th className='c1book text-content pb-0 mb-0 '>Name</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Relationship</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Date of Birth</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Occupation</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Phone</th>
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
        </div>
    )
}
