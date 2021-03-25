import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Navbar = () => {
  return (
    <>
      <Nav className="navbar">
        <NavItem>
          <NavLink href="#">Add</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Employees</NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default Navbar