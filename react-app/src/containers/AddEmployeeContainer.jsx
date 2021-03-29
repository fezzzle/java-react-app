import React from 'react'
import { AddEmployee } from '../components/'
import apiDataService from '../services/api-service'


const AddEmployeeContainer = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    const { firstname, lastname, email, telephone, hireDate} = e.target.elements
    console.log(hireDate.value)
    
    apiDataService.create(
      {
        firstname: firstname.value, 
        lastname: lastname.value, 
        email: email.value, 
        telephone: telephone.value,
        hireDate: hireDate.value,
        active: true
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <AddEmployee onSubmit={onSubmit}/>
    </>
  )
}

export default AddEmployeeContainer