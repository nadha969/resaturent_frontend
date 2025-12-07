import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Landing from './Pages/Landing'
import Menu from './Pages/Menu'
import About from './Components/About'
import Order from './Pages/Order'
import Cart from './Pages/Cart'
import Auth from './Pages/Auth'
import Admin from './Admin-manage/Admin'
import Add from './Admin-manage/Add'
import Admin_order from './Admin-manage/Admin_orders'
import List from './Admin-manage/List'
import { ToastContainer } from 'react-toastify'
import ManageCustomers from './Admin-manage/ManageCustomers'
import Myorders from './Pages/Myorders'
import Pnf from './Components/Pnf'



function App() {
  
  return (
    <>
    
     <Routes >
      <Route path={'/'} element={<Landing/>}></Route>
      <Route path={'/menu'} element={<Menu/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
      <Route path={'/order'} element={<Order/>}></Route>
      <Route path={'/cart'} element={<Cart/>}></Route>
      <Route path={'/login'} element={<Auth/>}/>
      <Route path={'/register'} element={<Auth insideRegister={true}/>}/>
      <Route path={'/admin'} element={<Admin></Admin>}></Route>
      <Route path={'/admin-add'} element={<Add></Add>}></Route>
      <Route path={'/manage-customers'} element={<ManageCustomers></ManageCustomers>}></Route>
      <Route path={'/admin-order'} element={<Admin_order></Admin_order>}></Route>
      <Route path={'/admin-list'} element={<List></List>}></Route>
      <Route path={'/order-summary'} element={<Myorders></Myorders>}></Route>
      <Route path={'/*'} element={<Pnf/>}/>


     </Routes>
     {/* <Footer/> */}

     <ToastContainer
position="top-right"
autoClose={4000}
theme="light"

/>
    </>
  )
}

export default App
