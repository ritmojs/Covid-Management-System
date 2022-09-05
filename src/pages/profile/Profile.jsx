import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { getProfile, isAutheticated,updatePaitentByUser } from '../../services/user-service';
import { ToastContainer,toast } from 'react-toastify';
const Profile = () => {

    const { data } = isAutheticated();
    const { user ,token} = data;

    const [values, setValues] = useState({
        aadharNo: "",
        name: "",
        city: "",
        country: "",
        pincode: "",
        address: "",
        currentHealth: "",
        gender: "",
        vaccinationStatus: "",
        email: ""
    });

    useEffect(() => {
        const { data, pid } = isAutheticated();
        const { user, token } = data;
        const id = user.id
        getProfile(id, token, pid)
            .then((data) => {
                if (data.error) {
                    console.log(data.error)

                }
                else {
                    setValues({
                        aadharNo: data.aadharNo,
                        name: data.name,
                        city: data.city,
                        country: data.country,
                        pincode: data.pincode,
                        address: data.address,
                        currentHealth: data.currentHealth,
                        gender: data.gender,
                        vaccinationStatus: data.vaccinationStatus

                    })

                }
            })

    }, [])

    const onSubmit = event => {
        event.preventDefault();
        const id=user.id;
            updatePaitentByUser(id,values,token)
                .then(data => {
                    
                    if (data.error) {
                        toast.warn(data.error)
                    }
                    else {
                       
                        
                        toast.success('Updated Data')
                    }
                })
                .catch((error)=>console.log(error))
        }
    

    const { aadharNo, name, city, country, pincode, address, currentHealth, vaccinationStatus, gender} = values;
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
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
                                        <Card.Img variant="side" src="/assests/m.jpg" style={{ width: "40%", "borderRadius": "50%", padding: "1%" }} />
                                    </div>

                                    <Card.Body style={{ textAlign: "center" }}>
                                        <Card.Title style={{ "color": "#189047" }}>{name}</Card.Title>
                                        <Card.Text>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Form.Label style={{ "color": "#189047" }} >Current Health</Form.Label>
                                                        <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={currentHealth} onChange={handleChange("currentHealth")} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label style={{ "color": "#189047" }} >Gender</Form.Label>
                                                        <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={gender} onChange={handleChange("gender")} />
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Form.Label style={{ "color": "#189047" }} >Email</Form.Label>
                                            <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={user.email} onChange={handleChange("email")} />
                                            <Form.Label style={{ "color": "#189047" }} >Vaccination Dose</Form.Label>
                                            <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={vaccinationStatus} onChange={handleChange("vaccinationStatus")} />
                                            <Form.Label style={{ "color": "#189047" }} >Aadhar No.</Form.Label>
                                            <Form.Control type="text" readOnly style={{ "backgroundColor": "#E5F3EA ", "fontWeight": "bold" }} value={aadharNo} onChange={handleChange("aadharNo")} />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className='col-lg-6'>
                                <Card style={{ padding: "2%", textAlign: "center", width: "100%" }}>
                                    <Card.Body>
                                        <Card.Title style={{ "color": "#189047", "fontSize": "25px" }}>Edit Details</Card.Title>
                                        <Form>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{ "color": "#189047" }} >Country</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your Country" value={country} onChange={handleChange("country")} />
                                                <Form.Label style={{ "color": "#189047" }}>City</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your City" value={city} onChange={handleChange("city")} />
                                                <Form.Label style={{ "color": "#189047" }}>State</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your Address" value={address} onChange={handleChange("address")} />
                                                <Form.Label style={{ "color": "#189047" }}>Pincode</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your Pincode" value={pincode} onChange={handleChange("pincode")} />

                                            </Form.Group>
                                            <div className="d-grid gap-2">
                                                <Button size="lg" style={{ paddingLeft: "20%", paddingRight: "20%", "backgroundColor": "#189047" }} onClick={onSubmit}>
                                                    Submit
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

export default Profile