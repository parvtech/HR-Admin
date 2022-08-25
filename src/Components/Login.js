import React, { useState } from 'react'
import "./style.css"
import Logo from "../../src/assests/Logo.png"
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai"
export default function Login() {
  const [password, setPassword] = useState('password')
  const onSetPassword = () => {
    if (password == 'password') {
      setPassword('text')
    } else {
      setPassword('password')

    }
  }
  return (

    <div>
      <div className='container-fluid form' >
        <div className="row ">
          <div className="col-md-4 col-lg-4"></div>
          <div className="col-md-4 mt-1 pt-5 pb-5 mb-5 ">
            <img src={Logo} className="text-center rounded mx-auto mb-1 d-block img-fluid" />
            <h4 className='text-center b3black'>Welcome to Human Resources key</h4>
            <div className="card text-center d-flex form-body ">
              <div className="card-body text-center">
                <h4 className="mt-0 mb-0  b1book">Login</h4>
                <p className='text-muted '>Access to our dashboard</p>
                <form className='mt-3'>
                  <div className="input-container">
                    <label className="w-100 mb-2 mt-1 text-start c2medium">Email Address  </label>
                    <div className="input-group mb-3">
                      <span id="inputGroup-sizing-default"></span>
                      <input type="email" className="form-control form-input" placeholder='Email ID' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                  </div>
                  <div className="input-container"><label className="w-100 mb-2 mt-1 text-start c2medium">Password </label>
                    <div className="input-group">
                      <input style={{ borderRight: "none" }} className='form-input form-control mt-1' type={password} name="password" placeholder="Password" />
                      <span className='input-group-text form-input' style={{ color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} onClick={() => { onSetPassword() }} id="basic-addon1">{password == 'password' &&
                        <AiOutlineEye></AiOutlineEye>}{password != 'password' &&
                          <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                    </div>
                  </div>
                  <div className="row mt-3" style={{ fontSize: '14px', fontWeight: '450', lineHeight: '18px', letterSpacing: '0em' }}>
                    <div className="d-flex col d-grid gap-2">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: " 18.5px" }} />
                      <p className='fs-6 text-muted c2book'>Remember me</p>
                    </div>
                    <div className="col  text-end">
                      <Link className="text-black fs-6 text-muted text-decoration-none c2book" to={"/forgot-password"}>Forgot password?</Link>
                    </div>
                  </div>
                  <button type="button" className="btn w-100 col-10 mt-1 form-btn" >Login</button>

                </form>

              </div>

            </div>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>

  )
}
