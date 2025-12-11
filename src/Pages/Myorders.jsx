import React, { useEffect, useState } from 'react';
import { getCustomerOrdersAPI } from '../Services/allAPI';
import Header from '../Components/Header';

function Myorders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      console.log("Token not found");
      return;
    }

    const reqHeader = {
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`
    };

    try {
      const result = await getCustomerOrdersAPI(reqHeader);
      console.log("Orders API Response:", result);

      if (result.status === 200) {
        setOrders(result.data);
      }
    } catch (err) {
      console.log("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className='container mt-4'>
        <h3>Order Summary</h3>

        {orders.length > 0 ? (
          orders.map(order => {
            const totalPrice = order.items
              ? order.items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
              : 0;

            return (
              <div className='card p-3 mb-3' key={order._id}>
                <h5>Order ID: {order._id}</h5>

                <p>
                  <b>Ordered On:</b>{" "}
                  {new Date(order.createdAt).toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>

               
                {/* Items */}
                {order.items && order.items.length > 0 ? (
                  <>
                    <h6>Items:</h6>
                    {order.items.map((item, idx) => (
                      <div key={idx} className='ms-3'>
                        <p>
                          {item.itemName} × {item.quantity || 1} - ₹
                          {item.price * (item.quantity || 1)}
                        </p>
                      </div>
                    ))}

                    <p><b>Total Price:</b> ₹{totalPrice}</p>
                  </>
                ) : (
                  <p>No items in this order.</p>
                )}
              </div>
            );
          })
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </>
  );
}

export default Myorders;
