import './feature.scss'
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { isAdminSaved } from '../../../services/admin-service';

const Feature = () => {


  
  const {positive,total,vaccinated}=isAdminSaved();

  const per=Math.round((positive/total)*100);

  return (
    <div className='feature'>
      <div className="top">
        <h1 className="title">Covid Sats</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featureChart">
          <CircularProgressbar value={per} text={`${per}%`} strokeWidth={5} />
        </div>
        <p className="title">
         Total Cases in Your Area
        </p>
        <p className="amount">
          {positive}
        </p>
        <p className="desc">
         Covid Trends vs Vaccination
        </p>
        <p className="summary">
          <div className="item">
            <div className="itemTitle">Total User</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="resultAmount">{total}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Vaccinated</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="resultAmount">{vaccinated}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Positive</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small' />
              <div className="resultAmount">{positive}</div>
            </div>
          </div>
        </p>
      </div>
    </div>
  )
}

export default Feature