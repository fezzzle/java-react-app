import propTypes from 'prop-types'
import React, { useState, useEffect, useContext } from 'react'
import { EditEmployee } from '../components/'
import apiDataService from '../services/api-service'
import { IsLoadingContext } from '../IsLoadingContext'

const EditEmployeeContainer = (props) => {
  const [employee, setEmployee] = useState()
  const {isLoading, setIsLoading} = useContext(IsLoadingContext)


  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const result = await apiDataService.get(props.match.params.id)
      const data = await result.data
      // apiDataService
      //   .get(props.match.params.id)
      //   .then(res => setEmployee(res.data))
      //   .catch(err => {console.log(err)})
      setEmployee(data)
      console.log('IS SOMETHING LOADING? ', isLoading)
      setIsLoading(false)
    })()
  }, [setIsLoading])

  return (
    <>
      <EditEmployee employee={employee}/>
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