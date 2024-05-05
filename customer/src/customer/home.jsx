import bg_1 from './images/bg_1.png';
import bg_2 from './images/bg_2.png';
import placeholder from './images/product_2.png'

import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from './footer';
import NavBar from './navigator'

export default function Home() {
	const bg_1Img = {
		backgroundImage: `url(${bg_1})`,
	};
	const bg_2Img = {
		backgroundImage: `url(${bg_2})`,
	};

	const [products, setProducts] = useState([]);
	const [activity, setActivity] = useState('');

	useEffect(() => {
		axios.get('http://localhost:5005/api/items/getAllProd')
			.then(products => setProducts(products.data))
			.catch(err => console.log(err))

			    // Fetch activity initially and every 4 seconds
				getRandomActivity();
				const intervalId = setInterval(getRandomActivity, 4000);
			
				// Clean up interval on component unmount
				return () => clearInterval(intervalId);
	}, [])

	async function getRandomActivity() {
		var apiURL = "http://www.boredapi.com/api/activity?minprice=0&maxprice=0.1"
		var response = await fetch(apiURL);
		var data = await response.json()

		var { activity } = data;
		setActivity(activity);
	}
	
	return (
		<>
			<div>
				<NavBar />
				{/* <!-- END nav --> */}
				<section id="home-section" className="hero">
					<section className="ftco-section bg-light">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-lg-10 order-md-last">

									{/* here */}
									<div className="row">
										{
											products.map(product => {

												return <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
													<div className="product d-flex flex-column btn btn-primary py-3 px-5">
														<Link
															to={{
																pathname: `/productSingle/${product._id}`,
																state: { ProductId: product._id }
															}}
														>
															<div className="text py-3 pb-4 px-3">
																<h3><a href="/productSingle">{product.productName}</a></h3>
																<div className="pricing">
																	<p className="price"><span>P{product.price}</span></p>
																</div>
																<p className="bottom-area d-flex px-3">
																	{/* <a href="/productSingle" className="buy-now text-center py-2">info<span><i className="ion-ios-cart ml-1"></i></span></a> */}
																</p>
															</div>
														</Link>
													</div>
												</div>
											})
										}
									</div>
									{/* ends here */}

									<div className="row mt-5">
									</div>
								</div>
							</div>
							<div>
							</div>
						</div>
						<div>
							<center>
								<h3>Let's Do an Activity</h3>
								<h6 className='paragraph'>{activity}</h6>
							</center>
						</div>
					</section>
					<Footer />
				</section>
			</div>
		</>
	)
}