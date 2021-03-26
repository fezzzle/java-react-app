import React from 'react'
import { Navbar } from './components/'
import { EmployeeListContainer, AddEmployeeContainer, EditEmployeeContainer } from './containers/'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path={['/', '/employees']} component={EmployeeListContainer} />
      <Route exact path="/editemployee" component={EditEmployeeContainer} />
      <Route path="/addemployee" component={AddEmployeeContainer} />
    </>
  )
}

export default App
