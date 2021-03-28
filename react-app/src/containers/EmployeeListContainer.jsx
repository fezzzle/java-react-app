import React, { useEffect, useState, useContext } from 'react'
import { EmployeeList } from '../components'
import apiDataService from '../services/api-service'
import { IsLoadingActionsContext } from '../IsLoadingContext'

const EmployeeListContainer = () => {
  const [employees, setEmployees] = useState([])
  const setIsLoading = useContext(IsLoadingActionsContext)
  
  const deleteRecords = () => {
    apiDataService
      .deleteAll()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setIsLoading(true)
    apiDataService.getAll()
      .then(res => {
        setInterval(() => {
          setEmployees(res.data)
          setIsLoading(false)
        }, 4000)
      })
      .catch(err => {console.log(err)})
  }, [setIsLoading])

  console.log(employees)
  return (
    <>
      <EmployeeList employees={employees} deleteRecords={deleteRecords}/>
    </>
  )
}

export default EmployeeListContainer