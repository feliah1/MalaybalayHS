import bg_6 from './images/bg_6.jpg'
import Footer from './footer';
import NavBar from './navigator'

import axios from "axios";
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Cart() {

	//TODO move in common folder
	function getCookie(name) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
	}

	const [cartproducts, setGetCart] = useState([]);

	const userId = getCookie("userId");
	const cartId = document.getElementById("id");
	
	console.log(cartId)

	useEffect(() => {
		axios.get(`http://localhost:5005/api/cart/getcartofuser/${userId}`)
			.then(cartproducts => {
				setGetCart(cartproducts.data.userCartProducts);
			})
			.catch(err => console.log(err))
	}, [userId])


	const userCartProducts = cartproducts;
	console.log(userCartProducts);

	const backgroundImage = {
		backgroundImage: `url(${bg_6})`,
	};

	function TotalCartPrice(){
		var totalCartPrice = 0;
        
        userCartProducts.forEach(c => {
            totalCartPrice = totalCartPrice + c.productTotalPrice;
        });
		return totalCartPrice;
	}
	console.log("Total Cart Price:", TotalCartPrice());

	function deleteCart(){
		const userId = getCookie(`userId`)
		console.log(userId)
		
		axios.delete(`http://localhost:5005/api/cart/deletecart`, {
			data: { userId: userId }})
			.then(res =>{
				console.log(res)
				console.log(`product deleted successfully in cart`);

				// After deletion, update the UI by fetching the updated cart data
				axios.get(`http://localhost:5005/api/cart/getcartofuser/${userId}`)
					.then(cartProducts => {
					setGetCart(cartProducts.data.userCartProducts);
				})
				.catch(err => console.log(err));
			})
			.catch(err => console.log(err))
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
								<p className="breadcrumbs"><span className="mr-2"><a href="/home">Home</a></span> <span>Cart</span></p>
								<h1 className="mb-0 bread">My Wishlist</h1>
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
							{
								userCartProducts.map(userCartProduct =>{
									return <tr className="text-center">
												<td className="product-remove"><a href="#"><span className="ion-ios-close" onClick={deleteCart} id={userId}></span></a></td>

												<td className="image-prod"><div className="img" img={userCartProduct.productImage}></div></td>

												<td className="product-name">
													<h3>{userCartProduct.productName}</h3>
													<p>{userCartProduct.description}</p>
												</td>

												<td className="price">P{userCartProduct.productPrice}</td>

												<td className="quantity">
													<div className="input-group mb-3">
														<input type="number" name="quantity" className="quantity form-control input-number" defaultValue={userCartProduct.productQuantity} min="1" max="100" />
													</div>
												</td>

												<td className="total">P{userCartProduct.productTotalPrice}</td>
											</tr>
											{/* <!-- END TR--> */}


										
								})}
									</table>
								</div>
							</div>
						</div>
						<div className="row justify-content-start">
							<div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
								<div className="cart-total mb-3">
									<h3>Cart Totals</h3>
										<p className="d-flex total-price">
											<span>Total</span>
											<span>P{TotalCartPrice()}</span>
										</p>
								</div>
								<p className="text-center"><a href="/order" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	)
}