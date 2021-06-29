/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link to="/cart">
              <Nav.Link><i className="fas fa-shopping-cart p-1"></i>Cart</Nav.Link>
            </Link>
            <Link to="/login">
              <Nav.Link><i className="fas fa-user p-1"></i>Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
      </header>
    )
}

export default Header
