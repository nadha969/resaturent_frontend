import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
       
      <div className='row shadow p-5 mt-3'>
        <div className='col-lg-3 ps-5'>
          <div className='d-flex text-light'>
            <h3 className='ps-2' style={{fontFamily:'Dancing Script',color:"green"}}>The Food Lounge</h3>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, praesentium iure. Vero doloremque quaerat molestiae odio,
             beatae voluptas enim illum non.</p>
        </div>
        <div className='col-lg-3 ps-5'>
          <h5 style={{color:"green"}}>Company</h5>
          <Link className='text-decoration-none  d-block text-dark fw-bold' to={'/'}>Home</Link>
           <Link className='text-decoration-none d-block text-dark fw-bold' to={'/menu'}>Menu</Link>
           <Link className='text-decoration-none d-block text-dark fw-bold' to={'/about'}>About</Link>

        
        </div>
        <div className='col-lg-3'>
          <h5  style={{fontFamily:"Libartinus Mono",color:"green"}}>Opening Hours</h5>
          <h6>Monday -Saturday</h6>
          <h6>09AM-09PM</h6><br />
          <h6>Sunday</h6>
          <h6>10AM-10PM</h6>
        </div>
        <div className='col-lg-3'>
          <h5 style={{color:"green"}}>Contact Us</h5>
          <div>
            <h6><i class="fa-solid fa-location-dot fs-5 mt-2" style={{color:"green"}}></i> 123 street,Newyork,USA</h6>
            <h6><i class="fa-solid fa-phone fs-5" style={{color:"green"}}></i> +012 3456789</h6>
            <h6><i class="fa-solid fa-envelope-open fs-5" style={{color:"green"}}></i> thefoodlounge@gmail.com</h6>
          </div>
         
          <div className='fs-2  d-flex'>
          
           <div  className='ps-2' style={{color:"green"}}>
            <i class="fa-brands fa-facebook"></i>
           </div>
         <div  className='ps-2' style={{color:"green"}}>
           <i class="fa-brands fa-twitter"></i>
         </div>
          <div  className='ps-2' style={{color:"green"}}>
            <i class="fa-brands fa-instagram"></i>
          </div>
   
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Footer
