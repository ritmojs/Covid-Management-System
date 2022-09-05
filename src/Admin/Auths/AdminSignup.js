import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "../../Base";
import "./login.css"
import Footer from "../../Footer";
import { useState } from "react";
import {  adminsignUp,saveAdmin} from "../../services/admin-service"
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const AdminSignup = () => {

  const [values, setValues] = useState({
    hcode: "",
    email: "",
    password: "",
    error: "",
    success: false,
    didRedirect: false

  });

  const { hcode, email, password, error, success, didRedirect } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };


  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    adminsignUp({ hcode, email, password })
      .then(data => {

        if (data.error) {
          setValues({ ...values, error: data.error, success: false, didRedirect: false });
          
        } else {
          
          saveAdmin(data, () => {
            setValues({
              ...values,
              hcode: "",
              email: "",
              password: "",
              error: "",
              success: true,
              didRedirect: true
            });
        toast.success("SignUp Done")
          })
        }
      })
      .catch(toast.error(error))
  };

  



  

  


  const performRedirect = () => {
    
    if (didRedirect) {
      if (success === true) {
        return <Navigate to="/admin/create/profile" />;
      } else {
        return <Navigate to="/signup" />;
      }
    }

  };








  const signUpForm = () => {
    return (



      <React.Fragment>
        <header>
          <Base />
        </header>
        <main>
          <div className="testimonial">


            <div className="container" style={{ marginTop: "20px", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "5px", paddingRight: "5px" }}>
              <div className="row justify-content-md-center"
              >
                <div className="col-lg-auto col-md-auto col-sm-auto">
                  <div className="card" style={{ width: "auto", paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className="card-body text-center">


                      <div>
                        <h2>Create Account</h2>
                        <label>
                          <span>Hcode</span>
                          <input className="auth-input" type="text" value={hcode} onChange={handleChange("hcode")} />
                        </label>
                        <br />
                        <label>
                          <span>Email Address</span>
                          <input className="auth-input" type="email" value={email} onChange={handleChange("email")} />
                        </label>
                        <br />
                        {/*<label for="sel1">Gender</label>
  <select class="form-control"  id="sel1" >
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>*/}
                        <br />
                        <label>
                          <span>Password</span>
                          <input className="auth-input" type="password" value={password} onChange={handleChange("password")} />
                        </label>
                        <button className="submit sbtn" type="button" style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }} onClick={onSubmit} >Create Admin Account</button>

                        <p className="forgot-pass">Forgot Password ?</p>

                        <div className="social-media">
                          <ul>
                            <li><img src="/assests/facebook.png" alt={""} /></li>
                            <li><img src="/assests/twitter.png" alt={""} /></li>
                            <li><img src="/assests/linkedin.png" alt={""} /></li>
                            <li><img src="/assests/instagram.png" alt={""} /></li>
                          </ul>
                        </div>
                      </div>










                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer style={{
          marginTop: "50px",
          padding: "20px"
        }}>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
  return (
    <div>
      
      
      
      {signUpForm()}
      {performRedirect()}
     <ToastContainer/>

    </div>
  );

}
export default AdminSignup;