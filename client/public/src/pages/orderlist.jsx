import React from "react";

export default function OrderList() {
    return (
        <>
            <div>

                {/* <!-- Sidebar Start --> */}
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-quadrant navbar-dark">
                        <a href="index.html" className="navbar-brand mx-4 mb-reac3">
                            <h3 className="text-tertiary"><i className="#">
                            </i>Malaybalay<br />HandiShop</h3>
                        </a>

                        <div className="navbar-nav w-100">
                            <a href="/auth#" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i><span style={{ color: "#ffffff" }}>Dashboard</span></a>
                            <a href="/iteminventory" className="nav-item nav-link"><i className="fa fa-chart-line me-2"></i><span style={{ color: "#ffffff" }}>Item Inventory</span></a>
                            <a href="/orderlist" className="nav-item nav-link active"><i className="fa fa-times me-2"></i><span style={{ color: "#000000" }}>Order List</span></a>
                            <a href="/cashieraccount" className="nav-item nav-link"><i className="fa fa-user-edit me-2"></i><span style={{ color: "#ffffff" }}>Cashier Account</span></a>
                            <a href="/settings" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i><span style={{ color: "#ffffff" }}>Settings</span></a>
                            <a href="/about" className="nav-item nav-link"><i className="fa fa-th me-2"></i> <span style={{ color: "#ffffff" }}>About</span></a>
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
                                            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
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

                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                    <span className="d-none d-lg-inline-flex">Admin</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                    <a href="/" className="dropdown-item" style={{ color: "black" }}>Log Out</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Navbar End --> */}


                    {/* <!-- Blank Start --> */}
                    <div className="container-fluid pt-4 px-4">
                        <div className="row vh-100 bg-secondary rounded align-items-center justify-content-center mx-0">
                            <div className="col-md-6 text-center">
                                <div class="container">
                                    <section class="section-50">
                                        {/* <div className="row">
                                            <div className="col-md-12 ftco-animate">
                                                <div className="cart-list">
                                                    <table className="table">
                                                        <thead className="thead-primary">
                                                            <tr className="">
                                                                <th>&nbsp;</th>
                                                                <th>&nbsp;</th>
                                                                <th>Product</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tdiv>
                                                            <tr className="text-center">
                                                                <td className="product-remove"><a href="#"><span className="ion-ios-close"></span></a></td>

                                                                <td className="image-prod"><div className="img" style={product.productImage}></div></td>

                                                                <td className="product-name">
                                                                    <h3>{product.productName}</h3>
                                                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                                                </td>

                                                                <td className="price">{product.price}</td>

                                                                <td className="quantity">
                                                                    <div className="input-group mb-3">
                                                                        <input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100" />
                                                                    </div>
                                                                </td>

                                                                <td className="total">$4.90</td>
                                                            </tr>
                                                            
                                                        </tdiv>
                                                    </table>
                                                </div>
                                            </div>
                                        </div> */}
                                    </section>
                                </div>
                            </div>
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
    )
};