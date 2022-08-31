import React from 'react'
import "./SubAdmin.css"
import { GoPlus } from 'react-icons/go'
import Card from '../Card'


const SubAdmin = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row b3book'>
                    <div className='col-9 col-lg-10 h1book'><h2>Sub Admin </h2></div>
                    <div className='col-auto float-end ms-auto mb-2 '><button className='addsub c2book ms-5  mt-2 pt-1 pb-1'><GoPlus></GoPlus>Add Sub Admin</button></div>
                </div>
                <div className='b3medium'><h4 >Dashboard<span className='text-muted'><span> /</span> Sub Admin </span></h4></div>
                <div className='row b3book'>
                    <div className='col input-group subrow '>
                        <input type="email" className="form-control" placeholder='Sub Admin ID' aria-label="Sizing example " />
                    </div>
                    <div className='col input-group subrow'>
                        <input type="email" className="form-control" placeholder='Sub Admin Name' aria-label="Sizing example " />
                    </div>
                    <div className='col'></div>
                    <div className='col-3 '><button className="form-control subbtn text-white" style={{backgroundColor:"#36A643"}}>SEARCH</button></div>
                </div>
            </div>
            <Card />
        </div>

    )
}
export default SubAdmin 