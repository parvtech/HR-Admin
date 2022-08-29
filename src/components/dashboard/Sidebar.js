import React, { useState } from 'react';
import {
  FiEdit
}from "react-icons/fi";
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
           <div style={{width: isOpen ? "350px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
                    <img src={Logo} style={{width:"40px", height:"40px"}} alt="logo"/>
                   </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;