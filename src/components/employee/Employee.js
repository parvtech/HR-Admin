import React, { useState, useEffect } from 'react'
import "./Employee.css"
import Svg from '../../assests/img/Group.svg'
import axios from 'axios'
import { useNavigate, } from 'react-router-dom'
import { GoAlert, GoPlus } from 'react-icons/go'
import Rectangle from '../../assests/img/Rectangle.png'
export default function Employee() {


  const [employeedetail, setEmployeedetail] = useState([]);
  const [image, setImage] = useState(null)
  let navigate = useNavigate()
  useEffect(() => {
    getEmployeList()
  }, []);


  // fetch api
  const getEmployeList = () => {
    let url = process.env.REACT_APP_BASEURL + "employee/"
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        "Authorization": "Bearer " + '6160b016c6c20ad11a915fc97a6f21d4a252a408acfbfb30f245be0e560da6764942c23da7a6b64c1cb37907def338621af493cee41ceaa2b619dad37324b5a0ebed8fd75f0a2ed44204b56ebbd8833f18010044f2f8683'
      }
    };
    axios.get(url, config)
      .then(res => {
        setEmployeedetail(res.data.data)
      }
      ).catch(err => {

      })
  }
  // onclick function
  const profileDetail = (public_id) => {
    console.log(public_id)
    navigate(`/profile/${public_id}`)

  }


  return (
    <div>
      <div className='container-fluid'>
        <div className='row b3book align-item-center'>
          <div className='col h1book'><h2>Employee </h2></div>
          <div className='col-auto float-end ms-auto mb-2'><button className='addemp c2book mt-2  pt-1 pb-1 font-weight-bold'><GoPlus ></GoPlus> Add Employee</button></div>
        </div>
        <div className='b3medium'><h4 >Dashboard<span className='text-muted'><span> / </span>Employee </span></h4></div>
        <div className='row b3book'>
          <div className='col input-group emprow'>
            <input type="email" className="form-control" placeholder='Employee ID' aria-label="Sizing example " />
          </div>
          <div className='col input-group emprow'>
            <input type="email" className="form-control" placeholder='Employee Name' aria-label="Sizing example " />
          </div>
          <div className="col input-group emprow">
            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option>Select Designation</option>
              <option value="1">...</option>
              <option value="2">...</option>
              <option value="3">...</option>
            </select>
          </div>
          <div className='col-3 '><button className="form-control empbtn text-white ">SEARCH</button></div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          {
            employeedetail.map((item) => (

              <div key={item.public_id} onClick={() => profileDetail(item.public_id)} className='col-sm-6 col-md-3 mt-4 d-flex justify-content-center'>
                <div className="card " style={{ width: "19.4rem" }}>
                  <div className="text-center  ">
                    <div className="text-end me-2 pe-2 pt-2">
                      <img alt='' src={Svg} />
                    </div>

                    {(image == '' || image == null) ?
                      <img src={require("../../assests/img/avatar.png")} alt="logo" width="60px" height="60px" className='mt-2 mr-2' style={{ borderRadius: "50%" }}></img> :
                      <img src={image} alt="logo" width="60px" height="60px" className='mt-3 mr-1' style={{ borderRadius: "50%" }}></img>
                    }

                  </div>
                  <div className="card-body">
                    <p className="card-text text-center mb-0 card-img-head-width text-content b2medium">{item.fullname ? item.fullname : 'N/A'}</p>
                    <p className="card-text text-center card-img-subhead text-gry ">{item.designation ? item.designation : 'N/A'}</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div >

      </div >
    </div>
  )
}
