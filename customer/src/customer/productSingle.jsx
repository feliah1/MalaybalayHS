import React from 'react';
import bg_6 from './images/bg_6.jpg'
import product_3 from './images/product_3.png'
import Footer from './footer';
import NavBar from './navigator'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SingleProduct (){
    const backgroundImage = {
        backgroundImage: `url(${bg_6})`,
      };

      const myStyle = {
        color: '#000'
      };

	  const [singleProduct, setSingleProduct] = useState({});
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      const { id } = useParams(); // Access ID from the URL params

      useEffect(() => {
        axios.get(`http://localhost:5005/api/items/getProd/${id}`)
          .then(response => {
            setSingleProduct(response.data.product);
            console.log(response.data)
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching product:', error);
            setError(error);
            setLoading(false);
          });
      }, [id]);
    
      if (loading) {
        return <p>Loading...</p>; // Show loading state while fetching data
      }
      
      if (error || !singleProduct || Object.keys(singleProduct).length === 0) {
        return <p>Error: Product not found</p>; // Show error message if API call fails or product not found
      }
    return(
    <>
         <div className="goto-here">
	<NavBar />
    {/* <!-- END nav --> */}

    <div className="hero-wrap hero-bread" style={backgroundImage}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Shop</span></p>
            <h1 className="mb-0 bread">Shop</h1>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section">

    	<div className="container">
    		<div className="row">
    			<div className="col-lg-6 mb-5 ftco-animate">
    				<a href="images/product-1.png" className="image-popup prod-img-bg"><img src={product_3} className="img-fluid" alt="Colorlib Template" /></a>
    			</div>
    			<div className="col-lg-6 product-details pl-md-5 ftco-animate">
    				<h3>{singleProduct.productName}</h3>
    				<p className="price"><span>P{singleProduct.price}</span></p>
    				<p>{singleProduct.description}</p>
						<div className="row mt-4">
							<div className="col-md-6">
								<div className="form-group d-flex">
		              <div className="select-wrap">
	                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                  <select name="" id="" className="form-control">
	                  	<option value="">Small</option>
	                    <option value="">Medium</option>
	                    <option value="">Large</option>
	                    <option value="">Extra Large</option>
	                  </select>
	                </div>
		            </div>
							</div>
							<div className="w-100"></div>
							<div className="input-group col-md-6 d-flex mb-3">
	             	<span className="input-group-btn mr-2">
	                	<button type="button" className="quantity-left-minus btn"  data-type="minus" data-field="">
	                   <i className="ion-ios-remove"></i>
	                	</button>
	            		</span>
	             	<input type="text" id="quantity" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100" />
	             	<span className="input-group-btn ml-2">
	                	<button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
	                     <i className="ion-ios-add"></i>
	                 </button>
	             	</span>
	          	</div>
	          	<div className="w-100"></div>
	          	<div className="col-md-12">
	          		<p style={myStyle}>80 piece available</p>
	          	</div>
          	</div>
          	<p><a href="/cart" className="btn btn-black py-3 px-5 mr-2">Add to Cart</a><a href="/cart" className="btn btn-primary py-3 px-5">Buy now</a></p>
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
	              	<h3 className="mb-4">Nike Free RN 2019 iD</h3>
	              	<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              	</div>
              </div>

              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
              	<div className="p-4">
	              	<h3 className="mb-4">Manufactured By Nike</h3>
	              	<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              	</div>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>
	<Footer />
  </div>
    </>
    )
};