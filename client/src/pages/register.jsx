
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import axios from "axios";

export default function Register() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "POST",
      url: "http://localhost:5005/api/auth/register",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'admin'
      },
      data: JSON.stringify({
        email,
        password
      }),
    };

    // make the API call
    axios(configuration)
      .then((res) => {
        setRegister(true);
      })
      .catch((err) => {
        // Handle the error if needed
        console.error('Registration failed:', err);
        setRegister(false); // Set register state to false on error
      });
  }
    return (
        <>
          <Form onSubmit={(e)=>handleSubmit(e)}>
            <div>
            <div className="container-fluid position-relative">
              {/* Spinner Start */}
                <div id="spinner" className="bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              </div>
              {/* Spinner End */}
          
          {/* Sign Up Start */}
          <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/register">
                      <h3 className="text-primary"><i className="fa fa-user-edit me-2" />MalaybalayHandShop</h3>
                      </a><br /><br />
                      </div>
                        <div><h3>Sign Up</h3></div>
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
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4"
                          variant="primary"
                          onClick={(e) => handleSubmit(e)}
                        >Sign Up</button>
                          {register ? (
                            <p className="text-success">You Are Registered Successfully</p>
                          ) : (
                            <p className="text-danger"></p>
                          )}

                        <p className="text-center mb-0">Already have an Account? <a href="/">Login here</a></p>
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