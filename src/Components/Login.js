import React,{ useState } from 'react'
import Logo from "../../src/assests/Logo.png"
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai"
export default function Login() {
  const [password, setPassword] = useState('password')
  const onSetPassword = ()=>{
    if(password == 'password'){
      setPassword('text')
    }else{
      setPassword('password')

    }
  }
    return (
        
            <div>
    <div className='container-fluid  fullscreen' style={{backgroundColor:"#F7F7F7"}}>
        <div className="row overlay">
          <div className="col-md-4 col-lg-4"></div>
            <div className="col-md-4 mt-1 pt-5 pb-5 mb-5 ">
                <img src={Logo} className="text-center rounded mx-auto mb-1 d-block img-fluid"/>
            <h6 className='text-center'>Welcome to Human Resources key</h6>
                <div className="card text-center d-flex  ">
                    <div className="card-body text-center">
                    <h4 className="mt-0 mb-0"><b>Login</b></h4>
                    <p  className='text-muted'>Access to our dashboard</p>
                    <form className='mt-3'>
                   <div className="input-container">
                     <label className="w-100 mb-2 mt-3 text-start"><b>Email Address </b> </label>
                     <div className="input-group mb-3">
                    <span  id="inputGroup-sizing-default"></span>
                 <input type="email" className="form-control" placeholder='Email ID' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style={{backgroundColor:"#F7F7F7",borderRadius:"5px"}}/>
               </div>  
                </div>
                 <div className="input-container ">
                    <div className=' row mt-3 mb-2'>
                    <div className='text-start col'> <label className=""><b>Password </b></label> </div>  <div className='col text-end'> <span>  <Link to='/' className='text-decoration-none text-muted'>Forgot Password ?</Link></span></div></div>
                    <div className="input-group">
            <input style={{backgroundColor:"#F7F7F7", borderRight:"none"}} className=' form-control mt-1' type={password} name="password" placeholder="Password" />
            <span className='input-group-text' style={{color:"black",borderLeft:"none", marginTop:"4px",backgroundColor:"#F7F7F7",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",borderRightt:"none"}} onClick={()=>{onSetPassword()}} id="basic-addon1">{password == 'password' && 
             <AiOutlineEye></AiOutlineEye>}{password != 'password' &&
             <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span> 
        </div>
                  </div>
                  <button type="button" className="btn w-100 col-10 mt-3" style={{background: "linear-gradient(50deg,#FF9B44,#FC6075)"}}>Login</button>

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
