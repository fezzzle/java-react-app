import React from 'react'
import { Navbar as BaseNavbar, Nav, NavItem, NavLink } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <BaseNavbar>
      <Nav className="navbar">
        <NavItem>
          <NavLink tag={RRNavLink} to="/addemployee" exact>Add</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/employees" exact>Employees</NavLink>
        </NavItem>
      </Nav>
    </BaseNavbar>
  )
}

export default Navbar