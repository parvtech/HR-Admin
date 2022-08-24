import React from 'react'
import  Logo  from "../../src/asstes/Logo.png"
import "./Reset.css"
import { AiFillEye } from "react-icons/ai"


export default function ResetPassword () {
  return (
    <div style={{backgroundColor:"#F7F7F7",height:"90vh"}}>
    <div className='container-fluid'>                
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 mt-4'>
                <img src={Logo} className="text-center rounded mx-auto mb-1 d-block img-fluid"/>
                <p className='text-center b3medium'>Welcome To Human Resources Pay</p>
                <div className='card m-3 p-3 '>
                    <h4 className='text-center b1medium'>Reset Password</h4>
                    <p className='text-center c2book'>Enter your new password</p>
                    <form>
                        <div className=" input-container mb-3">
                            <label for="exampleInputEmail1" className="form-label text-start c2medium ">Create New Password</label>
                           
                            <input type="email" className="form-control" placeholder='123456' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                             <span className='faicon'><AiFillEye></AiFillEye></span> 
                            
                            
                        </div> 
                        <div className="input-container mb-3">
                            <label for="exampleInputEmail1" className="form-label text-start c2medium">Confirm New Password</label>
                            <input type="email" className="form-control" placeholder='123456' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <span className='faicon1'><AiFillEye></AiFillEye></span>
                             
                        </div> 
                        <button type="submit" className="btn btn-primary w-100 " style={{background:"linear-gradient(50deg, #FC6075,#FF9B44)"}}>Save Password</button>
                        
                    </form>
                </div>
            </div>
            <div className='col-4'></div>
        </div>
    </div>   
</div>
   
    
  )
}

