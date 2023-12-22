import React from "react";
import bg_6 from './images/bg_6.jpg'
import product_4 from './images/product_4.png'
import Footer from './footer';
import NavBar from './navigator'

export default function Order() {

	//TODO move in common folder
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

    const backgroundImage = {
        backgroundImage: `url(${bg_6})`,
      };
      const product_4Img = {
        backgroundImage: `url(${product_4})`,
      };

	  const product ={
		productName:'test value',
		productImage: null,
		price: 10,
		category: 'car',
		productStatus:'available',
		description:'this is a car'
	  }

	  
    return (
      <>
          <div className="goto-here">
		
          <NavBar />
    {/* <!-- END nav --> */}

    <div className="hero-wrap hero-bread" style={backgroundImage}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="/home">Home</a></span> <span>Order</span></p>
            <h1 className="mb-0 bread">Order</h1>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
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
					             	<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100"/>
					          	</div>
					          </td>
						        
						        <td className="total">$4.90</td>
						      </tr>
                  {/* <!-- END TR--> */}

						      <tr className="text-center">
						        <td className="product-remove"><a href="#"><span className="ion-ios-close"></span></a></td>
						        
						        <td className="image-prod"><div className="img" style={product_4Img}></div></td>
						        
						        <td className="product-name">
						        	<h3>Nike Free RN 2019 iD</h3>
						        	<p>Far far away, behind the word mountains, far from the countries</p>
						        </td>
						        
						        <td className="price">P</td>
						        
						        <td className="quantity">
						        	<div className="input-group mb-3">
					             	<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100"/>
					          	</div>
					          </td>
						        
						        <td className="total">$15.70</td>
						      </tr>
                  {/* <!-- END TR--> */}
						    </tdiv>
						  </table>
					  </div>
    			</div>
    		</div>
			</div>
		</section>
    
    <Footer />
  </div>
      </>
    )
}