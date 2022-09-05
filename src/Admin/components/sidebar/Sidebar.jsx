import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { signout } from '../../../services/user-service';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { isAutheticated } from '../../../services/admin-service';
const Sidebar = () => {



const {hcode}=isAutheticated();

const onSignout = (event) => {
  event.preventDefault();
  signout(()=>{
    return <Navigate to='/'/>
  })
}

  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Welcome  {hcode} </span>


      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN MENU</p>
          <li>

            <DashboardIcon className='icon' />
            <Link to="/admin/dashboard"><span>Dashboard</span></Link>

          </li>
          <p className="title">LISTS MENU</p>
          <li>
            <GroupIcon className='icon' />
            <Link to="/admin/dashboard/manage"><span>Manage</span></Link>
          </li>
          <li>
            <Inventory2Icon className='icon' />
            <Link to="/admin/dashboard/addpaitent"><span>Add Patients</span></Link>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className='icon' />
            <Link to="/admin/dashboard/paitents"><span>Patients</span></Link>
          </li>

          <p className="title">OTHER MENU</p>
          <li>
            <QueryStatsIcon className='icon' />
            <Link to="/admin/dashboard/live"><span>Live Data</span></Link>
          </li>
          
          <li>
            <div  onClick={onSignout} >
              <PsychologyIcon className='icon' />
              <Link to="/" >
              <span>Log Out</span>
              </Link>
             
            </div>
          </li>


        </ul>
      </div>

    </div>
  )
}

export default Sidebar