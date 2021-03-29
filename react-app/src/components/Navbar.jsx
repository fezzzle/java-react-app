import React from 'react'
import { Navbar as BaseNavbar, Nav, NavItem, NavLink } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <BaseNavbar color="dark">
      {/* <Nav className="navbar"> */}
      <Nav>
        <NavItem>
          <NavLink style={{color: 'white'}} tag={RRNavLink} to="/addemployee" exact>Add</NavLink>
        </NavItem>
        <NavItem >
          <NavLink style={{color: 'white'}} tag={RRNavLink} to="/employees" exact>Employees</NavLink>
        </NavItem>
      </Nav>
    </BaseNavbar>
  )
}

export default Navbar