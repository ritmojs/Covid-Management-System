import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import { useEffect } from 'react'
import { saveAdmin, getDashData ,isAutheticated} from '../../../services/admin-service'

const AdminHome = () => {

  useEffect(() => {
    const { id } = isAutheticated();
    getDashData(id)
        .then((data) => {
            if (data.error) {
                console.log(data.error)

            }
            else {

              saveAdmin(data,()=>{
                
              })

                
            }
        })

})
  


  

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer" >

        <div className='widgets'>
          <Widget type='users' />
          <Widget type='orders' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>
        <div className="charts">
          <Feature />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default AdminHome