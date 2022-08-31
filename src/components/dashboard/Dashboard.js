import React from 'react'
import DashboardCircle from "../../assests/img/DashboardCircle.svg"
import { VscAdd } from 'react-icons/vsc'

const Dashboard = () => {
  return (
<>
<div className="d-flex bd-highlight">
  <div className="p-2 flex-grow-1 bd-highlight">
  <h4 className=" bd-highlight">Welcome Admin!</h4>
      <p className="bd-highlight" style={{color:"#8E8E8E", fontSize:"16px"}}>Dashboard</p>
  </div>
  <div className="p-2 bd-highlight">
  <button className='addsub c2book p-1'><VscAdd></VscAdd> Upload Attendance Sheet</button>
  </div>
</div>

<div className="row">
  <div className="col-sm-4 col-md-4 col-lg-4">
    <div className="card">
      <div className="card-body">    
        <div className="d-flex bd-highlight">
          <div className="me-auto p-2 bd-highlight">
            <img src={DashboardCircle} alt="DashboardCircle"/>
          </div>
         <div className='d-flex flex-column'>
         <h4 className=" bd-highlight">112</h4>
         <p className=" bd-highlight">Total Employees</p>
         </div>
         </div>
       </div>
    </div>
  </div>

  <div className="col-sm-4 col-md-4 col-lg-4">
    <div className="card">
      <div className="card-body">    
        <div className="d-flex bd-highlight">
          <div className="me-auto p-2 bd-highlight">
          <img src={DashboardCircle} alt="DashboardCircle"/>
          </div>
          <div className='d-flex flex-column'>
         <h4 className=" bd-highlight">44</h4>
         <p className="bd-highlight">Active Employees</p>
         </div>
         </div>
       </div>
    </div>
  </div>
  
  <div className="col-sm-4 col-md-4 col-lg-4">
    <div className="card">
      <div className="card-body">    
        <div className="d-flex bd-highlight">
          <div className="me-auto p-2 bd-highlight">
          <img src={DashboardCircle} alt="DashboardCircle"/>
          </div>
          <div className='d-flex flex-column'>
           <h4 className=" bd-highlight">37</h4>
           <p className="bd-highlight">Inactive Employees</p>
         </div>
         </div>
       </div>
    </div>
  </div>
</div>

</>
  )
}

export default Dashboard