import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { getOrderAPI, updateOrderStatusAPI } from '../Services/allAPI'

function Admin_orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    displayOrders();
  }, []);

  const displayOrders = async () => {
    try {
      const result = await getOrderAPI();
      console.log("Order API Response:", result);

      if (result.status === 200) {
        setOrders(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Format Date & Time
  const formatDateTime = (dateString) => {
    const d = new Date(dateString);
    return (
      d.toLocaleDateString("en-IN") + " " + d.toLocaleTimeString("en-IN")
    );
  };


  // status
  
const handleStatusChange = async (orderId, newStatus) => {
  try {
    const result = await updateOrderStatusAPI(orderId, newStatus);

    if (result.status === 200) {
      alert("Status updated!");
      displayOrders(); // refresh list
    }
  } catch (err) {
    console.log(err);
  }
}

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
              <tr style={{ backgroundColor: "#f5f6fa" }}>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Table No</th>
                <th>Total</th>
                <th>Date & Time</th>   {/* ✅ Added */}
               
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={order._id}>
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

                    {/* ✅ DATE & TIME */}
                    <td>{formatDateTime(order.createdAt)}</td>
                    {/* <td>
  <select
    className="form-select"
    value={order.status}
    onChange={(e) => handleStatusChange(order._id, e.target.value)}
  >
    <option value="Pending">Pending</option>
    <option value="Preparing">Preparing</option>
    <option value="Ready">Ready</option>
    <option value="Completed">Completed</option>
  </select>
</td> */}


                    {/* Status */}
                   
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
