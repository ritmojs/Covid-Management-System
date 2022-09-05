import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './memeber.scss'
import { Card, Container, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { addMember, isAutheticated } from '../../services/user-service';
const AddMembers = () => {

    const { user, token } = isAutheticated();
    const [values, setValues] = useState({
        aadharNo: "",
        name: "",
        city: "",
        country: "",
        pincode: "",
        address: "",
        currentHealth: "",
        gender: "",
        vaccinationStatus: ""
    });

    const { aadharNo, name, city, country, pincode, address, currentHealth, vaccinationStatus, gender } = values;
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        const id = user.id
        addMember(values, token, id)
            .then(data => {

                if (data.error) {
                    console.log(data.error);
                }
                else {
                    setValues({
                        aadharNo: "",
                        name: "",
                        city: "",
                        country: "",
                        pincode: "",
                        address: "",
                        currentHealth: "",
                        gender: "",
                        vaccinationStatus: ""

                    })
                }
            }
            ).catch(console.log("ERROR"))
    };


    return (
        <div className="member">
            <Sidebar />
            <div className="homeContainer" style={{ "backgroundColor": "#E5F3EA" }}>
                <Card style={{ padding: "2%", textAlign: "center", "margin": "3%" }}>
                    <Card.Body>
                        <Card.Title style={{ "color": "#189047", "fontSize": "25px" }}>Add Member</Card.Title>
                        <Container>
                            <Form>
                                <Row>
                                    <Col lg={8}>
                                        <Form.Label style={{ "color": "#189047" }}>Aadhar</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Aadhar Number" value={aadharNo} onChange={handleChange("aadharNo")} />
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Label style={{ "color": "#189047" }} >Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={handleChange("name")} />

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
                                        <Form.Label style={{ "color": "#189047" }}>Gender</Form.Label>
                                        <Form.Control type="text" placeholder="Gender" value={gender} onChange={handleChange("gender")} />
                                    </Col>
                                </Row>


                                <Row>
                                    <Col>
                                        <Form.Label style={{ "color": "#189047" }} >PinCode</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Pincode" value={pincode} onChange={handleChange("pincode")} />

                                    </Col>
                                    <Col>
                                        <Form.Label style={{ "color": "#189047" }}>Health Status</Form.Label>
                                        <Form.Control type="text" placeholder="Covid Positive or Negative" value={currentHealth} onChange={handleChange("currentHealth")} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ "color": "#189047" }}>Vaccination Status</Form.Label>
                                        <Form.Control type="text" placeholder="No of Doses" value={vaccinationStatus} onChange={handleChange("vaccinationStatus")} />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Button size="lg" style={{ paddingLeft: "20%", paddingRight: "20%", "backgroundColor": "#189047", }} onClick={onSubmit}>
                                            Add Member
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
export default AddMembers;
