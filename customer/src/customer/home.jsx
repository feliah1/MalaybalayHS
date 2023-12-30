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

	  useEffect(() =>{
		  axios.get('http://localhost:5005/api/items/getAllProd')
		  .then(products => setProducts(products.data)) 
		  .catch(err => console.log(err))
	  }, [])
  
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
								products.map(product =>{
								
							return<div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
								<div className="product d-flex flex-column">
								<Link
                                    to={{
                                        pathname: `/productSingle/${product._id}`,
                                        state: { ProductId: product._id }
                                    }}
                                    >
									<a href="#" className="img-prod"><img className="img-fluid" src={placeholder} alt="Colorlib Template" />
										<div className="overlay"></div>
									</a>
									<div className="text py-3 pb-4 px-3">
										<div className="d-flex">
											<div className="rating">
												<p className="text-right mb-0">
													<a href="#"><span className="ion-ios-star-outline"></span></a>
													<a href="#"><span className="ion-ios-star-outline"></span></a>
													<a href="#"><span className="ion-ios-star-outline"></span></a>
													<a href="#"><span className="ion-ios-star-outline"></span></a>
													<a href="#"><span className="ion-ios-star-outline"></span></a>
												</p>
											</div>
										</div>
										<h3><a href="/productSingle">{product.productName}</a></h3>
										<div className="pricing">
											<p className="price"><span>P{product.price}</span></p>
										</div>
										<p className="bottom-area d-flex px-3">
								<a href="/productSingle" className="buy-now text-center py-2">info<span><i className="ion-ios-cart ml-1"></i></span></a>
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
					  {/* <div className="col text-center">
						<div className="block-27">
						  <ul>
							<li><a href="#">&lt;</a></li>
							<li className="active"><span>1</span></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#">5</a></li>
							<li><a href="#">&gt;</a></li>
						  </ul>
						</div>
					  </div> */}
					</div>
					</div>
	
					<div className="col-md-2 col-lg-1">

				</div>
			</div>
           </div>
		</section>
		<Footer />
    </section>
  </div>
    </>
  )
}