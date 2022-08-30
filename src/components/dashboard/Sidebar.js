import React, { useState } from 'react';
import {FiEdit}from "react-icons/fi";
import {AiOutlineDashboard} from "react-icons/ai"
import {MdOutlineMail} from "react-icons/md"
import {IoCalendarOutline} from "react-icons/io5"
import {BiEditAlt} from "react-icons/bi"
import {CgNotes} from "react-icons/cg"
import {BsSliders} from "react-icons/bs"
import {FaUsers,FaBars, FaRegUser} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import "./Dashboard.css"
import Logo from "../../assests/Logo.png"
import Dropdown from 'react-bootstrap/Dropdown';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<AiOutlineDashboard/>
        },
        {
            path:"/employees",
            name:"Employees",
            icon:<FaUsers/>
        },
        {
            path:"/sub-admin",
            name:"Sub Admin",
            icon:<FaRegUser/>
        },
        {
            path:"/inbox",
            name:"Inbox",
            icon:<MdOutlineMail/>
        },
        {
            path:"/events",
            name:"Events",
            icon:<IoCalendarOutline/>
        },
        {
            path:"/web-contents",
            name:"Web Contents",
            icon:<FiEdit/>
        },
        {
          path:"/custom-mail",
          name:"Custom Mail",
          icon:<BiEditAlt/>
        },
          {
            path:"/hr-policy",
            name:"HR Policy",
            icon:<CgNotes/>
        },
        {
          path:"/hr-configuration",
          name:"HR Configuration",
          icon:<BsSliders/>
        },
    ]
    return (
        <div className="d-flex start">
           <div style={{width: isOpen ? "250px" : "70px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "block"}} className="logo">
                    <img src={Logo} style={{width:"40px", height:"40px"}} alt="logo"/>
                   </h1>
                 
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{textDecoration:"none"}}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <div>
           <nav class="navbar navbar-white bg-white justify-content-between">
            
           <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                       <h6 style={{marginLeft:"10px", marginTop:"5px"}}>TechRadix Private Limited</h6>
                   </div>
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic right">
                    Admin
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-4">HR Pay</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </nav>
            <main>{children}</main>
           </div>     
        </div>
    );
};

export default Sidebar;