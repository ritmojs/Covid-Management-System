import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from './Auths/Signup';
import Signin from "./Auths/Signin"
import Homepage from './Homepage';
import Home from './pages/home/Home'
import Signout from './Auths/Signout';
import AddMembers from './pages/addMembers/AddMembers';
import Profile from './pages/profile/Profile';
import FamilyMember from './pages/familMembers/FamilyMember';
import CreateProfile from './pages/createProfile/CreateProfile';
import AdminLogin from './Admin/Auths/AdminLogin';
import AdminSignup from './Admin/Auths/AdminSignup';
import AdminHome from './Admin/pages/home/AdminHome';
import AdminAddMembers from './Admin/pages/addMembers/AdminAddMembers';
import AdminProfile from './Admin/pages/profile/AdminProfile';
import Paitents from './Admin/pages/familMembers/Paitents';
import UpdatePaitents from './Admin/pages/form/UpdatePaitents';
import CreateAdmin from './Admin/pages/createProfile/CreateAdmin';
import LiveCases from './Admin/pages/liveCases/LiveCases';
import PrivateRoute from './services/PrivateRoute';
import UserLive from './pages/live/UserLive';
class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>



          <Routes>
            <Route  element={<PrivateRoute/>}>
            
            <Route exact path="/admin/dashboard" element={<AdminHome/>} />
            <Route exact path="/admin/dashboard/addpaitent" element={<AdminAddMembers/>} />
            <Route exact path="/admin/dashboard/paitents" element={<Paitents/>} />
            <Route exact path="/admin/dashboard/manage" element={<AdminProfile/>} />
            <Route path="/admin/dashboard/update/:id" element={<UpdatePaitents/>} />
            </Route>
            <Route exact path="/dashboard" element={<Home />} />
            <Route exact path="/dashboard/addmembers" element={<AddMembers />} />
            <Route exact path="/dashboard/members" element={<FamilyMember />} />
            
            <Route exact path="/dashboard/livecases" element={<UserLive />} />

            <Route exact path="/user/create/profile" element={<CreateProfile />} />
            <Route exact path="/dashboard/profile" element={<Profile />} />
            



            <Route exact path="/admin/dashboard/live" element={<LiveCases/>} />
            <Route path="/admin/create/profile" element={<CreateAdmin/>} />
           
            
            <Route exact path="/admin/signin" element={<AdminLogin/>} />
            <Route exact path="/admin/signup" element={<AdminSignup/>} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/signout" element={<Signout />} />
            <Route path="/" element={<Homepage />} />
            <Route exact path="/signin" element={<Signin />} />
           






          </Routes>
       
        </BrowserRouter>
      </div>

    )
  }
}

export default App;
