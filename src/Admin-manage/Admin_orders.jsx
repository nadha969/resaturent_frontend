import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { getOrderAPI } from '../Services/allAPI'
import { Form } from 'react-bootstrap';

function Admin_orders() {

  const [orders, setOrders] = useState([]);

  // Load saved orders or fetch from backend
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));

    if (savedOrders && savedOrders.length > 0) {
      setOrders(savedOrders);        
    } else {
      displayOrders();               
    }
  }, []);

  const displayOrders = async () => {
    try {
      const result = await getOrderAPI();
      console.log("Order API Response:", result);

      if (result.status === 200) {
        setOrders(result.data);
        localStorage.setItem("orders", JSON.stringify(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Format Date & Time
  const formatDateTime = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-IN") + " " + d.toLocaleTimeString("en-IN");
  };

  
  return (
    <div className="row d-flex">
      <div className="col-lg-3">
        <Sidebar />
      </div>

      <div className="col-lg-9 p-4">

        <h3 className="text-center mb-4" style={{ fontFamily: "Libartinus Mono" }}>
          Orders Management
        </h3>

        <div className="shadow p-4 rounded bg-white">
          <table className="table text-center align-middle">
            <thead>
              <tr style={{ backgroundColor: "#f5f6fa" }} className='mt-3'>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Table No</th>
                <th>Total</th>
                <th>Date & Time</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={order._id} className='mt-3'>
                    <td>{index + 1}</td>
                    <td>{order._id}</td>
                    <td>{order.name}</td>
                    <td>
                      {order.items.map(i => (
                        <div key={i.itemId}>
                          {i.itemName} × {i.quantity}
                        </div>
                      ))}
                    </td>
                    <td>{order.tableNumber}</td>
                    <td>₹{order.totalAmount}</td>

                  

                    {/* date time */}
                    <td>{formatDateTime(order.createdAt)}</td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No orders found</td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Admin_orders;
