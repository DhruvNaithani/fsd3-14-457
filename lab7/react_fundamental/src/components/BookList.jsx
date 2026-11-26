import React from 'react'
import books from '../data'
import Book from './Book'

const BookList = () => {
  return (
    <div>
      {books.map((item)=><Book {...item}/>)}
    </div>
  )
}

export default BookList
