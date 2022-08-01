import { Todo } from '../types'

export interface TodoService {
  store: (todos: Todo[]) => Promise<void>
  retrieve: () => Promise<Todo[]>
}
