import React from 'react'
import Logo from "./img/imgpsh_fullsize_anim.png"
import "./ForgPass.css"
export default function ForgotPassword() {
    return (
        <div className='align-self-center ' style={{backgroundColor:"#F7F7F7",height: '93vh'}}>        
            <div className='container d-flex justify-content-center'>                
                <div className='row'>
                    <div className='col  mt-5 pt-5 '>
                        <img src={Logo} className="text-center rounded mx-auto mb-1 d-block img-fluid"/>
                        <p className='text-center'>Welcome To Human Resources Pay</p>
                        <div className='card m-3 p-3'>
                            <h4 className='text-center'>Forgot Password ?</h4>
                            <p className='text-secondary small text-center'>Enter your email to get a password reset link</p>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-start small"><b>Email Address</b></label>
                                    <input type="email" className="form-control" placeholder='Email ID' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div> 
                                <button type="submit" className="btn w-100" style={{background: "linear-gradient(50deg,#FC6075,#FF9B44)"}}>Forgot Password</button>
                                <p className=' small text-center'>Remember your Password? <span style={{color:"#FC6075"}}>Login</span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
