import React from 'react'

const Book = (args) => {
  return (
    <div>
      <h1>{args.name} </h1>
      <h2>{args.price}</h2>
      <h3>{args.author}</h3>
      <img src={args.img} alt="img"/>
    </div>
  )
}

export default Book
