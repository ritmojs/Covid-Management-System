import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { isAutheticated ,getadminProfile,updateData} from '../../../services/admin-service';
import { toast, ToastContainer } from 'react-toastify';
const AdminProfile = () => {

   

    const [values, setValues] = useState({
        city: "",
        country: "",
        pincode: "",
        oxy:"",
        bed:"",
        address:""
    });
const [admin,setAdmin]=useState(
    {
        email:"",
    }
)
const [hd,setHd]=useState({
    hcode:"",
    hname:"",
})
    useEffect(() => {
        const { id } = isAutheticated();
        
        getadminProfile(id)
            .then((data) => {
                if (data.error) {
                    console.log(data.error)

                }
                else {
                    setValues({
                        city: data.city,
                        country: data.country,
                        pincode: data.pincode,
                        oxy:data.oxy,
                        bed:data.bed,
                        address:data.address

                    })
                    setAdmin({
                        email:data.admin.email
                    })
                    setHd({
                        hcode:data.hcode.hcode,
                        hname:data.hcode.hname
                    })
                   
                }
            })

    }, [])

const {email}=admin;
const {hcode:hc,hname}=hd;
    const { city, country, pincode,oxy,bed,address} = values;
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        
        const { id } = isAutheticated();
            updateData(id,values)
                .then(data => {
                    
                    if (data.error) {
                        toast.warn(data.error)
                    }
                    else {
                       
                        
                       toast.success("Update Done !")
                    }
                })
                .catch((err)=>toast.warn(err))
       
    };


    
    return (
        <div className="home" >
            <Sidebar />
            <div className="homeContainer" style={{ "backgroundColor": "#E5F3EA" }}>

                <div className="charts">
                    <div className='container' style={{ marginTop: "5%" }}>
                        <div className='row'>
                            <div className='col-lg-6'>

                                <Card style={{ width: '100%' }}>
                                    <div style={{ "textAlign": "center" }}>
                                  
                                        <Card.Img variant="side" src="https://img.icons8.com/cotton/64/000000/hospital--v5.png" style={{  padding: "1%" }} />
                                    </div>

                                    <Card.Body style={{ textAlign: "center" }}>
                                        <Card.Title style={{ "color": "#189047" }}>{hname}</Card.Title>
                                        <Card.Text>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Form.Label style={{ "color": "#189047" }} >City</Form.Label>
                                                        <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={city} onChange={handleChange("city")} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label style={{ "color": "#189047" }} >Country</Form.Label>
                                                        <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={country} onChange={handleChange("country")} />
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Form.Label style={{ "color": "#189047" }} >Email</Form.Label>
                                            <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={email}  />
                                            <Form.Label style={{ "color": "#189047" }} >Pincode</Form.Label>
                                            <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={pincode} onChange={handleChange("pincode")} />
                                            <Form.Label style={{ "color": "#189047" }} >HCODE</Form.Label>
                                            <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={hc} onChange={handleChange("hc")} />
                                            <Form.Label style={{ "color": "#189047" }} >State</Form.Label>
                                            <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={address} onChange={handleChange("address")} />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className='col-lg-6'>
                                <Card style={{ padding: "2%", textAlign: "center", width: "100%" }}>
                                    <Card.Body>
                                        <Card.Title style={{ "color": "#189047", "fontSize": "25px" }}>Update Data</Card.Title>
                                        <Form>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{ "color": "#189047" }} >Oxygen</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Oxygen Available" value={oxy} onChange={handleChange("oxy")} />
                                                <Form.Label style={{ "color": "#189047" }}>Beds</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Beds Available" value={bed} onChange={handleChange("bed")} />
                                               

                                            </Form.Group>
                                            <div className="d-grid gap-2">
                                                <Button size="lg" style={{ paddingLeft: "20%", paddingRight: "20%", "backgroundColor": "#189047" }} onClick={onSubmit}>
                                                    Update
                                                </Button>
                                            </div>

                                        </Form>
                                    </Card.Body>

                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default AdminProfile