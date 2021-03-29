import propTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { EditEmployee } from '../components/'
import apiDataService from '../services/api-service'
import { useIsLoadingActionsContext } from '../IsLoadingContext'
import GlobalSpinner from '../components/GlobalSpinner/GlobalSpinner'

const EditEmployeeContainer = (props) => {
  const [employee, setEmployee] = useState()
  const setIsLoading = useIsLoadingActionsContext()

  const onSubmit = (e, hireDate, checked) => {
    e.preventDefault()
    const { firstname, lastname, email, telephone } = e.target.elements
    // console.log(firstname.value, lastname.value, email.value, telephone.value, hireDate, checked)
    console.log('hireDate is: ', hireDate)

    apiDataService
      .update(employee.id, {
        firstname: firstname.value, 
        lastname: lastname.value, 
        email: email.value, 
        telephone: telephone.value, 
        hireDate: hireDate, 
        active: checked
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      apiDataService
        .get(props.match.params.id)
        .then(res => {
          console.log(res.data)
          setEmployee(res.data)})
        .catch(err => console.log(err))
    }, 1000)
    setIsLoading(false)
  }, [setIsLoading])

  return (
    <>
      {employee ? (<EditEmployee employee={employee} onSubmit={onSubmit}/>) : (<GlobalSpinner />)}
    </>
  )
}

EditEmployeeContainer.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    })
  }).isRequired
}

export default EditEmployeeContainer