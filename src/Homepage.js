import React from "react"
import "./bio.css"

import Base from "./Base"
import { Button, Card } from "react-bootstrap"
import Footer from "./Footer"
import { Line, CartesianGrid, YAxis, XAxis, LineChart } from 'recharts'

const Homepage = () => {

    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'June',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sept',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 1990,
            pv: 7500,
            amt: 100,
        },

    ];

    return (
        <React.Fragment>
            <header>
                <Base />
            </header>

            <main>

                <div className="testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-12" style={{


                                height: "650px",
                                color: "white",
                                textAlign: "center",
                                paddingTop: "100px"

                            }}>
                                <img style={{
                                    width: "70%"
                                }} src="/assests/1.svg" alt="" />

                                <br></br>



                                <h1 style={{ color: "#ffe0bd" }}>Covid Tracker System</h1>
                                <h2>Use Co+ms to get all updates pertaining to COVID 😷 and COVID cases.
                                </h2>
                                <img src="/assests/blue.svg" className="blue-1" alt="" />


                            </div>



                        </div>

                    </div>

                </div>
                <div style={{ padding: "50px", marginTop: "80px" }}>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <img style={{
                                    width: "100%",
                                }} src="/assests/2.svg" alt="" />

                            </div>
                            <div className="col-lg-6">
                                <h1><div style={{
                                    color: "#189047"
                                }}>Add Members</div> </h1>
                                <h3>Add family members or close friends to receive updates on their immunisation status, health status, and medical prescriptions.</h3>

                                <div className="mb-2">
                                    <Button variant="success" size="lg">
                                        Add Members
                                    </Button>{' '}
                                </div>
                                <img src="/assests/blue.svg" className="blue" alt="" />

                            </div>



                        </div>

                    </div>



                </div>
                <div style={{ padding: "50px", marginTop: "80px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h1><div style={{
                                    color: "#189047"
                                }}>🧑🏻‍⚕️Doctor prescriptions</div></h1>
                                <h3>✅ Track the doctor prescriptions and precautions adviced by the doctors</h3>
                                <h3>✅  Updates for the available beds 🛌🏻 in hospitals</h3>
                                <h3>✅  Get available 😷 oxygen in hospitals</h3>

                            </div>

                            <div className="col-lg-6 ">
                                <img style={{
                                    width: "100%"
                                }} src="/assests/free_covid_precaution_dose.svg" alt="" />


                            </div>





                        </div>
                    </div>
                </div>
                <div className=" testimonial" >
                    <div className="container" >
                        <div className="row ">
                            <div className="col-12" style={{

                                color: "white",
                                textAlign: "center",
                                padding: "50px"


                            }}>
                                <h1> How to Access ?</h1>

                                <div className="container" >
                                    <div className="row ">
                                        <div className="col-sm-4">
                                            <Card >

                                                <Card.Img variant="top" src="/assests/Step1.svg" />
                                                <Card.Body>
                                                    <Card.Title style={{ color: "#189047" }}>Register ➡️</Card.Title>
                                                    <Button variant="success">Step 1</Button>

                                                </Card.Body>
                                            </Card >
                                        </div>
                                        <div className="col-sm-4">
                                            <Card >

                                                <Card.Img variant="top" src="/assests/Step2.svg" />
                                                <Card.Body>
                                                    <Card.Title style={{ color: "#189047" }}>Fill Profile Details ➡️</Card.Title>
                                                    <Button variant="success">Step 2</Button>

                                                </Card.Body>
                                            </Card >
                                        </div>
                                        <div className="col-sm-4">
                                            <Card >

                                                <Card.Img variant="top" src="/assests/Step3.svg" />
                                                <Card.Body>
                                                    <Card.Title style={{ color: "#189047" }}>Use Dashboard</Card.Title>
                                                    <Button variant="success">Step 3</Button>

                                                </Card.Body>
                                            </Card >
                                        </div>
                                    </div>
                                </div>

                                {/* <Button style={{ width: "250px" }} variant="outline-success" href={"/signup"}>SignUp</Button> */}
                            </div>


                        </div>

                    </div>
                </div>

                <div style={{ marginTop: "80px", padding: "50px" }}>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 ">
                                <img style={{

                                    width: "100%",
                                }} src="/assests/Children_Vaccination.svg" alt="" />

                            </div>
                            <div className="col-lg-6 ">
                                <h1><div style={{
                                    color: "#189047"
                                }}>Covid Affected in Area</div> </h1>
                                <h3>Get count of covid Affected Paitent in your area with precautions to protect yourself and your family.</h3>

                                <h5>1. Click on SignUp </h5>

                                <h5>2. Fill Your Profile Form</h5>

                                <h5>3. Get every covid updates in your area</h5>



                            </div>




                        </div>

                    </div>
                </div>
                <div style={{ marginTop: "80px", padding: "50px" }}>
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-6 ">
                                <h1><div style={{
                                    color: "#189047"
                                }}>Check Vaccination Status</div> </h1>

                                <h3>Check Vaccination status of all the members add in your profile</h3>
                                <br></br>
                                <div className="mb-2">
                                    <Button variant="success" size="lg">
                                        Get Your Status
                                    </Button>{' '}
                                </div>
                                <img src="/assests/blue.svg" className="blue" alt="" />




                            </div>
                            <div className="col-lg-6 ">
                                <img style={{

                                    width: "100%",
                                }} src="/assests/statusvacc.svg" alt="" />

                            </div>




                        </div>

                    </div>


                </div>


                <div className=" testimonial" >
                    <div className="container" >
                        <div className="row ">
                            <div className="col-12" style={{

                                color: "white",
                                textAlign: "center",
                                padding: "50px"


                            }}>
                                <h1>Covid & Vaccination Updates</h1>
                                <div className="container"  >
                                    <div className="row justify-content-center ">
                                        <div className="col-lg-6.2">
                                            <Card >

                                                <Card.Body>

                                                    <LineChart width={500} height={300} data={data}>
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                                    </LineChart>
                                                </Card.Body>
                                            </Card >
                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>

                    </div>

                </div>



            </main>
            <footer style={{ marginTop: "50px" }}>
                <Footer />
            </footer>

        </React.Fragment>


    )
}


export default Homepage;