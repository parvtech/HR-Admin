import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

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

export default function DashboardRoutes() {
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
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
     
          <SidebarContent>

            <Menu className="b3medium" iconShape="square">
                    
                 <MenuItem  style={ location == "/" ? { background: "#FFEBDA" } : {background: "#fff" } }   onClick={()=>navigate("/")} >
                    <img
                      src={DashChart}
                      className="img-fluid me-2 "
                      style={{ width: "20px", height: "20px" }}
                      alt=""
                    />
                    Dashboard
                  </MenuItem>
  
               <MenuItem style={ location == "/employees" ? { background: "#FFEBDA" } : {background: "#fff" } }   onClick={()=>navigate("/employees")}>
                <img
                  src={Employees}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Employees
              </MenuItem>
        
              <MenuItem style={ location == "/sub-admin" ? { background: "#FFEBDA" } : {background: "#fff" } }  onClick={()=>navigate("/sub-admin")}>
                <img
                  src={SubAdminsvg}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Sub Admin
              </MenuItem>
              

         
              <MenuItem style={ location == "/inbox" ? { background: "#FFEBDA" } : {background: "#fff" } }  onClick={()=>navigate("/inbox")}> 
                <img
                  src={Inbox}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Inbox
              </MenuItem>
          
              <MenuItem style={ location == "/events" ? { background: "#FFEBDA" } : {background: "#fff" } }  onClick={()=>navigate("/events")}> 
                <img
                  src={Events}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Events
              </MenuItem>
              <MenuItem style={ location == "/web-contents" ? { background: "#FFEBDA" } : {background: "#fff" } }  onClick={()=>navigate("/web-contents")}>
                <img
                  src={WebContents}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Web Contents
              </MenuItem>

              <MenuItem style={ location == "/custom-mail" ? { background: "#FFEBDA" } : {background: "#fff" } }  onClick={()=>navigate("/custom-mail")}>
                <img
                  src={CustomMail}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Custom Mail
              </MenuItem>

              <MenuItem style={ location == "/hr-policy" ? { background: "#FFEBDA" } : {background: "#fff" } }  onClick={()=>navigate("/hr-policy")}>
                <img
                  src={HRPolicy}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                HR Policy
              </MenuItem>

              <MenuItem style={ location == "/hr-configuration" ? { background: "#FFEBDA" } : {background: "#fff" } }  onClick={()=>navigate("/hr-configuration")}>
                <img
                  src={HrConfiguration}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                HR Configuration
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>

    </div>
  );
}
