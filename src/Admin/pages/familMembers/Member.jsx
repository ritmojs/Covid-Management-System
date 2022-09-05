import React, { useEffect } from 'react'
import './family.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { getAllmembers } from '../../../services/admin-service';
const Member = () => {


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


                {
                    data.map(det =>

                        <Container key={det.pid}>
                            <Card  >
                                <Row>
                                    <Col style={{ "textAlign": "center" }}>
                                    
                                        <Card.Img src="/assests/m.jpg" style={{ "borderRadius": "50%", "width": "50%", "padding": "5%" }} />
                                    </Col>
                                    <Col>
                                        <Card.Body>

                                            <Container>
                                                <Card.Title>{det.name}</Card.Title>
                                                <Card.Text>

                                                    Pid: {det.pid}
                                                    <br />
                                                    <Row>
                                                        <Col>
                                                            AadharNo : {det.aadharNo}
                                                        </Col>
                                                        <Col>
                                                            Gender:{det.gender}
                                                        </Col>

                                                    </Row>




                                                    <Row>
                                                        <Col>
                                                            Country: {det.country}
                                                        </Col>
                                                        <Col> City : {det.city}  </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            State: {det.address}
                                                        </Col>
                                                        <Col> Pincode: {det.pincode}  </Col>
                                                    </Row>
                                                    Vaccination Status : {det.vaccinationStatus} Dose

                                                </Card.Text>


                                                <Button variant='success' style={{ "backgroundColor": "#189047" }}>{det.currentHealth}</Button>
                                            </Container>

                                        </Card.Body>
                                    </Col>

                                </Row>

                            </Card>
                            <br />

                        </Container>


                    )
                }




            </div>
        </div>
    )
}
export default Member