import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import { TodoService } from '../services/TodoService'
import { LocalStorageTodoService } from '../services'
import { GenericProviderProps } from '../types'

export interface ServicesContextInterface {
  data: TodoService
}

const services: ServicesContextInterface = {
  data: LocalStorageTodoService()
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
