import React from 'react'
import { VscAdd } from 'react-icons/vsc'
import "./SubAdmin.css"
import Card from '../Card'


const SubAdmin =()=> {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row b3book'>
                    <div className='col h1book'><h2>Sub Admin </h2></div>
                    <div className='col-2'><button className='addsub c2book'><VscAdd></VscAdd> Add Sub Admin</button></div>
                </div>
                <div className='b3medium'><h4 >Dashboard<span className='text-muted'><span> /</span> Sub Admin </span></h4></div>
                <div className='row b3book'>
                    <div className='col input-group subrow '>
                        <input type="email" className="form-control" placeholder='Sub Admin ID' aria-label="Sizing example " />
                    </div>
                    <div className='col input-group subrow '>
                        <input type="email" className="form-control" placeholder='Sub Admin Name' aria-label="Sizing example " />
                    </div>
                    <div className='col'></div>
                    <div className='col-3 '><button className="form-control subbtn text-white ">SEARCH</button></div>
                </div>
            </div>
            <Card />
        </div>

    )
}
export default SubAdmin 