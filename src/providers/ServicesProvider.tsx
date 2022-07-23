import { createContext, useContext, ReactNode } from 'react'
import PropTypes from 'prop-types'

import { ServicesContextInterface } from '../services/interfaces'
import { PersitenceProvider } from '../services'
import { GenericProviderProps } from '../types'

const services = {
  data: PersitenceProvider(),
}

const ServicesContext = createContext<ServicesContextInterface | null>(null)

const ServicesProvider = ({ children }: GenericProviderProps) => {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  )
}

ServicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useServices = () => {
  const servicesContext = useContext(ServicesContext)

  if (!servicesContext) {
    throw new Error(
      'servicesContext was called without being nested in ServicesProvider'
    )
  }

  return servicesContext
}

export default ServicesProvider
