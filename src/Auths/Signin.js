import { Navigate } from "react-router-dom"
import Base from "../Base";
import "./Sign.css"
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { signIn, isAutheticated, authenticate, getUser } from "../services/user-service";
const Signin = () => {


  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signIn({ username: email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {

          getUser(data.user.id, data.token).then(
            res => {
              const pid = res
              authenticate({ data, pid }, () => {
                setValues({
                  ...values,
                  didRedirect: true
                });
              });

            })


        }
      })
      .catch(err => console.log(err));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Navigate to="/dashboard" />;
      } else {
        return <Navigate to="/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Navigate to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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








  const signInForm = () => {

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
                        <h2>Login</h2>
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
                        }} onClick={onSubmit} >Login</button>

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
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}


    </div>

  )
}

export default Signin;