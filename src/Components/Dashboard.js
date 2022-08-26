import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Dashboard() {

    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
    },[])

    return (
        <div style={{padding:"2rem"}}>
            <h1>Dashboard</h1>
            <button className='btn btn-danger' onClick={()=>{localStorage.removeItem('token')}}>Logout</button>
        </div>
    )
}
