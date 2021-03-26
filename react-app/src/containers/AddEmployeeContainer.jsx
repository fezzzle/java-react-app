import React from 'react'
import { AddEmployee } from '../components/'
// import create from '../services/api-service'

const AddEmployeeContainer = () => {



  const onSubmit = (e) => {

    const { firstname, lastname, email, telephone, hireDate } = e.target.elements
    console.log({firstname: firstname.value, lastname: lastname.value, email: email.value, telephone: telephone.value, hireDate: hireDate.value})
    e.preventDefault()
  }

  return (
    <>
      <AddEmployee onSubmit={onSubmit}/>
    </>
  )
}

export default AddEmployeeContainer