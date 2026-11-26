import React from 'react'
import BookList from './components/BookList'
// component : any js function rteiurns html 
// component first character capital letter

const App = () => {
  
  return (
    <div>
      <h1>hello world</h1>
      {/* mapping of the products  */}
      <BookList/>
    </div>
  )
}

export default App


