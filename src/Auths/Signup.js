import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "../Base";
import "./Sign.css"
import Footer from "../Footer";
import { useState } from "react";
import { saveUser, signUp } from "../services/user-service"
import { Navigate } from "react-router-dom";
const Signup = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    didRedirect: false

  });

  const { name, email, password, error, success, didRedirect } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };


  const onSubmit = event => {
    event.preventDefault();

    setValues({ ...values, error: false });
    signUp({ name, email, password })
      .then(data => {

        if (data.error) {
          setValues({ ...values, error: data.error, success: false, didRedirect: false });
          errorMessage();
        } else {
          saveUser(data, () => {

            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              error: "",
              success: true,
              didRedirect: true
            });
          })

        }
      })
      .catch(
        errorMessage());
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (success === true) {
        return <Navigate to="/user/create/profile" />;
      } else {
        return <Navigate to="/signup" />;
      }
    }

  };




  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <a href={"/signin"} >Login Here</a>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
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
                          <span>Name</span>
                          <input className="auth-input" type="text" value={name} onChange={handleChange("name")} />
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
                        }} onClick={onSubmit} >Create Account</button>

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
      {successMessage()}

      {errorMessage()}
      {signUpForm()}
      {performRedirect()}


    </div>
  );

}
export default Signup;