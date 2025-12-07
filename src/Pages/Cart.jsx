import React from 'react';
import Header from '../Components/Header';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/CartSlice';
import SERVER_URL from '../Services/server_url';


function Cart() {

  const dispatch = useDispatch();
  const { cartitem } = useSelector((state) => state.cart);

  // Calculate totals
  const totalItems = cartitem.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartitem.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <Header />
      <div className='container mt-5'>
        <h3 className='text-center' style={{ fontFamily: "Dancing Script", color: "green" }}>My Cart</h3>

        <Table striped bordered hover className='text-center'>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {cartitem.length > 0 ? (
              cartitem.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={`${SERVER_URL}/uploads/${item.itemImage}`}
                      width={50}
                      height={50}
                      alt=""
                    />
                  </td>

                  <td>{item.itemName}</td>

                  <td>{item.price}/-</td>

                  <td>
                    <button
                      className='btn text-light fw-bold'
                      style={{ backgroundColor: "red" }}
                      onClick={() => dispatch(decrementQuantity(item._id))}
                    >-</button>

                    <span className='fw-bold mx-2'>{item.quantity}</span>

                    <button
                      className='btn text-light fw-bold'
                      style={{ backgroundColor: "green" }}
                      onClick={() => dispatch(incrementQuantity(item._id))}
                    >+</button>
                  </td>

                  <td>{item.price * item.quantity}/-</td>

                  <td>
                    <button
                      className='btn text-danger'
                      onClick={() => dispatch(removeFromCart(item._id))}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-danger fw-bold">Cart is Empty</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <div className='container mt-5 align-items-center justify-content-center d-flex flex-column'>
        <h4 style={{ fontFamily: "Libartinus Mono" }}>Cart Totals</h4>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <h4>Total Items: <span className='text-danger'>{totalItems}</span></h4>
            <h4>Total Amount: <span className='text-danger'>{totalAmount}</span></h4>

            <Link to={'/order'}>
              <button className='btn text-light' style={{ backgroundColor: "green" }}>
               Proceed To order
              </button>
            </Link>

            
          </Card.Body>
        </Card>
         <Link to={'/menu'}>
              <button className='btn text-light mt-3 fw-bold' style={{ backgroundColor: "orange" }}>
               Order More
              </button>
            </Link>
      </div>
    </>
  );
}

export default Cart;
