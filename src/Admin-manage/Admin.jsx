import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { displaymenuAPI, getOrderAPI } from '../Services/allAPI';

function Admin() {
  const [menuResponse, setMenuResponse] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load Dishes
      const menuResult = await displaymenuAPI();
      if (menuResult.status === 200) setMenuResponse(menuResult.data);

      // Load Orders
      const orderResult = await getOrderAPI();
      if (orderResult.status === 200) setOrders(orderResult.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row d-flex">
    
      <div className="col-lg-3">
        <Sidebar />
      </div>

      <div className="col-lg-9">
        <h3 style={{ fontFamily: 'Dancing Script', color: 'green', textAlign: 'center', marginTop: '20px',  }}>
          The Food Lounge Restaurant
        </h3>

        <div className="container">
          <h4 style={{ fontFamily: 'Libartinus Mono', marginTop: '20px' }}>Dashboard</h4>

          {/* Dashboard Cards */}
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 mb-3">
              <div className="shadow text-center p-3 rounded bg-light">
                <i className="fa-solid fa-utensils fs-2 mb-2" style={{ color: 'green' }}></i>
                <h5>Total Dishes</h5>
                <h3>{menuResponse.length}</h3>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mb-3">
              <div className="shadow text-center p-3 rounded bg-light">
                <i className="fa-solid fa-cart-shopping fs-2 mb-2" style={{ color: 'blue' }}></i>
                <h5>Total Orders</h5>
                <h3>{orders.length}</h3>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Admin;
