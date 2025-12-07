import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Menucard() {
  return (
    <>
       <Card style={{ width: '16rem' ,borderRadius:"10px",height:'20rem'}}>
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/24/04/47/360_F_224044706_GKydWTrihWdUaMyjxCSUZYsnAUVHgVKm.jpg" width={100} height={200}/>
      <Card.Body className='text-center'>
        
        <div className='d-flex justify-content-between' style={{fontFamily:"Barlow"}}>
            <h5>Pasta</h5>
            <h5>₹299</h5>
        </div>
       <Link to={'/cart'}> <button className='btn text-light'  style={{backgroundColor:"green",fontWeight:"bold"}}>Add to cart</button></Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Menucard
