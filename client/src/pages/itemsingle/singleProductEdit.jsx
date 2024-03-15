import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function ItemSingleEdit() {

  const urlSplits = document.URL.split("/");
  const prodid = urlSplits[urlSplits.length - 1];

  const [formData, setFormData] = useState({});


  

  useEffect(() => {
    axios.get(`http://localhost:5005/api/items/getProd/${prodid}`)
      .then(response => {
        setFormData({
          _id: response.data.product._id,
          productName: response.data.product.productName,
          price: response.data.product.price,
          description: response.data.product.description,
          category: response.data.product.category,
          quantity: response.data.product.quantity,
          productStatus: response.data.product.productStatus,
          createdAt: response.data.product.createdAt
        });
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [prodid]);

  

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
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    axios.post(`http://localhost:5005/api/items/editProd/`, formData)
      .then((response) => {
        setLoading(false);
        setSuccessMessage('Product created successfully.');
        setRedirectToInventory(true); // Set the state to redirect upon successful update
        const itemData = response.data.formData;
        console.log('Product edited:', response.data);
        setFormData({
          _id: itemData._id,
          productName: itemData.productName,
          price: itemData.price,
          description: itemData.description,
          category: itemData.category,
          quantity: itemData.quantity,
          productStatus: itemData.productStatus,
          productImage: itemData.productImage,
          createdAt: itemData.createdAt
        });
      })
      .catch((error) => {
        setLoading(false);
        setError('Error creating product. Please try again.');
        console.error('Error creating product:', error);
        // You can extract more specific error details from the 'error' object received
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

            <div className="navbar-nav w-100">
              <a href="/auth#" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i><span style={{ color: "#ffffff" }}>Dashboard</span></a>

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
              <nav class="navbar navbar-expand bg-primary navbar-dark sticky-top px-4 py-0">

                {/* <!-- Your form goes here --> */}
                <div class="modal-body">
                  {/*body of edited model*/}
                  <form id="add-product-form" onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="_id" class="form-label" style={{visibility: 'hidden'}}>Product Id:</label>
                      <input type="text" class="form-control"
                        id="_id" name="_id" disabled style={{visibility: 'hidden'}}
                        value={formData._id} onChange={handleChange}
                        required></input>
                    </div>
                    <div class="mb-3">
                      <label for="productName" class="form-label">Product Name:</label>
                      <input type="text" class="form-control"
                        id="productName" name="productName"
                        value={formData.productName} onChange={handleChange}
                        required></input>
                    </div>
                    <div class="mb-3">
                      <label for="price" class="form-label">Price:</label>
                      <input type="number" class="form-control"
                        id="price" name="price"
                        min="0.01" step="0.01"
                        value={formData.price} onChange={handleChange}
                        required />
                    </div>
                    <div class="mb-3">
                      <label for="quantity" class="form-label">Quantity:</label>
                      <input type="number" class="form-control"
                        id="quantity" name="quantity"
                        min="0.01" step="0.01"
                        value={formData.quantity} onChange={handleChange}
                        required />
                    </div>
                    <div class="mb-3">
                      <label for="description" class="form-label">Description:</label>
                      <input type="text" class="form-control"
                        id="description" name="description"
                        value={formData.description} onChange={handleChange} style={{ minHeight: '100px', border: '1px solid #ccc', padding: '5px' }}
                        required />
                    </div>
                    <div class="mb-3">
                      <label for="category" class="form-label">Category:</label>
                      <select class="form-select" id="category"
                        name="category" value={formData.category}
                        onChange={handleChange}>
                        <option value="bags">Bags</option>
                        <option value="clothing">Clothing</option>
                        <option value="shoes">Footwear</option>
                        <option value="accessories">Accessories</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="productImage" class="form-label">Image:</label>
                      <input type="file" class="form-control"
                        id="productImage" name="productImage" accept="image/*"
                        value={formData.productImage}
                        onChange={handleChange} required />
                    </div>
                    <div class="mb-3">
                      <label for="productStatus" class="form-label">Product Status:</label>
                      <select class="form-select" id="productStatus"
                        name="productStatus" value={formData.productStatus}
                        onChange={handleChange}>
                        <option value="available">Available</option>
                        <option value="not available">Not Available</option>
                      </select>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {redirectToInventory && <Navigate to="/iteminventory" />}
                    <button type="submit" class="btn btn-primary" disabled={loading}>Finished Editing</button>
                  </form>
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