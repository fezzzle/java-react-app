import React, { useEffect, useState } from 'react'
import { EmployeeList } from '../components'
import apiDataService from '../services/api-service'
import { useIsLoadingActionsContext } from '../IsLoadingContext'
import GlobalSpinner from '../components/GlobalSpinner/GlobalSpinner'

const EmployeeListContainer = () => {
  const [employees, setEmployees] = useState()
  const setIsLoading = useIsLoadingActionsContext()
  
  const deleteRecords = () => {
    apiDataService
      .deleteAll()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setIsLoading(true)
    // Just for testing if spinner works
    setTimeout(() => {
      apiDataService
        .getAll()
        .then(res => setEmployees(res.data))
        .catch(err => {console.log(err)})
    }, 1000)
    setIsLoading(false)
  }, [setIsLoading])

  return (
    <>
      {employees ? (<EmployeeList employees={employees} deleteRecords={deleteRecords}/>) : (<GlobalSpinner />)}
    </>
  )
}


export default EmployeeListContainer