import { useState ,useEffect} from 'react';
import { getAllmembers } from '../../../services/admin-service';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
const Paitents=()=>{

    const [data, setdata] = useState([])

    useEffect(() => {
        getAllmembers()
            .then((data) => {
                if (data.error) {
                    console.log(data.error)

                }
                else {
                    setdata(data)
                }
            })

    }, [])


    return (
       
             <div className="home">
            <Sidebar />
            <div className="homeContainer" style={{ "margin": "2%", "backgroundColor": "#E5F3EA" }}>

                
                    
                        <Table striped bordered hover>
      <thead>
        <tr>
          <th>PID</th>
          <th>AADHAR NO</th>
          <th>NAME</th>
          <th>PINCODE</th>
          <th>CITY</th>
          <th>STATE</th>
          <th>COUNTRY</th>
          <th>DOSE</th>
          <th>COVID</th>
          <th>EDIT</th>
        </tr>
      </thead>
      <tbody>

          {
               data.map(det =>
                <tr>
                <td>{det.pid}</td>
                <td>{det.aadharNo}</td>
                <td>{det.name}</td>
                <td>{det.pincode}</td>
                <td>{det.city}</td>
                <td>{det.address}</td>
                <td>{det.country}</td>
                <td>{det.vaccinationStatus}</td>
                <td>{det.currentHealth}</td>
                <td>
                  <Link to={`/admin/dashboard/update/${det.pid}`}>
                  <Button variant="success">Edit</Button>
                  </Link>
                  </td>
              </tr>
                )
          }
       
      </tbody>
    </Table>
                  
                
            </div>
            </div>

       
    )
}

export default Paitents;