import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Employee from './components/employee/Employee';
import EmpManagement from './components/EmpManagement';
import ForgotPassword from './components/ForgotPassword ';
import Login from './components/Login';
import ProfileInfo from './components/ProfileInfo';
import ResetPassword from './components/ResetPassword';
import SubAdmin from "./components/subadmin/SubAdmin";
import Profile from './components/profile/Profile';
import Card from './components/Card';
import ProfileEmployee from './components/profile/ProfileEmployee';
import Inbox from './components/Inbox/Inbox';
import CustomMail from './components/custom-mail/CustomMail';
import EventsComponent from './components/events/EventsComponent';
import WebContents from './components/web-contents/WebContents';
import Hr_Configuartion from './components/hr-configuration/Hr_Configuartion';
import Hr_Policy from './components/hr-policy/Hr_policy';
import Sidebar from './components/dashboard/Sidebar';


const App = () => {
  return (
    <div >
      <Router basename={'/hradmin'}>
        {/* <nav className="nav justify-content-center navbar-light">
          <NavLink className="nav-item nav-link" to="/">Dashboard</NavLink>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link" to="/employees ">Employee Management</NavLink>
          <NavLink className="nav-item nav-link" to="/events">Events</NavLink>
          <NavLink className="nav-item nav-link" to="/forgot-password">Forgot Password</NavLink>
          <NavLink className="nav-item nav-link" to="/reset-password"> Reset Password</NavLink>
          <NavLink className="nav-item nav-link" to="/employee"> Employee</NavLink>
          <NavLink className="nav-item nav-link" to="/card">Card</NavLink>
          <NavLink className="nav-item nav-link" to="/profileinfo">ProfileInfo</NavLink>
          <NavLink className="nav-item nav-link" to="/sub-admin"> Sub Admin</NavLink>
          <NavLink className="nav-item nav-link" to="/profile">Proflie</NavLink>
          <NavLink className="nav-item nav-link" to="/profileemployeee">Prolie / Employee</NavLink>
        </nav> */}
        <div className="App">
          <Routes>
          <Route exact path='/login' element={<Login />}></Route>
          </Routes>

         <Sidebar>
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/employees' element={<EmpManagement />}/>
            <Route exact path='/events' element={<EventsComponent/>}/>
            <Route exact path='/forgot-password' element={< ForgotPassword />}/>
            <Route exact path='/reset-password' element={<ResetPassword />}/>
            <Route exact path='/employee' element={<Employee />}/>
            <Route exact path='/card' element={<Card />}/>
            <Route exact path='/profileinfo' element={<ProfileInfo />}/>
            <Route exact path='/sub-admin' element={<SubAdmin />}/>
            <Route exact path='/inbox' element={<Inbox/>}/>
            <Route exact path='/web-contents' element={<WebContents/>}/>
            <Route exact path='/custom-mail' element={<CustomMail/>}/>
            <Route exact path='/hr-policy' element={<Hr_Policy/>}/>
            <Route exact path='/hr-configuration' element={<Hr_Configuartion/>}/>
            <Route exact path='/profile' element={<Profile />}/>
            <Route exact path='/profile/:id' element={<Profile />}></Route>
            <Route exact path='/profileemployeee' element={<ProfileEmployee />}/>  
          </Routes>
          </Sidebar>
        </div>
      </Router>
    </div>
  );
}

export default App;
