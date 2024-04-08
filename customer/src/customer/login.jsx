import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(""); // State to store error message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const data = {
      email,
      password
    };

    const configuration = {
      method: "POST",
      url: "http://localhost:5005/api/auth/login",
      headers: {
        'Content-Type': 'application/json',
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
        // redirect user to the home page
        window.location.href = "/home";
      })
      .catch((error) => {
        // Handle the error if needed
        if (error.response && error.response.status === 401) {
          setError("Invalid email or password");
        } else {
          setError("Invalid email or password");
        }
        console.error('Login failed:', error);
        setLogin(false); // Set login state to false on error
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="container-fluid position-relative">
          <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/">
                      <h3 className="text-primary"><i className="fa fa-user-edit me-2" />MalaybalayHandiShop</h3>
                    </a><br /><br />
                  </div>
                  <div><h3>Login</h3></div>
                  
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" placeholder="name"
                      type="name"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input className="form-control" id="floatingPassword" placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  {error && login ? (
                    <p className="text-success">You Are Logged In Successfully</p>
                  ) : (
                    <p className="text-danger">{error}</p>
                  )}

                  <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Login</button>

                  <p style={{ textAlign:'center' }}>Not the cashier?  <a href="http://localhost:3000">Go to Admin.</a></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
