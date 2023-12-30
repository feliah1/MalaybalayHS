// import React, { useState } from 'react';
// import axios from "axios";

export default function AuthComponent() {

  return (
    <>

    <div className="container-fluid position-relative d-flex p-0">
        {/* <!-- Spinner Start --> */}
        <div id="spinner" className=" bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        </div>
        {/* <!-- Spinner End --> */}

        {/* <!-- Sidebar Start --> */}
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-quadrant navbar-dark">
                <a href="/auth#" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-tertiary"><i className="#">
                    </i>Malaybalay<br />HandiShop</h3>
                </a>
               
                <div className="navbar-nav w-100">
                    <a href="/auth#" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i><span style={{color:"#000000"}}>Dashboard</span></a>

                    <a href="/iteminventory" className="nav-item nav-link"><i className="fa fa-chart-line me-2"></i><span style={{color:"#ffffff"}}>Item Inventory</span></a>
                    <a href="/orderlist" className="nav-item nav-link"><i className="fa fa-times me-2"></i><span style={{color:"#ffffff"}}>Order List</span></a>
                    <a href="/settings" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i><span style={{color:"#ffffff"}}>Settings</span></a>
                    <a href="/about" className="nav-item nav-link"><i className="fa fa-th me-2"></i> <span style={{color:"#ffffff"}}>About</span></a>
                </div>
            </nav>
        </div>
        {/* <!-- Sidebar End --> */}

        {/* <!-- Content Start --> */}
        <div className="content">
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand bg-primary navbar-dark sticky-top px-4 py-0">
                <a href="/auth#" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                </a>
                <a href="/auth#" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
            
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="/auth#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="/auth#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="/auth#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="/auth#" className="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="/auth#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="/auth#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="/auth#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="/auth#" className="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="/auth#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                            <span className="d-none d-lg-inline-flex">Admin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="/" className="dropdown-item" style={{color:"black"}}>Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

            {/* <!-- Sale & Revenue Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-line fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Today Sale</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-bar fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Total Sale</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-area fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Today Revenue</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-pie fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Total Revenue</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Sale & Revenue End --> */}

                {/* <!-- Recent Sales Start --> */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Sales</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-black">
                                        <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Invoice</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" /></td>
                                        <td>01 Jan 2045</td>
                                        <td>INV-0123</td>
                                        <td>Jhon Doe</td>
                                        <td>$123</td>
                                        <td>Paid</td>
                                        <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                    </tr>
                                    {/* Additional rows with the same structure */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- Recent Sales End --> */}

                {/* <!-- Cashier Activity --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Recent Cashier Activity</h6>
                        <b href="">Show All</b>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-black">
                                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                    <th scope="col">Activity</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- Widgets End --> */}

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

        </div>
    </>
  );
}