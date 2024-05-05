import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderList() {
    const [redirectToOrder, setRedirectToOrder] = useState(false);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    if (!getCookie("userId") && !getCookie("userType")) {
        window.location.href = "/";
    }

    if (getCookie("userType").toLowerCase().toString() === "basic") {
        window.location.href = "/";
        console.log("Basic user logged in. Must be admin");
    }

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/api/order/getorder')
            .then(orders => setOrders(orders.data.userOrders))
            .catch(err => console.log(err))
    }, [])

    const handleFormSubmit = (orderId, newStatus) => {
        // Send a request to update the order status
        axios.post(`http://localhost:5005/api/order/updateorder`, { orderId, newStatus })
            .then(res => {
                console.log('Order status updated successfully:', res);
                // Optionally, you can update the UI to reflect the new status
            })
            .catch(err => console.error('Error updating order status:', err));
    };
    return (
        <>
            <div>

                {/* <!-- Sidebar Start --> */}
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-quadrant navbar-dark">
                        <a href="index.html" className="navbar-brand mx-4 mb-3">
                            <h3 className="text-tertiary"><i className="#">
                            </i>Malaybalay<br />HandiShop</h3>
                        </a>

                        <div className="navbar-nav w-100">
                            <a href="/iteminventory" className="nav-item nav-link"><i className="fa fa-chart-line me-2"></i><span style={{ color: "#ffffff" }}>Item Inventory</span></a>
                            <a href="/orderlist" className="nav-item nav-link active"><i className="fa fa-times me-2"></i><span style={{ color: "#000000" }}>Order List</span></a>
                            <a href="/settings" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i><span style={{ color: "#ffffff" }}>Cashier Account</span></a>
                            <a href="/about" className="nav-item nav-link"><i className="fa fa-th me-2"></i> <span style={{ color: "#ffffff" }}>About</span></a>
                        </div>
                    </nav>
                </div>
                {/* <!-- Sidebar End --> */}

                {/* <!-- Content Start --> */}
                <div className="content">
                    {/* <!-- Navbar Start --> */}
                    <nav className="navbar navbar-expand bg-primary navbar-dark sticky-top px-4 py-0">
                        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                            <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                        </a>
                        <a href="#" className="sidebar-toggler flex-shrink-0">
                            <i className="fa fa-bars"></i>
                        </a>

                        <div className="navbar-nav align-items-center ms-auto">
                            <div className="nav-item dropdown">

                                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item text-center">See all message</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">

                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                    <span className="d-none d-lg-inline-flex">Admin</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                    <a href="/" className="dropdown-item" style={{ color: "black" }}>Log Out</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Navbar End --> */}

                    {/* <!-- Blank Start --> */}

                    <div className="container-fluid pt-4 px-4">
                        <div className="row vh-100 bg-secondary rounded justify-content-center mx-0">
                            <section className="ftco-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 ftco-animate">
                                            <div className="cart-list">
                                                <table className="table">
                                                    <thead className="thead-primary">
                                                        <tr className="">
                                                            <th>Cashier</th>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        orders.map(order => {
                                                            return <tr className="text-center">
                                                                <td>
                                                                    <p>{order.userOrderEmail}</p>
                                                                </td>
                                                                <td className="product-name">
                                                                    <p>{order.productOrderName}</p>
                                                                </td>
                                                                <td className="price">
                                                                    <p>{order.productOrderPrice}</p>
                                                                </td>
                                                                <td className="quantity">
                                                                    <p>{order.orderProductQuantity}</p>
                                                                </td>
                                                                <td className="total">
                                                                    <p>{order.OrderTotalPrice}</p>
                                                                </td>
                                                                {/* <td>
                                                                    <form key={order.id} onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        const newStatus = e.target.elements.status.value;
                                                                        handleFormSubmit(order.id, newStatus);
                                                                    }}>
                                                                        <input type="hidden" name="orderId" value={order.id} />
                                                                        <select name="status" defaultValue={order.orderStatus}>
                                                                            <option value="waiting">waiting</option>
                                                                            <option value="accepted">accepted</option>
                                                                            <option value="rejected">rejected</option>
                                                                        </select>
                                                                        <input type="submit" value="Save" />
                                                                    </form>
                                                                </td> */}
                                                            </tr>
                                                            {/* <!-- END TR--> */ }



                                                        })
                                                    }
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
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