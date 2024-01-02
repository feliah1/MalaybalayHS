import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="/home">Malaybalay Handishop</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="/home" className="nav-link">Home</a></li>
              {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="footwear.html">Footwear</a>
                    <a className="dropdown-item" href="clothes.html">Clothes</a>
                    <a className="dropdown-item" href="accessories.html">Accessories</a>
                    <a className="dropdown-item" href="others.html">Others</a>
                    <a className="dropdown-item" href="bags.html">Bags</a>
                  </div>
                  </li> */}
              <li className="nav-item"><a href="/cart" className="nav-link"><span className="icon-shopping_cart"></span>CART</a></li>
              <li className="nav-item"><a href="/order" className="nav-link"><span className="icon-shopping_cart"></span>Checkout</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="/setting" className="nav-link">Settings</a></li>
            </ul>

            <ul className="nav-item dropdown">

              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><input type="search" placeholder="SEARCH" /></a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <a className="dropdown-item" href="/">Logout</a>
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};