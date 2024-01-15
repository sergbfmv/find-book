import { NavLink } from 'react-router-dom'

import { BookType } from '@/state/booksReducer'

const BookCard = (book: BookType) => {
  return (
    <NavLink className={'book-card'} to={'/book'}>
      <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks?.smallThumbnail || ''} />
      <div>
        <h4>Title: {book.volumeInfo.title}</h4>
        <p>Category: {book.volumeInfo.categories?.[0] || 'Unknown'}</p>
        <p>Authors: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
        {/* Add other details as needed */}
      </div>
    </NavLink>
  )
}

export default BookCard
