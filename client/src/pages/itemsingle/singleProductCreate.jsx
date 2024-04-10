import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function ItemSingleCreate() {

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

    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        description: '',
        category: '',
        quantity: '',
        productStatus: '',
        productImage: '',
        createdAt: new Date().toISOString()
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [redirectToInventory, setRedirectToInventory] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        axios.post('http://localhost:5005/api/items/createProd', formData)
            .then((response) => {
                setLoading(false);
                setSuccessMessage('Product created successfully.');
                console.log('Product created:', response.data);
                setRedirectToInventory(true); // Set the state to redirect upon successful creation
            })
            .catch((error) => {
                setLoading(false);
                setError('Error creating product. Please try again.', error);
                console.error('Error creating product:', error);
            });

            
    };

    // const convertToBase64 = () => {
    //     const reader = new FileReader()
    
    //     reader.readAsDataURL(selectedFile)
    
    //     reader.onload = () => {
    //       console.log('called: ', reader)
    //       setBase64IMG(reader.result)
    //     }
    //   }
    

    //     // Get a reference to the file input
    // const fileInput = document.querySelector('input');

    // // Listen for the change event so we can capture the file
    // fileInput.addEventListener('change', (e) => {
    //     // Get a reference to the file
    //     const file = e.target.files[0];

    //     // Encode the file using the FileReader API
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         console.log(reader.result);
    //         // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
    //     };
    //     reader.readAsDataURL(file);
    // });

    const [showConfirmation, setShowConfirmation] = useState(false);
    const confirmationRef = useRef(null);

    const handleCancelCreating = () => {
        setShowConfirmation(false);
    };

    const handleFinishCreating = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
        // Scroll to the confirmation modal when displayed
        confirmationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                <h1>Item Inventory</h1>
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

                    <div className="container-fluid pt-4 px-4 bg-secondary">
                        <section className="ftco-section">
                            {/* <!-- Navbar Start --> */}
                            <nav className="navbar navbar-expand bg-primary navbar-dark sticky-top px-4 py-0">

                                {/* <!-- Your form goes here --> */}
                                <div className="modal-body">

                                    <form id="add-product-form" onSubmit={handleFinishCreating}>
                                        <div className="mb-3">
                                            <label htmlFor="productName" className="form-label">Product Name:</label>
                                            <input type="text" className="form-control"
                                                id="productName" name="productName"
                                                value={formData.productName} onChange={handleChange}
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="price" className="form-label">Price:</label>
                                            <input type="number" className="form-control"
                                                id="price" name="price"
                                                min="0.01" step="0.01"
                                                value={formData.price} onChange={handleChange}
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="quantity" className="form-label">Quantity:</label>
                                            <input type="number" className="form-control"
                                                id="quantity" name="quantity"
                                                min="0.01" step="0.01"
                                                value={formData.quantity} onChange={handleChange}
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description:</label>
                                            <input type="text" className="form-control"
                                                id="description" name="description"
                                                value={formData.description} onChange={handleChange} style={{ minHeight: '100px', border: '1px solid #ccc', padding: '5px' }}
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="category" className="form-label">Category:</label>
                                            <select className="form-select" id="category"
                                                name="category" value={formData.category}
                                                onChange={handleChange}>
                                                <option value=""></option>
                                                <option value="bags">Bags</option>
                                                <option value="clothing">Clothing</option>
                                                <option value="shoes">Footwear</option>
                                                <option value="accessories">Accessories</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="productImage" className="form-label">Image:</label>
                                            <input type="file" className="form-control"
                                                id="productImage" name="productImage" accept="image/*"
                                                value={formData.productImage}
                                                onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="productStatus" className="form-label">Product Status:</label>
                                            <select className="form-select" id="productStatus"
                                                name="productStatus" value={formData.productStatus}
                                                onChange={handleChange}>
                                                <option value=""></option>
                                                <option value="available">Available</option>
                                                <option value="not available">Not Available</option>
                                            </select>
                                        </div>
                                        {error && <p className="error-message">{error}</p>}
                                        {successMessage && <p className="success-message">{successMessage}</p>}
                                        {redirectToInventory && <Navigate to="/iteminventory" />}
                                        <button type="submit" className="btn btn-primary" disabled={loading} href="">Add Product</button>
                                    </form>

                                    {/* Confirmation Modal */}
                                    {showConfirmation && (
                                        <div className="modal-overlay" ref={confirmationRef}>
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Confirmation</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Are you sure this is done?</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-default" onClick={handleCancelCreating}>Cancel</button>
                                                    <button className="btn btn-danger" onClick={handleSubmit}>Confirm</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* <!-- Your form ends here --> */}

                            </nav>
                            {/* <!-- Navbar End --> */}


                        </section>
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