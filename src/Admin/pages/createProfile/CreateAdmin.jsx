import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './createprofile.scss'
import "../../../bio.css"
import { Card, Container, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { isAdminSaved } from '../../../services/admin-service';
import { Navigate } from 'react-router-dom';
import { addadminDetails } from '../../../services/admin-service';
import { toast, ToastContainer } from 'react-toastify';
const CreateAdmin = () => {

    const { id,email,hcode:hc} = isAdminSaved();
    const [values, setValues] = useState({
        city: "",
        country: "",
        pincode: "",
        address: "",
        bed:"",
        oxy:"",
        hcode:hc,
        success: false,
        didRedirect: false,
        error: false
    });
    // const [formErrors, setFormErrors] = useState({});


    const { city, country, pincode, address, bed,oxy, success, didRedirect, error ,hcode} = values;
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        const userId = id

        // setFormErrors(validate(values))
        // if (Object.keys(formErrors).length === 0) {
            addadminDetails(userId, values)
                .then(data => {
                    
                    if (data.error) {
                        setValues({ ...values, error: data.error, success: false, didRedirect: false })
                        console.log(data.error);
                    }
                    else {
                        setValues({
                            city: "",
                            country: "",
                            pincode: "",
                            address: "",
                            success: true,
                            didRedirect: true,
                            error: false

                        })
                        toast.success("Admin Created Please Login !")
                    }
                })
                .catch(toast.error(error))
        // }
    };

    // const validate = (values) => {
    //     const errors = {};
    //     const aadharregex = /^\d{12}$/i;
    //     const pinregex = /^\d{6}$/i;
    //     if (!values.name) {
    //         errors.name = "Name is required!";
    //     }
    //     if (!values.aadharNo) {
    //         errors.aadharNo = "Aadhar no. is required!";
    //     } else if (!aadharregex.test(values.aadharNo)) {
    //         errors.aadharNo = "This is not a valid Aadhar Number!";
    //     }
    //     if (!values.pincode) {
    //         errors.pincode = "PIN no. is required!";
    //     } else if (!pinregex.test(values.pincode)) {
    //         errors.pincode = "This is not a valid PIN Number!";
    //     }
    //     if (!values.city) {
    //         errors.city = "City is required";
    //     }
    //     return errors;
    // };

    const performRedirect = () => {
        if (didRedirect) {
            if (success === true) {
                return <Navigate to="/admin/signin" />;
            }
        }

    };
    

    const create = () => {
        return (
            <div className="testimonial">

                <div className="homeContainer" style={{ padding: "2%" }}>
                    <Card style={{ textAlign: "center", "margin": "3%" }}>
                        <Card.Body>
                            <Card.Title style={{ "color": "#189047", "fontSize": "25px" }}>Admin Details</Card.Title>
                            <Container>
                                <Form>
                                    <Row>
                                        <Col lg={8}>
                                            <Form.Label style={{ "color": "#189047" }}>Hcode</Form.Label>
                                            <Form.Control type="text" placeholder="Enter hcode" value={hcode} onChange={handleChange("hcode")} readOnly/>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Label style={{ "color": "#189047" }} >Email</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your Name" value={email} disabled />
                                            
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
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label style={{ "color": "#189047" }}>State</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your State" value={address} onChange={handleChange("address")} />
                                        </Col>
                                        <Col>
                                            <Form.Label style={{ "color": "#189047" }}>Beds Available</Form.Label>
                                            <Form.Control type="text" placeholder="Beds Available" value={bed} onChange={handleChange("bed")} />
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col>
                                            <Form.Label style={{ "color": "#189047" }} >PinCode</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your Pincode" value={pincode} onChange={handleChange("pincode")} />
                                           
                                        </Col>
                                        <Col>
                                            <Form.Label style={{ "color": "#189047" }}>Oxygen Available</Form.Label>
                                            <Form.Control type="text" placeholder="Avaliable Oxygen" value={oxy} onChange={handleChange("oxy")} />
                                        </Col>
                                       
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <Button size="lg" style={{ paddingLeft: "20%", paddingRight: "20%", "backgroundColor": "#189047", }} onClick={onSubmit}>
                                                Create Profile
                                            </Button>
                                        </Col>
                                    </Row>




                                </Form>
                            </Container>
                        </Card.Body>

                    </Card>




                </div>
            </div>

        )
    }
    return (
        <div>
           
            {create()}
            {performRedirect()}
            <ToastContainer/>
        </div>

    )
}
export default CreateAdmin;
