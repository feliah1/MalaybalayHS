import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import placeholder from "./img/product_2.png"

export default function ItemInventory() {

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    if (!getCookie("userId") && !getCookie("userType")) {
        window.location.href = "/";
    }

    if (getCookie("userType").toLowerCase().toString() === "basic" ) {
        window.location.href = "/";
        console.log("Basic user logged in. Must be admin");
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/api/items/getAllProd')
            .then(products => setProducts(products.data))
            .catch(err => console.log(err))
    }, [])
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

                        <div className="navbar-nav w-100">

                            <a href="/iteminventory" className="nav-item nav-link active"><i className="fa fa-chart-line me-2"></i><span style={{ color: "#000000" }}>Item Inventory</span></a>
                            <a href="/orderlist" className="nav-item nav-link"><i className="fa fa-times me-2"></i><span style={{ color: "#ffffff" }}>Order List</span></a>
                            <a href="/settings" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i><span style={{ color: "#ffffff" }}>Cashier Account</span></a>
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
                        <a href="auth#" className="sidebar-toggler flex-shrink-0">
                            <i className="fa fa-bars"></i>
                        </a>

                        <div className="navbar-nav align-items-center ms-auto">
                            <div className="nav-item dropdown">
                                <a href="auth#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
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
                    <section className="ftco-section bg-secondary">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-lg-10 order-md-last">
                                    <Link to={{ pathname: '/itemsinglecreate' }}>
                                        <button style={{ marginTop: "20px" }} className="btn btn-secondary btn-lg ml-auto mr-3 order-lg-last">
                                            Create Product
                                        </button>
                                    </Link>
                                    <div className="row">

                                        {/* rows to duplicate and get items in database */}
                                        {
                                            products.map(product => (
                                                <div key={product._id} className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex" style={{ marginTop: "38px" }}>
                                                    <div className="product d-flex flex-column">
                                                        <Link
                                                            to={{
                                                                pathname: `/itemsingle/${product._id}`,
                                                                state: { ProductId: product._id }
                                                            }}>
                                                            <div className="img-prod">
															<a href="#" className="img-prod"><img className="img-fluid" src={placeholder} alt="Colorlib Template" />
																<div className="overlay"></div>
															</a>
                                                            </div>
                                                            <div className="text py-3 pb-4 px-3">
                                                                <h3>{product.productName}</h3>
                                                                <div className="pricing">
                                                                    <p className="price"><span>P{product.price}</span></p>
                                                                </div>
                                                                <p className="bottom-area d-flex px-3">
                                                                    <span className="buy-now text-center py-2">info<span><i className="ion-ios-cart ml-1"></i></span></span>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {/* end of rows */}
                                    </div>
                                </div>

                                <div className="col-md-2 col-lg-1">

                                </div>
                            </div>
                        </div>
                    </section>
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