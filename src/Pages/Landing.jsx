import React from 'react'
import './landing.css'
import pasta from '../assets/pasta.png'
import { Card } from 'react-bootstrap'
import Footer from '../Components/Footer'
import cheflogoo from '../assets/cheflogoo.png'
import burger from '../assets/burger.png'
import noodles from '../assets/noodles.png'
import pizza from '../assets/pizza.png'
import rols from '../assets/rols.png'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'




function Landing() {
  return (
    <>
    <Header/>
      {/* section 1 */}
      <div className='rows d-flex mt-5 container pt-3'>
        <div className='col-lg-6'>
            <h1 style={{color:'green',fontFamily:"Libartinus Mono",textAlign:"center"}}>THE FOOD LOUNGE</h1>
            <h2 className='text-center' style={{fontFamily:"Dancing Script",color:'green'}}>Restaurent</h2>
             <h5 className='mt-5' style={{fontFamily:"Libartinus Mono"}}>Order Your Delicious Food</h5>
          <p className='mt-2 fs-5' style={{fontFamily:"Dancing Script"}}>We believe that every meal tells a story — a story of heritage, creativity, and passion. That’s why we carefully select our ingredients, blend them with authentic flavors, and present them beautifully to create a complete culinary experience.</p><br />
         <Link to={'/login'}> <button className='btn text-light' style={{backgroundColor:"green"}}>Explore Our Menu</button></Link>

        </div>

        <div className="col-lg-6 ps-5" >
            <div className='setimg'> 
                <img src={pasta} alt="" width={200} />

            </div>
        </div>
      </div>
        {/* section 2 */}
  <div className="container mt-5">
  <div className="row">

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100 h-100">
        <Card.Body>
          <Card.Title className="text-center">
            <img src={cheflogoo} alt="" width={100} />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">Master Chef</Card.Subtitle>
          <Card.Text className="text-center">
            Master Chef features skilled chefs crafting tasty, high-quality dishes
            for a delightful dining experience.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100 h-100">
        <Card.Body>
          <Card.Title className="text-center">
            <i className="fa-solid fa-utensils fs-1 pt-3"></i>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center pt-3">Quality Food</Card.Subtitle>
          <Card.Text className="text-center">
            Quality Food offers fresh, delicious, and hygienic dishes made with the finest ingredients
            to give you the best taste and experience.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100 h-100">
        <Card.Body>
          <Card.Title className="text-center">
            <i className="fa-solid fa-cart-shopping fs-1 pt-2"></i>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">Online Orders</Card.Subtitle>
          <Card.Text className="text-center">
            Orders lets you easily choose dishes, place them quickly, and track delivery in real time
            for a smooth and convenient experience.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100 h-100">
        <Card.Body>
          <Card.Title className="text-center">
            <i className="fa-solid fa-bell-concierge fs-1 pt-3"></i>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center pt-3">Services</Card.Subtitle>
          <Card.Text className="text-center">
            Services provide fast delivery, easy ordering, and friendly support to ensure every customer
            enjoys a smooth, satisfying experience.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  </div>
</div>

      {/* section 3 */}

     <div className="text-center mt-5">
  <h3 style={{ color: "green", fontFamily: "Dancing script" }}>
    Our Popular Food Items
  </h3>

  <div className="row container mx-auto">

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100">
        <img src={burger} alt="" className="img-fluid" />
        <Card.Body>
          <Card.Title style={{ fontFamily: "Libartinus Mono" }}>Burger</Card.Title>
          <Card.Text>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100">
        <img src={rols} alt="" className="img-fluid" />
        <Card.Body>
          <Card.Title style={{ fontFamily: "Libartinus Mono" }}>Rolls</Card.Title>
          <Card.Text>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100">
        <img src={noodles} alt="" className="img-fluid" />
        <Card.Body>
          <Card.Title style={{ fontFamily: "Libartinus Mono" }}>Noodles</Card.Title>
          <Card.Text>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
      <Card className="w-100">
        <img src={pizza} alt="" className="img-fluid" />
        <Card.Body>
          <Card.Title style={{ fontFamily: "Libartinus Mono" }}>Pizza</Card.Title>
          <Card.Text>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star fs-4" style={{ color: "#FFD43B" }}></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  </div>
</div>

     {/* section 4 */}

  <div className="container mt-5 pt-5">
  <div className="row d-flex align-items-center">

    {/* Image Section */}
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4 text-center">
      <img
        src="https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
        className="img-fluid"
        style={{ borderRadius: "20px", maxWidth: "100%" }}
        alt=""
      />
    </div>

    {/* Text Section */}
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
      <h3 style={{ fontFamily: "Libartinus Mono" }}>Why People Choose Us?</h3>
      <p style={{ fontFamily: "Barlow", textAlign: "justify" }}>
        People choose us for our delicious food, fresh ingredients, and 
        excellent service. Every dish is prepared with care and authentic 
        flavors to give a memorable dining experience. Our chefs are passionate 
        about cooking and ensure that every meal is perfectly made and beautifully 
        presented. We focus on taste, freshness, and customer satisfaction, making 
        every visit enjoyable and every bite delightful.
      </p>
    </div>

  </div>
</div>

         <Footer></Footer>
    </>
  )
}

export default Landing
