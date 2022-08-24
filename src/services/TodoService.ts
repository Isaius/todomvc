import { Todo } from '../domain/Todo'

export interface TodoService {
  store: (todos: Todo[]) => Promise<void>
  retrieve: () => Promise<Todo[]>
}
