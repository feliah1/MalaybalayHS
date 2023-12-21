import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProductDelete(product) {
    const [deleteProd, setDeleteProd] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()

    const id = useParams();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        axios.delete(`http://localhost:5005/api/items/deleteProd/${id}`)
            .then((response) => {
                setDeleteProd(false);
                console.log('Product deleted:', response.data);
                // Additional actions after deleting the product if needed
            })
            .catch((error) => {
                setLoading(false);
                setError('Error deleting product. Please try again.');
                console.error('Error deleting product:', error);
                // Handle specific error details
            });
    };
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
                    <a href="/cashieraccount" className="nav-item nav-link"><i className="fa fa-user-edit me-2"></i><span style={{color:"#ffffff"}}>Cashier Account</span></a>
                    <a href="/settings" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i><span style={{color:"#ffffff"}}>Settings</span></a>
                    <a href="/about" className="nav-item nav-link active"><i className="fa fa-th me-2"></i> <span style={{color:"#000000"}}>About</span></a>
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
                </nav>
                {/* <!-- Navbar End --> */}


                {/* <!-- Blank Start --> */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row vh-100 bg-secondary rounded align-items-center justify-content-center mx-0">

                        <div className="modal-content">
							<div action="/itemsingledelete/<%= product._id %>" method="POST">
								<div className="modal-header">						
									<h4 className="modal-title">Delete Donation Data</h4>
								</div>
								<div className="modal-body">					
									<p>Are you sure you want to delete these Records?</p>
									<p className="text-warning"><small>This action cannot be undone.</small></p>
								</div>
									<div className="modal-footer">
                                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                        <input type="submit" className="btn btn-danger" onClick={(e) => handleSubmit(e)} value="Delete"/>
									</div>
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
  )};