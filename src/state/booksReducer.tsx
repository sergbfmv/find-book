import { booksAPI } from '@/api/api'
import { Dispatch } from 'redux'

const initialState: BooksType = {
  items: [],
  totalItems: null,
}

export const booksReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.books
    default:
      return state
  }
}

export const setBooks = (books: BooksType) => ({ books, type: 'SET_BOOKS' }) as const

export const searchBooks = (title: string) => {
  return async (dispatch: ThunkDispatch) => {
    try {
      const res = await booksAPI.getBooks(title)

      dispatch(setBooks(res.data)) // Assuming the data structure from Google Books API
    } catch (error) {
      // Handle error, e.g., dispatch(getBooksFailure(error.message))
    }
  }
}

export type BookType = {
  id: string
  volumeInfo: VolumeInfo
}

export type VolumeInfo = {
  authors: string[]
  categories: string
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  title: string
}

export type BooksType = {
  items: BookType[]
  totalItems: null | number
}

type SetBooksActionType = ReturnType<typeof setBooks>

type ActionsType = SetBooksActionType
type ThunkDispatch = Dispatch<ActionsType>
