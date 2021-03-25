import React, { useEffect, useState } from 'react'
import { EmployeeList } from '../components'
import apiDataService from '../services/api-service'

const EmployeeListContainer = () => {
  const [employees, setEmployees] = useState([])

  useEffect(async () => {
    const result = await apiDataService.getAll()
    setEmployees(result.data)
  }, [apiDataService.getAll])

  console.log(employees)
  return (
    <EmployeeList />
  )
}

export default EmployeeListContainer