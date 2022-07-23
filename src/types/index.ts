import { ReactNode } from 'react'

type Todo = {
  title: string
  isCompleted: boolean
  creationDate: string
}

type GenericProviderProps = {
  children: ReactNode
}

export { type Todo, type GenericProviderProps }
