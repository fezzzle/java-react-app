import propTypes from 'prop-types'
import React, { createContext, useState, useContext } from 'react'

const IsLoadingContext = createContext()
const IsLoadingActionsContext = createContext()

/* eslint-disable */
const useContextFactory = (name, context) => {
  return () => {
    const ctx = useContext(context)
    if (ctx === undefined) {
      throw new Error(`use${name}Context must be used withing a ${name}ContextProvider.`)
    }
    return ctx
  }
}
/* eslint-enable */

export const useIsLoadingContext = useContextFactory('IsLoadingContext', IsLoadingContext)
export const useIsLoadingActionsContext = useContextFactory('IsLoadingActionsContext', IsLoadingActionsContext)


export const IsLoadingProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <IsLoadingContext.Provider value={isLoading}>
      <IsLoadingActionsContext.Provider value={setIsLoading}>
        {children}
      </IsLoadingActionsContext.Provider>
    </IsLoadingContext.Provider>
  )
}


IsLoadingProvider.propTypes = {
  children: propTypes.object.isRequired
}
