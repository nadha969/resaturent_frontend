import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'




function Sidebar() {

const navigate=useNavigate()
  
const handleLogout=()=>{
  sessionStorage.clear()
  navigate('/')
}
  return (
    <>
   <div className="container"style={{ backgroundColor: "rgba(153, 177, 65, 1)",height: "100vh", color: "white"}}>
  <div className='d-flex align-items-center justify-content-center'>
    <h4 className='align-items-center justify-content-center d-flex pt-4' style={{fontFamily:"Libartinus Mono",backgroundColor:"transparent"}}>Admin Panel</h4>
    <button onClick={handleLogout} className='btn  text-light mt-3 ms-3 fw-bold'><i class="fa-solid fa-right-from-bracket"></i></button>
  </div>
  <hr/>

  
   <div className='border border-light container mt-3' style={{width:"250px"}}>
  <div className='d-flex  align-items-center justify-content-center text-light p-2'>
   <Link to={'/admin'}><button className='btn text-light fw-bold border-0' style={{fontSize:"18px"}}>Admin Dashboard</button></Link> 
   </div>
  </div>

  <div className='border border-light container mt-3' style={{width:"250px"}}>
   <div className='d-flex  align-items-center justify-content-center text-light p-2'>
   <Link to={'/admin-add'}><button className='btn text-light fw-bold border-0' style={{fontSize:"18px"}}><i class="fa-solid fa-plus pe-2" ></i>Add Items</button></Link> 
   </div>
  </div>

   <div className='border border-light container mt-3' style={{width:"250px"}}>
  <div className='d-flex  align-items-center justify-content-center text-light p-2'>
   <Link to={'/admin-list'}><button className='btn text-light fw-bold border-0' style={{fontSize:"18px"}}><i class="fa-solid fa-list pe-4"></i>List Items</button></Link> 
   </div>
  </div>

   <div className='border border-light container mt-3' style={{width:"250px"}}>
  <div className='d-flex  align-items-center justify-content-center text-light p-2'>
   <Link to={'/admin-order'}><button className='btn text-light fw-bold border-0' style={{fontSize:"18px"}}><i class="fa-solid fa-circle-check pe-4"></i>Orders</button></Link> 
   </div>
  </div>

  

  

</div>
    </>
  )
}

export default Sidebar
