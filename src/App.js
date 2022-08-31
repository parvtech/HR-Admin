import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Employee from './components/employee/Employee';
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
import HrConfiguartion from './components/hr-configuration/HrConfiguartion';
import HrPolicy from './components/hr-policy/HrPolicy';
import Sidebar from './components/dashboard/Sidebar';
import PrivateRoutes from './utils/PrivateRoutes';
import NotFound from './components/404NotFound/NotFound';


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

        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Sidebar>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path='/' element={<Dashboard />} />
              {/* <Route exact path='/login' element={<Navigate to={'/'} />} /> */}
              <Route exact path='/employees' element={< EmpManagement />} />
              <Route exact path='/events' element={< EventsComponent />} />
              <Route exact path='/forgot-password' element={< ForgotPassword />} />
              <Route exact path='/reset-password' element={<ResetPassword />} />
              <Route exact path='/employee' element={<Employee />} />
              <Route exact path='/card' element={<Card />} />
              <Route exact path='/profileinfo' element={<ProfileInfo />} />
              <Route exact path='/sub-admin' element={<SubAdmin />} />
              <Route exact path='/inbox' element={<Inbox />} />
              <Route exact path='/web-contents' element={<WebContents />} />
              <Route exact path='/custom-mail' element={<CustomMail />} />
              <Route exact path='/hr-policy' element={<Hr_Policy />} />
              <Route exact path='/hr-configuration' element={<Hr_Configuartion />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/profileemployeee' element={<ProfileEmployee />} />
            </Route>
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
