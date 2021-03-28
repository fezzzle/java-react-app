/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const IsLoadingContext = createContext()
export const IsLoadingActionsContext = createContext()

export const IsLoadingProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)


  return (
    <IsLoadingContext.Provider value={isLoading}>
      <IsLoadingActionsContext.Provider value={setIsLoading}>
        {props.children}
      </IsLoadingActionsContext.Provider>
    </IsLoadingContext.Provider>
  )
}