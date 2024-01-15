import { useState } from 'react'

import { searchBooks } from '@/state/booksReducer'
import { useAppDispatch, useAppSelector } from '@/state/store'

import BookCard from './BookCard'

const SearchBooks = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector(state => state.books)
  const [queryValue, setQueryValue] = useState('')

  const handleSearch = () => {
    dispatch(searchBooks(queryValue))
  }

  return (
    <div>
      <input
        onChange={e => setQueryValue(e.target.value)}
        onKeyDown={e => {
          e.key === 'Enter' && handleSearch()
        }}
        placeholder={'Search for books...'}
        type={'text'}
      />
      <button onClick={handleSearch}>Find book</button>

      {/*{books.loading && <p>Loading...</p>}*/}

      {/*{books.error && <p>Error: {books.error}</p>}*/}

      {books.items.length > 0 && (
        <div className={'booksList'}>
          <p>Found {books.totalItems} books</p>
          {books.items.map(book => (
            <BookCard id={book.id} key={book.id} volumeInfo={book.volumeInfo} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBooks
