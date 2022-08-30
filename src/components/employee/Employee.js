import React from 'react'
import "../employee/Employee.css"
import { GoPlus } from 'react-icons/go'
import Card from '../Card'

export default function Employee() {

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
          <div class="col input-group emprow">
            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option selected>Select Designation</option>
              <option value="1">...</option>
              <option value="2">...</option>
              <option value="3">...</option>
            </select>
          </div>
          <div className='col-3 '><button className="form-control empbtn text-white ">SEARCH</button></div>
        </div>
      </div>
      <Card />
    </div>
  )
}
