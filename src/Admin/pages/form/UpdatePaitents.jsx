import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Container, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { getPaitent, updatePaitent } from '../../../services/admin-service';
import { useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const UpdatePaitents = () => {



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
   
});
const [formErrors, setFormErrors] = useState({});


const { aadharNo, name, city, country, pincode, address, currentHealth, vaccinationStatus, gender } = values;


const {id}=useParams();
   useEffect(()=>{
       getPaitent(id)
       .then(
           data=>{

            setValues({
                aadharNo:data.aadharNo,
                name:data.name,
                city:data.city,
                country:data.country,
                pincode:data.pincode,
                address:data.address,
                currentHealth:data.currentHealth,
                vaccinationStatus:data.vaccinationStatus,
                gender:data.gender,
                
            })
             
           }
       )
   },[])
const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
};

const onSubmit = event => {
    event.preventDefault();
    setFormErrors(validate(values))
    console.log(Object.keys(formErrors).length)
    if (Object.keys(formErrors).length === 0) {
        console.log(formErrors)
        console.log(Object.keys(formErrors).length)
        updatePaitent(id,values)
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
};

const validate = (values) => {
    const errors = {};
    const aadharregex = /^\d{12}$/i;
    const pinregex = /^\d{6}$/i;
    if (!values.name) {
        errors.name = "Name is required!";
    }
    if (!values.aadharNo) {
        errors.aadharNo = "Aadhar no. is required!";
    } else if (!aadharregex.test(values.aadharNo)) {
        errors.aadharNo = "This is not a valid Aadhar Number!";
    }
    if (!values.pincode) {
        errors.pincode = "PIN no. is required!";
    } else if (!pinregex.test(values.pincode)) {
        errors.pincode = "This is not a valid PIN Number!";
    }
    if (!values.city) {
        errors.city = "City is required";
    }
    return errors;
};



return (
    <div className="member">
        <Sidebar />
        <div className="homeContainer" style={{ "backgroundColor": "#E5F3EA" }}>
            <Card style={{ padding: "2%", textAlign: "center", "margin": "3%" }}>
                <Card.Body>
                    <Card.Title style={{ "color": "#189047", "fontSize": "25px" }}>Update Paitent</Card.Title>
                    <Container>
                        <Form>
                            <Row>
                                <Col lg={8}>
                                    <Form.Label style={{ "color": "#189047" }}>Aadhar</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Aadhar Number" value={aadharNo} onChange={handleChange("aadharNo")} />
                                    <p style={{ color: "red" }}>{formErrors.aadharNo}</p>
                                </Col>
                                <Col lg={4}>
                                    <Form.Label style={{ "color": "#189047" }} >Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={handleChange("name")} />
                                    <p style={{ color: "red" }}>{formErrors.name}</p>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label style={{ "color": "#189047" }} >Country</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Country" value={country} onChange={handleChange("country")} />

                                </Col>
                                <Col>
                                    <Form.Label style={{ "color": "#189047" }}>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your City" value={city} onChange={handleChange("city")} />
                                    <p style={{ color: "red" }}>{formErrors.city}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label style={{ "color": "#189047" }}>State</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your State" value={address} onChange={handleChange("address")} />
                                </Col>
                                <Col>
                                    <Form.Label style={{ "color": "#189047" }}>Gender</Form.Label>
                                    {/* <select className='form-select'>
                                    <option>Male</option>
                                        <option>Female</option>
                                    </select> */}
                                    <Form.Control as="select" value={gender} onChange={handleChange("gender")}> 
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    </Form.Control>
                                    
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <Form.Label style={{ "color": "#189047" }} >PinCode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Pincode" value={pincode} onChange={handleChange("pincode")} />
                                    <p style={{ color: "red" }}>{formErrors.pincode}</p>
                                </Col>
                                <Col>
                                    <Form.Label style={{ "color": "#189047" }}>Health Status</Form.Label>
                                    <Form.Control as="select" value={currentHealth} onChange={handleChange("currentHealth")} >
                                        <option value="Positive">Positive</option>
                                        <option value="Negative">Negative</option>
                                        </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label style={{ "color": "#189047" }}>Vaccination Status</Form.Label>
                                    <Form.Control as="select" value={vaccinationStatus} onChange={handleChange("vaccinationStatus")} >
                                        <option value="1">1 - Partially Vaccinated </option>
                                        <option value="2">2 - Fully Vaccinated</option>
                                        </Form.Control>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Button size="lg" style={{ paddingLeft: "20%", paddingRight: "20%", "backgroundColor": "#189047", }} onClick={onSubmit}>
                                        Update Paitent
                                    </Button>
                                </Col>
                            </Row>




                        </Form>
                    </Container>
                </Card.Body>

            </Card>




        </div>
        <ToastContainer/>
    </div>
)

}

export default UpdatePaitents;
