import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import { useEffect } from 'react'
import { getDashData, saveData ,isAutheticated} from '../../services/user-service'

const Home = () => {

  useEffect(() => {
    const { data } = isAutheticated();
    const {  user,token } = data;
    console.log(token)
    const id = user.id
    getDashData(id, token)
        .then((data) => {
            if (data.error) {
                console.log(data.error)

            }
            else {

              saveData(data,()=>{
                console.log(data);
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

export default Home