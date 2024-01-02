import React from "react";
import bg_6 from './images/bg_6.jpg'
import Footer from './footer';
import NavBar from './navigator'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Order() {
	const backgroundImage = {
		backgroundImage: `url(${bg_6})`,
	};

	//TODO move in common folder
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	const [orders, setOrders] = useState([])
	const userId = getCookie("userId");

	useEffect(() => {

		axios.get(`http://localhost:5005/api/order/getorderfromuser/${userId}`)
			.then(orders => {
				setOrders(orders.data.userOrderProducts);
			})
			.catch(err => console.log(err))
	}, [userId])

	const userOrderProducts = orders;
	console.log(userOrderProducts)

	function deleteOrder() {
		const userId = getCookie(`userId`)
		console.log(userId)

		axios.delete(`http://localhost:5005/api/order/deleteorder`, {
			data: { userId: userId }
		})
			.then(res => {
				console.log(res)
				console.log(`product deleted successfully in cart`);

				// After deletion, update the UI by fetching the updated cart data
				axios.get(`http://localhost:5005/api/order/getorderfromuser/${userId}`)
					.then(orders => {
						setOrders(orders.data.userOrderProducts);
					})
					.catch(err => console.log(err))
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
												<th>Product</th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Total</th>
											</tr>
										</thead>
											{
											userOrderProducts.map(order => {
												return <tr className="text-center">
														<td className="product-remove"><a href="#" value="cancel"><span className="ion-ios-close" onClick={deleteOrder} id={userId}></span></a></td>
														<td className="product-name">
															<h3>{order.productName}</h3>
														</td>

														<td className="price">{order.productPrice}</td>

														<td className="quantity">
															<div className="input-group mb-3">
																<p>{order.orderProductQuantity}</p>
															</div>
														</td>

														<td className="total">{order.productTotalPrice}</td>
													</tr>
													{/* <!-- END TR--> */}

												})}
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