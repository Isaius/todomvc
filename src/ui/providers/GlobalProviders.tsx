import PropTypes from 'prop-types'

import { GenericProviderProps } from './GenericProviderProps'
import ServicesProvider from './ServicesProvider'
import TodoProvider from './TodoProvider'

const GlobalProviders = ({ children }: GenericProviderProps) => (
  <ServicesProvider>
    <TodoProvider>{children}</TodoProvider>
  </ServicesProvider>
)

GlobalProviders.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalProviders
