import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";

// import images, wich  is used in this page

import logo from "../../assests/img/imgpsh_fullsize_anim.png";
import user from "../../assests/img/Rectangle.png"
import hamburg from "../../assests/img/hamburg.svg";
import DashChart from "../../assests/dash-chart.svg";
import Employees from "../../assests/User3.svg";
import SubAdminsvg from "../../assests/subAdmin.svg";
import Inbox from "../../assests/inbox.svg";
import Events from "../../assests/event.svg";
import WebContents from "../../assests/WebComtent.svg";
import CustomMail from "../../assests/CustomMail.svg";
import HRPolicy from "../../assests/HrPolicy.svg";
import HrConfiguration from "../../assests/HrConfiguration.svg";
import SubAdmin from "../subadmin/SubAdmin";
// import hamburger from "./svg/hamburger.svg"

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";
import EventsComponent from "../events/EventsComponent";

  const  Sidebar = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // navigate("/login")
    }
  }, []);

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let location = useLocation().pathname


    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            // image: require('../../assests/img/Rectangle.png')
            icon: <FaUserAlt/>

        },
        {
            path:"/employees",
            name:"Employees",
            icon:<FaUserAlt/>
        },
        {
            path:"/sub-admin",
            name:"Sub Admin",
            icon:<FaRegChartBar/>
        },
        {
            path:"/inbox",
            name:"Inbox",
            icon:<FaCommentAlt/>
        },
        {
            path:"/events",
            name:"Events",
            icon:<FaShoppingBag/>
        },
        {
            path:"/web-contents",
            name:"Web Contents",
            icon:<FaThList/>
        },
        {
          path:"/custom-mail",
          name:"Custom Mail",
          icon:<FaThList/>
      },
      {
        path:"/hr-policy",
        name:"HR Policy",
        icon:<FaThList/>
    },
    {
      path:"/hr-configuration",
      name:"HR Configuration",
      icon:<FaThList/>
  }
    ]
  return (
    <div>
      {/* // ------------------------------nav-bar----------------------- */}

      <div id="navbar-wrapper">
        <nav className="navbar navbar-expand-lg row p-0 m-0">
          <div className="navbar-header col">
            <SidebarHeader className=" row">
              <div className="logotext">
                {/* small and big change using menucollapse state */}
                <p>
                  {menuCollapse ? (
                    // logo image for full side bar
                    <img
                      src={logo}
                      className="img-fluid rounded-pill"
                      style={{
                        width: "30px",
                        height: "30px",
                        position: "absolute",
                        left: "20px",
                        top: "11px",
                      }}
                      alt=""
                    />
                  ) : (
                    <img
                      src={logo}
                      className="img-fluid rounded-pill"
                      style={{
                        width: "40px",
                        height: "40px",
                        position: "absolute",
                        top: "0px",
                        left: "90px",
                      }}
                      alt=""
                    />
                  )}
                </p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                  <img
                    src={hamburg}
                    className="img-fluid"
                    style={{
                      width: "21px",
                      height: "15px",
                      position: "absolute",
                      left: "82px",
                      top: "19px",
                    }}
                  />
                ) : (
                  <img
                    src={hamburg}
                    className="img-fluid"
                    style={{
                      width: "21px",
                      height: "15px",
                      position: "absolute",
                      top: "13px",
                      left: "221px",
                    }}
                    alt=""
                  />
                )}
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                  <h1
                    style={{
                      fontSize: "20px",
                      position: "absolute",
                      left: "124px",
                      top: "13px",
                    }}
                  >
                    Techradix Private Limited
                  </h1>
                ) : (
                  <h1
                    style={{
                      fontSize: "20px",
                      position: "absolute",
                      left: "263px",
                      top: "7px",
                    }}
                  >
                    Techradix Private Limited
                  </h1>
                )}
              </div>
            </SidebarHeader>
            <div className="top_section ps-4 ms-5"></div>
          </div>
          <div className="col text-end pe-4 me-4">
            <div className="row">
              <div className=" col-10 me-0">
                <img
                  src={user}
                  className="img-fluid rounded-pill"
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
              </div>
              <div className="dropdown col-2 ms-0 ">
                <p
                  className="text-dark small dropdown-toggle pt-2"
                  type="text"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "15px" }}
                >
                  Admin
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <hr className="m-0 p-0"></hr>
      </div>
        
      {/* // --------------------------side-bar-----------------------------------  */}
             <div className="container">
                    <div style={{width: menuCollapse ? "200px" : "50px"}} className="sidebar">
                        <div className="top_section">
                            <h1 style={{display: menuCollapse ? "block" : "none"}} className="logo">Logo</h1>
                            <div style={{marginLeft: menuCollapse ? "50px" : "0px"}} className="bars">
                                <FaBars onClick={menuCollapse}/>
                            </div>
                        </div>
                        {
                            menuItem.map((item, index)=>(
                                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                    <div className="icon" >
                                {item.icon}
                                     
                                     
                                    </div>
                                    <div style={{display: menuCollapse ? "block" : "none"}} className="link_text">{item.name}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                    <main>{children}</main>
                 </div>
    </div>
  );
}
export default  Sidebar




// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import "./Dashboard.css"
// import logo from "../../assests/img/imgpsh_fullsize_anim.png";
// import user from "../../assests/img/Rectangle.png"
// import hamburg from "../../assests/img/hamburg.svg";
// import DashChart from "../../assests/dash-chart.svg";
// import Employees from "../../assests/User3.svg";
// import SubAdminsvg from "../../assests/subAdmin.svg";
// import Inbox from "../../assests/inbox.svg";
// import Events from "../../assests/event.svg";
// import WebContents from "../../assests/WebComtent.svg";
// import CustomMail from "../../assests/CustomMail.svg";
// import HRPolicy from "../../assests/HrPolicy.svg";
// import HrConfiguration from "../../assests/HrConfiguration.svg";

// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             image: require('../../assests/img/Rectangle.png')
//         },
//         {
//             path:"/about",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Comment",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//     return (
//         <div className="container">
          
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">
//                             <img  src={item.image}/>
                           
                           
//                            </div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;