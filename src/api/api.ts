import axios from 'axios'

const API_KEY = 'AIzaSyChRwqJCQtni2qAT-qjtV0i4tWrISfVYq8'

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
  params: {
    key: API_KEY,
  },
})

export const booksAPI = {
  getBooks: (query: string) => {
    return instance.get('/?', {
      params: {
        q: query,
      },
    })
  },
}
