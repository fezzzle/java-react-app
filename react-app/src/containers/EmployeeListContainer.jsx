import React, { useEffect, useState } from 'react'
import { EmployeeList } from '../components'
import apiDataService from '../services/api-service'
import { useIsLoadingActionsContext } from '../IsLoadingContext'
import GlobalSpinner from '../components/GlobalSpinner'

const EmployeeListContainer = () => {
  const [employees, setEmployees] = useState()
  const setIsLoading = useIsLoadingActionsContext()

  const deleteRecords = () => {
    const confirmAction = confirm(
      'Do you really wish to delete all the records?',
    )
    if (!confirmAction) {
      alert('Not deleted')
    } else {
      apiDataService
        .deleteAll()
        .then(res => {
          window.location.reload()
          console.log(res)
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    setIsLoading(true)
    apiDataService
      .getAll()
      .then(res => setEmployees(res.data))
      .catch(err => {
        console.log(err)
      })
    setIsLoading(false)
  }, [setIsLoading])

  return (
    <>
      {employees ? (
        <EmployeeList employees={employees} deleteRecords={deleteRecords} />
      ) : (
        <GlobalSpinner />
      )}
    </>
  )
}

export default EmployeeListContainer
