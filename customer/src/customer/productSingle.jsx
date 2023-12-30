import React from 'react';
import bg_6 from './images/bg_6.jpg'
import product_3 from './images/product_3.png'
import Footer from './footer';
import NavBar from './navigator'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

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
      // const [redirectToCart, setRedirectToCart] = useState(true);

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

        function getCookie(name) {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(';').shift();
        }
      function onClick(){
      
        const dataForm = {
          idUser: getCookie(`userId`),
          productId: id,
          productQuantity: document.getElementById("quantity").value
        }

        axios.post(`http://localhost:5005/api/cart/addcartforuser`,dataForm)
          .then(res =>{
            //onClick(res.data.dataForm)
            console.log(res);
            // setRedirectToCart(true);
          }, [id])
          console.log("click successful");
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
	                </div>
		            </div>
							</div>
							<div className="w-100"></div>
							<div className="input-group col-md-6 d-flex mb-3">
	             	<input type="number" id="quantity" name="quantity" className="quantity form-control input-number" defaultValue={1} min="1" max="100" />
	          	</div>
	          	<div className="w-100"></div>
	          	<div className="col-md-12">
	          		<p style={myStyle}>{singleProduct.quantity} pieces available</p>
	          	</div>
          	</div>
            {/* {redirectToCart && <Navigate to="/cart" />} */}
          	<p><a onClick={onClick} className="btn btn-black py-3 px-5 mr-2">Add to Cart</a><a onClick={onClick} className="btn btn-primary py-3 px-5">Buy now</a></p>
    			</div>
    		</div>

    	</div>
    </section>
	<Footer />
  </div>
    </>
    )
};