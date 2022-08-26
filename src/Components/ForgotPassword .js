import React, { useState } from 'react'
import Logo from "../../src/assests/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    let url = process.env.REACT_APP_BASEURL + `api/password_reset/`
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
      }
    }
    axios.post(url, email, config)
      .then(res => {
        console.log(res);
        if (res.code == 200) {
          setLoading(false)
          navigate('/reset-password')
          console.log(res.message);
        }
        if (res.code == 400) {
          setLoading(false)
          console.log(res.errors);
        }
        else {
          console.log(res.code);
        }
      }
      )
      .catch(err => {
        setLoading(false)
        console.log(err);
      })
  }
  return (
    <div>
      {JSON.stringify(email)}
      <div className='container-fluid form' >
        <div className="row ">
          <div className="col-md-4 col-lg-4 "></div>
          <div className="col-md-4 mt-1 pt-5 pb-5 mb-5 ">
            <img src={Logo} className="text-center rounded mx-auto mb-1 d-block img-fluid" alt='' />
            <h4 className='text-center b3black'>Welcome to Human Resources key</h4>
            <div className="card text-center d-flex form-body ">
              <div className="card-body text-center">
                <h4 className="mt-0 mb-0  b1book">Forgot Password?</h4>
                <p className='text-muted '>Enter your email to get a password reset link</p>
                <form className='mt-3'>
                  <div className="input-container">
                    <label className="w-100 mb-2 mt-1 text-start c2medium">Email Address  </label>
                    <div className="input-group mb-3">
                      <span id="inputGroup-sizing-default"></span>
                      <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control form-input" placeholder='Email ID' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                  </div>

                  {loading ?
                    <button type="button" className="btn w-100 col-10 mt-3 form-btn" onClick={handleSubmit} >
                      Sending... <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                    :
                    <button type="button" className="btn w-100 col-10 mt-3 form-btn" onClick={handleSubmit} > Reset</button>
                  }
                  <div className="row mt-3" style={{ fontSize: '14px', fontWeight: '450', lineHeight: '18px', letterSpacing: '0em' }}>
                    <p className=' small m-1 text-center c2book'>Remember your Password? <Link to="/login" style={{ color: "#FC6075" }} className='text-decoration-none'>Login</Link></p>
                  </div>
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
