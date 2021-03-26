import React, { useEffect, useState } from 'react'
import { EmployeeList } from '../components'
import apiDataService from '../services/api-service'

const EmployeeListContainer = () => {
  const [employees, setEmployees] = useState([])
  
  const deleteRecords = () => {
    apiDataService
      .deleteAll()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(async () => {
    const result = await apiDataService.getAll()
    setEmployees(result.data)
  }, [apiDataService.getAll])

  console.log(employees)
  return (
    <EmployeeList employees={employees} deleteRecords={deleteRecords}/>
  )
}

export default EmployeeListContainer