import React, { useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { toast } from 'react-toastify'

function Auth({insideRegister}) {

  // spinner
  const [userData,setUserData]=useState({name:"",email:"",password:""})
  console.log(userData);
  const navigate=useNavigate()
  //for register
 const handleRegister = async () => {
    const { name, email, password } = userData

    if (name && email && password) {
      try {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Welcome ${result.data.name}...Please login to explore our menu`)
          navigate('/login')
          setUserData({ name:"", email:"", password:"" })
        }
        else {
          if (result.status == 406) {
            toast.error(result.response.data)
            setUserData({ name: "", email: "", password: "" })

          }
        }


      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("Fill the form completely")
    }

  }

  // login 
 const handlelogin = async () => {
    if (userData.email && userData.password) {
      //api call
      try {

        const result = await loginAPI(userData)
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          const userInfo = JSON.parse(sessionStorage.getItem('user'))
          console.log(userInfo.userType);
          sessionStorage.setItem("token", result.data.token)
       
          if (userInfo.userType == 'admin') {
            navigate('/admin')
          }
          else if (userInfo.userType == 'User') {
            navigate('/menu')
          }
          setUserData({ name: "", email: "", password: "" })

        }
        else {
          if (result.status == 404) {
            toast.error(result.response.data)
            setUserData({ name: "", email: "", password: "" })
          }
        }


      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("Enter Email and Password ")
    }


  }
  
  
  return (
    <>
    <Header/>
      <div className='align-items-center justify-content-center d-flex vh-100'>
        <div className='shadow p-5'>
         <div className='d-flex'>
            <i class="fa-solid fa-bowl-food fs-4 me-2" style={{color:"green"}}></i>
          <h3 style={{fontFamily:"Dancing script",color:"green"}}>The Food Lounge Restaurent</h3>
         </div>
          <p className='text-danger' style={{fontSize:"13px"}}>Sign {insideRegister?'Up':'In'}  to your account</p>
        
{   insideRegister&&      
   <input onChange={(e)=>setUserData({...userData,name:e.target.value})} type="text" placeholder='User Name' className='form-control mt-3' />
}            <input onChange={(e)=>setUserData({...userData,email:e.target.value})} type="text" placeholder='Enter email' className='form-control mt-3' />
            <input onChange={(e)=>setUserData({...userData,password:e.target.value})} type="password" placeholder='Enter password' className='form-control mt-3' />
{    insideRegister?     <button type="button" onClick={handleRegister} className='btn w-100 text-light fw-bold mt-3' style={{backgroundColor:"green"}}>Sign Up</button>:
  <button  type='button' onClick={handlelogin} className='btn w-100 text-light fw-bold mt-3' style={{backgroundColor:"green"}}>Sign In     
  
</button>
}       
{  insideRegister? <p className='mt-3'>Already have an account <Link to={'/login'}>Login</Link></p>
   :<p className='mt-3'>Don't  have an account <Link to={'/register'}>Register</Link></p>
}  
      
        </div>
      </div>
    </>
  )
}

export default Auth
