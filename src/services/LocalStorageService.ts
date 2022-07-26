import { TodoService } from './TodoService'

const todoRootKey = 'todo_root'

const LocalStorageTodoService = (): TodoService => {
  const store: TodoService['store'] = async (data) => {
    localStorage.setItem(todoRootKey, JSON.stringify(data))
  }

  const retrieve: TodoService['retrieve'] = async () => {
    return JSON.parse(localStorage.getItem(todoRootKey) || '') || []
  }

  return {
    store,
    retrieve,
  }
}

export default LocalStorageTodoService
