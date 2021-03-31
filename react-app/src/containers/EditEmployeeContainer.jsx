import propTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { EditEmployee } from '../components/'
import apiDataService from '../services/api-service'
import { useIsLoadingActionsContext } from '../IsLoadingContext'
import GlobalSpinner from '../components/GlobalSpinner'

const EditEmployeeContainer = props => {
  const [employee, setEmployee] = useState()
  const setIsLoading = useIsLoadingActionsContext()

  const onSubmit = (e, firstname, lastname, telephone, hireDate, checked) => {
    e.preventDefault()
    const { email } = e.target.elements

    apiDataService
      .update(employee.id, {
        firstname: firstname,
        lastname: lastname,
        email: email.value,
        telephone: telephone,
        hireDate: hireDate,
        active: checked,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setIsLoading(true)
    apiDataService
      .get(props.match.params.id)
      .then(res => {
        setEmployee(res.data)
      })
      .catch(err => console.log(err))
    setIsLoading(false)
  }, [setIsLoading])

  return (
    <>
      {employee ? (
        <EditEmployee employee={employee} onSubmit={onSubmit} />
      ) : (
        <GlobalSpinner />
      )}
    </>
  )
}

EditEmployeeContainer.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
}

export default EditEmployeeContainer
