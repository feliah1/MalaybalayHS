import Form from 'react-bootstrap/Form'
import axios from "axios";
import React, { useEffect, useState } from 'react';

export default function Settings() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
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

    // function deleteUser(){
    //     axios.delete(`http://localhost:5005/api/user/deleteUser/${id}`)
    //     .then((response) => {
    //         setDeleteProd(false);
    //         console.log('Product deleted:', response.data);
    //         window.location.href = "/iteminventory";
    //         // Additional actions after deleting the product if needed
    //     })
    //     .catch((error) => {
    //         setLoading(false);
    //         setError('Error deleting product. Please try again.');
    //         console.error('Error deleting product:', error);
    //         // Handle specific error details
    //     });
    // }
  return (
    <>
     <div>
        <div className="container-fluid position-relative d-flex p-0">
            {/* <!-- Spinner Start --> */}
            <div id="spinner" className=" bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">

                </div>
            </div>
            {/* <!-- Spinner End --> */}


            {/* <!-- Sidebar Start --> */}
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-quadrant navbar-dark">
                    <a href="index.html" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-tertiary"><i className="#">
                        </i>Malaybalay<br />HandiShop</h3>
                    </a>
                  
                  <div class="navbar-nav w-100">
                    <a href="/auth#" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i><span style={{color:"#ffffff"}}>Dashboard</span></a>
                    <a href="/iteminventory" className="nav-item nav-link"><i className="fa fa-chart-line me-2"></i><span style={{color:"#ffffff"}}>Item Inventory</span></a>
                    <a href="/orderlist" className="nav-item nav-link"><i className="fa fa-times me-2"></i><span style={{color:"#ffffff"}}>Order List</span></a>
                    <a href="/settings" className="nav-item nav-link active"><i className="fa fa-chart-bar me-2"></i><span style={{color:"#000000"}}>Cashier Account</span></a>
                    <a href="/about" className="nav-item nav-link"><i className="fa fa-th me-2"></i> <span style={{color:"#ffffff"}}>About</span></a>
                </div>
                </nav>
            </div>
            {/* <!-- Sidebar End --> */}


            {/* <!-- Content Start --> */}
            <div className="content">
                {/* <!-- Navbar Start --> */}
                <nav className="navbar navbar-expand bg-primary navbar-dark sticky-top px-4 py-0">
                    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                        <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                    </a>
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars"></i>
                    </a>
                
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            
                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">See all message</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            
                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Profile updated</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">New user added</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Password changed</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">See all notifications</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                <span className="d-none d-lg-inline-flex">Admin</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="/" className="dropdown-item" style={{color:"black"}}>Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- Navbar End --> */}


                {/* <!-- Blank Start --> */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row vh-100 bg-secondary rounded align-items justify-content mx-0">
                    <Form onSubmit={(e)=>handleSubmit(e)}>
                        <div>
                        <div className="container-fluid position-relative">
                        {/* Spinner Start */}
                            <div id="spinner" className="bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items justify-content">
                        </div>
                        {/* Spinner End */}
                    
                    {/* Sign Up Start */}
                    <div className="container-fluid">
                        <div className="row h-100 align-items justify-content" style={{minHeight: '100vh'}}>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">

                                    <div><h3>Create Cashier here</h3></div>
                                    <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingInput" placeholder="name@example.com" 
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                    <label htmlFor="floatingInput">Name</label>
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
                                    >Create Account</button>
                                    {register ? (
                                        <p className="text-success">Cashier Account added Successfully!</p>
                                    ) : (
                                        <p className="text-danger"></p>
                                    )}

                                                                
                                <div>
                                    <h5>Sales Report PDF:
                                        <a  href=""> 
                                            <button type="button" className="btn btn-primary btn-lg" style={{padding:"`40px"}} value="Order Logs"/> 
                                        </a>
                                    </h5>
                                </div>

                                <div>
                                    <h5>Cashier Archive:
                                        <a  href=""> 
                                            <button type="button" className="btn btn-primary btn-lg" style={{padding:"`40px"}} value="Order Logs"/> 
                                        </a>
                                    </h5>
                                </div>
                                
                            <h3>Cashier Accounts:</h3>
                            </div>


                            <table className="table">
                                                    <thead className="thead-primary">
                                                        <tr className="">
                                                            <th>Cashier</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                            {/* {
                                                orders.map(order =>{ */}
                                                    <tr className="text-center">
                                                        <td action="/itemsingledelete/<%= user._id %>" method="POST">
                                                            <p>cashier name</p>
                                                        </td>
                                                        <td>
                                                        <form id="form1"><input type="hidden" name="id" value=''/>
                                                            <input form="form1" type="submit" value="Delete Account" />
                                                            <input form="form1" type="submit" value="Edit Account" />
                                                            </form>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- END TR--> */}



                                                {/* // })
                                                //      } */}
                                                </table>
                        </div>
                        </div>
                    </div>
                    {/* Sign Up End */}
                    
                    </div>
                </div>

                </Form>

            
                    </div>
                </div>
                {/* <!-- Blank End --> */}


                {/* <!-- Footer Start --> */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary rounded-top p-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center text-sm-start">
                                &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                            </div>
                            <div className="col-12 col-sm-6 text-center text-sm-end">
                                {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** */}
                                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                                <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer End --> */}
            </div>
            {/* <!-- Content End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    </>
  )};