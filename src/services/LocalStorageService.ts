import { Todo } from '../types'
import { PersistenceInterface } from './interfaces'

const todoRootKey = 'todo_root'

const LocalStorageProvider = (): PersistenceInterface => {
  const store = (data: Todo[]) => {
    localStorage.setItem(todoRootKey, JSON.stringify(data))
  }

  const retrieve = (): Todo[] => {
    return JSON.parse(localStorage.getItem(todoRootKey) || '') || []
  }

  return {
    store,
    retrieve,
  }
}

export default LocalStorageProvider
