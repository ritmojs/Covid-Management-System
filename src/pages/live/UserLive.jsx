import { useState ,useEffect} from 'react';
import { getAllmembers } from '../../services/admin-service';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Container, Form, Row ,Col,Card} from 'react-bootstrap';
const UserLive=()=>{

    const [data, setdata] = useState([])
    const [copy,setCopy]=useState([])
    useEffect(() => {
        getAllmembers()
            .then((data) => {
                if (data.error) {
                    console.log(data.error)

                }
                else {
                    setdata(data)
                    setCopy(data)
                }
            })

    }, [])



    const [category,setCategory]=useState([]);
    const handleChange = (event) => {
        setCategory(event.target.value)
      };
const [cat,setCat]=useState();
const handleCat=(event)=>{

    return setCat(event.target.value)
}

const onSubmit=()=>{
    console.log(data)
    if(category.length===0)
    return setdata(copy)
    switch(cat) {
        case "NAME": {
        
                const fpincode=data.filter((d)=>{
                    return d.name=== category
                })
               setdata(fpincode)
            }
         break;
        case "PINCODE":
          {
            const fpincode=data.filter((d)=>{
                return d.pincode=== category
            })
           setdata(fpincode)
          }
          break;
        case "CITY":
            {const fpincode=data.filter((d)=>{
                return d.city=== category
            })
           setdata(fpincode)
       
          // code block
      }
      break;
      case "COUNTRY":
            {const fpincode=data.filter((d)=>{
                return d.country=== category
            })
           setdata(fpincode)
       
          // code block
      }
      break;
      case "STATE":
        {const fpincode=data.filter((d)=>{
            return d.address=== category
        })
       setdata(fpincode)
  

      // code block
  }

break;
case "DOSE":
        {const fpincode=data.filter((d)=>{
            return d.vaccinationStatus=== category
        })
       setdata(fpincode)
   
      // code block
  }
  break;
  case "COVID":
        {const fpincode=data.filter((d)=>{
            return d.currentHealth=== category
        })
       setdata(fpincode)
   
      // code block
  }
break;
  default:
}

      
}






    return (
       
             <div className="home">
            <Sidebar />
            <div className="homeContainer" style={{ "margin": "2%",}}>

   
    
   
   
   
    <Card>
      <Card.Body>
      <Container>
<Row>

    <Col>
    
      <Form.Control as="select" value={cat} onChange={handleCat}>
                    <option >PINCODE</option>
                    <option >CITY</option>
                    <option >COUNTRY</option>
                    <option >STATE</option>
                    <option >DOSE</option>
                    <option >COVID</option>
                    <option >NAME</option>

                </Form.Control>
     

   
   
    </Col>
    <Col>
    
    <Form.Control type="text" placeholder="Enter Value For Category" value={category} onChange={handleChange} />


   
    </Col>
    <Col>
    <Button onClick={onSubmit}>
        Search
    </Button>
    </Col>
</Row>
</Container>
</Card.Body>

    </Card>
  
               

                
                   
       
                        <Table striped bordered hover style={{"backgroundColor":"#E5F3EA"}}>

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
                
              </tr>
                )
          }
       
      </tbody>
    </Table>
                  
                
            </div>
            </div>

       
    )
}

export default UserLive;