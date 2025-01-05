
import { ChefHat } from 'lucide-react'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
     <Navbar expand="lg" style={{ backgroundColor: 'white' }}>
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand href="#home" style={{fontSize:'25px',fontWeight:'bold',display: 'flex', 
            alignItems: 'center',gap:'5px' }}><ChefHat  style={{ width: '34px', height: '34px',color:'rgb(237, 140, 31)' }}></ChefHat> Recipe Master</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3">
            <Nav.Link  href="#home" style={{color:'black'}} ><Link to={'/home'} style={{textDecoration:'none', color:'black'}}><i class="fa-solid fa-house me-2"></i>Home</Link></Nav.Link>
            <Nav.Link href='#link'><Link to={'/details'} style={{textDecoration:'none', color:'black'}}><i class="fa-solid fa-folder-open me-2"></i>Details</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={'/favourite'} style={{textDecoration:'none', color:'black'}}><i class="fa-regular fa-heart me-2"></i>Favorites</Link></Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header