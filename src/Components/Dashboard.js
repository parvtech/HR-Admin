import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

import logo from "./img/imgpsh_fullsize_anim.png";
import user from "./img/Rectangle (1).png";
import hamburg from "./img/hamburg.svg";
import DashChart from "../assests/dash-chart.svg";
import Employees from "../assests/User3.svg";
import SubAdmin from "../assests/subAdmin.svg";
import Inbox from "../assests/inbox.svg";
import Events from "../assests/event.svg";
import WebContents from "../assests/WebComtent.svg";
import CustomMail from "../assests/CustomMail.svg";
import HRPolicy from "../assests/HrPolicy.svg";
import HrConfiguration from "../assests/HrConfiguration.svg";
// import hamburger from "./svg/hamburger.svg"

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";

export default function Dashboard() {
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

  return (
    <div>
      {/* // ------------------------------nav-bar----------------------- */}

      <div id="navbar-wrapper">
        <nav class="navbar navbar-expand-lg row p-0 m-0">
          <div class="navbar-header col">
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
                    alt=""
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
          <SidebarHeader>
            <div className="logotext">
              {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu className="b3medium" iconShape="square">
              <MenuItem active={true} style={{ background: "#FFEBDA" }}>
                <img
                  src={DashChart}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Dashboard
              </MenuItem>
              <MenuItem>
                <img
                  src={Employees}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Employees
              </MenuItem>
              <MenuItem>
                <img
                  src={SubAdmin}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Sub Admin
              </MenuItem>
              <MenuItem>
                <img
                  src={Inbox}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Inbox
              </MenuItem>
              <MenuItem>
                <img
                  src={Events}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Events
              </MenuItem>
              <MenuItem>
                <img
                  src={WebContents}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Web Contents
              </MenuItem>
              <MenuItem>
                <img
                  src={CustomMail}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                Custom Mail
              </MenuItem>
              <MenuItem>
                <img
                  src={HRPolicy}
                  className="img-fluid me-2 "
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                HR Policy
              </MenuItem>
              <MenuItem>
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
          {/* 
                logout section which is located in sidebar 
        */}

          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </div>
  );
}
