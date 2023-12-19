import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ItemSingleCreate() {
    const myStyle = {
        color: '#000'
      };
      const myStyle2 = {
        color: '#bbb'
      };
      const [singleProduct, setSingleProduct] = useState({});
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      const { id } = useParams();
    
      useEffect(() => {
        axios.post(`http://localhost:5005/api/items/createProd`)
          .then(response => {
            setSingleProduct(response.data);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, [id]);
    
      if (loading) {
        return <p>Loading...</p>; // Show loading state while fetching data
      }
    
      if (error) {
        return <p>Error: {error.message}</p>; // Show error message if API call fails
      }
    
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
                        <a href="/auth#" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i><span style={{color: "#ffffff"}}>Dashboard</span></a>

                        <a href="/iteminventory" className="nav-item nav-link active"><i className="fa fa-chart-line me-2"></i><span style={{color: "#000000"}}>Item Inventory</span></a>
                        <a href="/orderlist" className="nav-item nav-link"><i className="fa fa-times me-2"></i><span style={{color: "#ffffff"}}>Order List</span></a>
                        <a href="/cashieraccount" className="nav-item nav-link"><i className="fa fa-user-edit me-2"></i><span style={{color: "#ffffff"}}>Cashier Account</span></a>
                        <a href="/settings" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i><span style={{color: "#ffffff"}}>Settings</span></a>
                        <a href="/about" className="nav-item nav-link"><i className="fa fa-th me-2"></i> <span style={{color: "#ffffff"}}>About</span></a>
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

    	<div className="container">
    		<div className="row">

        <div className="col-lg-6 mb-5 ftco-animate">
    		<a href="" className="image-popup prod-img-bg"><img src={singleProduct.productImage} className="img-fluid" alt="Colorlib Template" /></a>
    		    </div>
    		    	<div className="col-lg-6 product-details pl-md-5 ftco-animate">
    				    <h3>{singleProduct.productName}</h3>
    				<div className="rating d-flex">
						<p className="text-left mr-4">
							<a href="#" className="mr-2">5.0</a>
							<a href="#"><span className="ion-ios-star-outline"></span></a>
							<a href="#"><span className="ion-ios-star-outline"></span></a>
							<a href="#"><span className="ion-ios-star-outline"></span></a>
							<a href="#"><span className="ion-ios-star-outline"></span></a>
							<a href="#"><span className="ion-ios-star-outline"></span></a>
							</p>
						<p className="text-left mr-4">
							<a href="#" className="mr-2" style={myStyle}>100 <span style={myStyle2}>Rating</span></a>
						</p>
						<p className="text-left">
							<a href="#" className="mr-2" style={myStyle}>500 <span style={myStyle2}>Sold</span></a>
						</p>
					</div>
    			<p className="price"><span>{singleProduct.price}</span></p>
    			<p>{singleProduct.description}</p>
					<div className="row mt-4">
						<div className="col-md-6">
							<div className="form-group d-flex">
		            </div>
						</div>
						<div className="w-100"></div>
						<div className="input-group col-md-6 d-flex mb-3">
	         	<span className="input-group-btn mr-2">
	                	<button type="button" className="quantity-left-minus btn"  data-type="minus" data-field="">
	                   <i className="ion-ios-remove"></i>
	                	</button>
	            		</span>
	             	<span className="input-group-btn ml-2">
	                	<button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
	                     <i className="ion-ios-add"></i>
	                 </button>
	             	</span>
	          	</div>
	          	<div className="w-100"></div>
	          	<div className="col-md-12">
	          		<p style={myStyle}>{singleProduct.quantity} piece available</p>
	          	</div>
          	</div>
          	<p><a href="" className="btn btn-primary py-3 px-5">Create Product</a></p>
    			</div>
    		</div>

    		<div className="row mt-5">
          <div className="col-md-12 nav-link-wrap">
            <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link ftco-animate active mr-lg-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Description</a>

            </div>
          </div>
          <div className="col-md-12 tab-wrap">
            
            <div className="tab-content bg-light" id="v-pills-tabContent">

              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
              	<div className="p-4">
	              	<h3 className="mb-4">{singleProduct.productName}</h3>
	              	<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              	</div>
              </div>

              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
              	<div className="p-4">
	              	<h3 className="mb-4">Manufactured By Choice Handicrafts</h3>
	              	<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              	</div>
              </div>
            </div>
          </div>
        </div>
    	</div>

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
  )};