import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import EmpManagement from './Components/EmpManagement';
import Events from './Components/Events';
import ForgotPassword from './Components/ForgotPassword ';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';

function App() {

  return (
    <div >
      <Router>
        <nav className="nav justify-content-center navbar-light">
          <NavLink className="nav-item nav-link" to="/">Dashboard</NavLink>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link" to="/employees ">Employee Management</NavLink>
          <NavLink className="nav-item nav-link" to="/events">Events</NavLink>
          <NavLink className="nav-item nav-link" to="/forgot-password">Forgot Password</NavLink>
          <NavLink className="nav-item nav-link" to="/reset-password"> Reset Password</NavLink>
        </nav>
        <div className="App">
          <Routes>
            <Route exact path='/' element={< Dashboard />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/employees' element={< EmpManagement />}></Route>
            <Route exact path='/events' element={< Events />}></Route>
            <Route exact path='/forgot-password' element={< ForgotPassword />}></Route>
            <Route exact path='/reset-password' element={<ResetPassword/>}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
