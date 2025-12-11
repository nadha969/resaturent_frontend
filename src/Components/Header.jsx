import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Header() {

  const token = sessionStorage.getItem("token")
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <Navbar expand="lg">
      <Container>

        <i className="fa-solid fa-bowl-food fs-3 me-2" style={{color:"green"}}></i>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{fontFamily:"Dancing Script",color:"green",fontSize:"30px"}}>
          The Food Lounge
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='ms-3 text-decoration-none text-dark fw-bold'>Home</Link>
          
            {token && (
              <Link to="/menu" className='ms-3 text-decoration-none text-dark fw-bold'>Menu</Link>
            )}
            <Link to="/about" className='ms-3 text-decoration-none text-dark fw-bold'>About Us</Link>
          </Nav>

          {/* User Dropdown */}
          <Dropdown className="ms-4">
            <Dropdown.Toggle variant="none" className="border-0">
              {!token ? (
                <i className="fa-solid fa-user fs-5"></i>   
              ) : (
                <i className="fa-solid fa-circle-user fs-3 text-success"></i>
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              {!token && (
                <>
                  <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
                </>
              )}

              {token && (
                <>
                  <Dropdown.Item as={Link} to="/cart">Cart</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/order-summary">Order Summary</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header
