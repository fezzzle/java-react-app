import propTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { EditEmployee } from '../components/'
import apiDataService from '../services/api-service'
import { useIsLoadingActionsContext } from '../IsLoadingContext'
import GlobalSpinner from '../components/GlobalSpinner/GlobalSpinner'

const EditEmployeeContainer = (props) => {
  const [employee, setEmployee] = useState()
  const setIsLoading = useIsLoadingActionsContext()


  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      apiDataService
        .get(props.match.params.id)
        .then(res => setEmployee(res.data))
        .catch(err => console.log(err))
    }, 1000)
    setIsLoading(false)
  }, [setIsLoading])

  return (
    <>
      {employee ? (<EditEmployee employee={employee}/>) : (<GlobalSpinner />)}
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