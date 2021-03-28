import React, {useContext} from 'react'
import {IsLoadingContext} from '../../IsLoadingContext'
import { Spinner as BaseSpinner } from 'reactstrap'

const GlobalSpinner = () => {
  const isLoading = useContext(IsLoadingContext)
  
  return isLoading ? (
    <div
      className="d-flex justify-content-center align-items-center"
      data-testid="spinner"
    >
      <BaseSpinner type="grow" color="primary" />
    </div>
  ) : null
}

export default GlobalSpinner