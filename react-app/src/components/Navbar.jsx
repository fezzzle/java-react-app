import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Navbar = () => {
  return (
    <>
      <Nav className="bg-dark">
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