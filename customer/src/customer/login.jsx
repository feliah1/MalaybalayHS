import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from "axios";
import Cookies from "universal-cookie";
import ReCAPTCHA from "react-google-recaptcha"
import GoogleLogin from 'react-google-login'

const clientId ='32733168142-tu10ev6b93h4h7m3nauk7cbl2rnbvin8.apps.googleusercontent.com'
const cookies = new Cookies();

// function autoLogin(){
//   clientId
// }

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    const configuration = {
      method: "POST",
      url: "http://localhost:5005/api/auth/login",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'admin' // Check if this is the correct way to authenticate
      },
      data: JSON.stringify(data),
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        cookies.set("userId", result.data.userId, {
          path: "/",
        });
        cookies.set("userType", result.data.userType, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/home";
      })
      .catch((error) => {
        // Handle the error if needed
        console.error('Login failed:', error);
        setLogin(false); // Set login state to false on error
      });
  };

  
  
    return (
        <>
                  <Form onSubmit={(e)=>handleSubmit(e)}>
            <div>
            <div className="container-fluid position-relative">
          
          {/* Sign Up Start */}
          <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/">
                      <h3 className="text-primary"><i className="fa fa-user-edit me-2" />MalaybalayHandShop</h3>
                      </a><br /><br />
                      </div>
                        <div><h3>Login</h3></div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="floatingInput" placeholder="name@example.com" 
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                          <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                          <input className="form-control" id="floatingPassword" placeholder="Password" 
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <ReCAPTCHA sitekey="6LenTzkpAAAAACCvqaK1gMAA_H96hHWhDLTBaOmi" required/>
                        
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4"
                          variant="primary"
                          onClick={(e) => handleSubmit(e)}
                        >Login</button>


                          {login ? (
                              <p className="text-success">You Are Logged In Successfully</p>
                            ) : (
                              <p className="text-danger"></p>
                            )}

                            <GoogleLogin
                              textButton='Login with Google'
                              clientId={clientId}
                              onClick={(e) => handleSubmit(e)}
                              >
                            </GoogleLogin>

                        <p className="text-center mb-0">Don't have an Account? <a href="/register">Register</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* Sign Up End */}
        </div>
      </div>
      </Form>
        </>
    )
}