import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';
import './order.css';
import { placeOrderAPI } from '../Services/allAPI';

function Order() {
  // Redux states
  const cartState = useSelector(state => state.cart || {});
  const userState = useSelector(state => state.user || {});
  const cartitem = cartState.cartitem || [];
  const user = userState.user || null;

  const dispatch = useDispatch();

  // Order details state (DATE REMOVED)
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    contact: "",
    tableNumber: "",
    peopleCount: ""
  });

  // Auto-fill user data
  useEffect(() => {
    if (user) {
      setOrderDetails(prev => ({
        ...prev,
        name: user.name || "",
        contact: user.contact || ""
      }));
    }
  }, [user]);

  // Handle input
  const handleChange = e => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  // Calculate totals
  const totalAmount = cartitem.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = cartitem.reduce((sum, i) => sum + i.quantity, 0);

  // Submit order
  const handlePlaceOrder = async () => {
    if (!cartitem.length) return toast.error("Cart is empty!");

    const token = sessionStorage.getItem("token");
    if (!token) return toast.error("Please login first!");

    const orderData = {
      ...orderDetails,
      items: cartitem,
      totalAmount,
      totalItems
    };

    try {
      const response = await placeOrderAPI(orderData);

      if (response.status === 200) {
        toast.success("Order placed successfully!");
        dispatch(clearCart());

        setOrderDetails({
          name: user?.name || "",
          contact: user?.contact || "",
          tableNumber: "",
          peopleCount: ""
        });
      } else {
        toast.error(response.data?.message || "Order failed!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5 d-flex justify-content-center">
        <div className="order-card p-4 shadow rounded" style={{ maxWidth: "700px", width: "90%" }}>
          
          <h2 className="text-center mb-4" style={{ fontFamily: "Dancing Script", color: "green" }}>
            🧾 Book Your Order
          </h2>

          <div className="form-group mb-3">
            <label>Name</label>
            <input
              name="name"
              value={orderDetails.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group mb-3">
            <label>Contact</label>
            <input
              name="contact"
              value={orderDetails.contact}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter contact number"
            />
          </div>

          <div className="form-group mb-3">
            <label>Table Number</label>
            <input
              name="tableNumber"
              value={orderDetails.tableNumber}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter table number"
              type="number"
            />
          </div>

          <div className="form-group mb-3">
            <label>Number of People</label>
            <input
              name="peopleCount"
              value={orderDetails.peopleCount}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter number of people"
              type="number"
            />
          </div>

          <button
            onClick={handlePlaceOrder}
            className="btn btn-success w-100 mt-3 fw-bold"
          >
            Confirm Order
          </button>

          <div className="mt-3 text-center">
            <strong>Total Items:</strong> {totalItems} <br />
            <strong>Total Amount:</strong> {totalAmount}/-
          </div>

        </div>
      </div>
    </>
  );
}

export default Order;
