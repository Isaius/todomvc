import { Todo } from '../types'

export interface PersistenceInterface {
  store: (todos: Todo[]) => void
  retrieve: () => Todo[]
}

export interface ServicesContextInterface {
  data: PersistenceInterface
}
