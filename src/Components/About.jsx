import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
  return (
    <>
    <Header/>
      <div className='mt-5 row '>
        <div className='col-lg-6 ps-5'>
            <h3  style={{color:'green',fontFamily:"Dancing Script"}}>About as</h3>
            <p style={{fontFamily:"Barlow",textAlign:"justify"}}>
              The Food Loung is a modern restaurant and food ordering app where taste meets convenience and comfort. We’re passionate about serving freshly prepared meals that bring joy to every bite. Each dish is crafted with the finest ingredients, combining authentic flavors with a touch of creativity.
               Our restaurant offers a cozy and welcoming atmosphere where you can relax and enjoy delicious food with family and friends. Whether you’re craving a hearty meal, a light snack, or a refreshing drink, our menu has something for every mood and moment.
                We believe that good food creates good memories. That’s why The Food Loung is more than just a place to eat — it’s an experience filled with flavor, care, and satisfaction.
               With our easy-to-use online ordering system, you can explore our menu, customize your dishes, and enjoy quick delivery right to your doorstep.
                At The Food Loung, every meal is made with love, served with passion, and delivered with a smile.
            </p>
        </div>
        <div className='col-lg-6 ps-5'>
          <img src="https://static.vecteezy.com/system/resources/previews/046/860/148/non_2x/chef-character-3d-cartoon-style-isolated-on-transparent-background-png.png" alt="" width={320} />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
