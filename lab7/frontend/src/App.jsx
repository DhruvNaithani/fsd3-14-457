import Book from './components/Book.jsx';
import Pen from './components/Pen.jsx';
import { books } from './data/books.js';
import { pens } from './data/pens.js';
import Fruit from './components/Fruit.jsx';
import fruit from './data/fruit.js';
import Event from './components/Event.jsx';

const Mybutton=()=>{
  const handleSubmit=(count)=>{
      console.log("you clicked:",count);
      count++;
  }
  return(

    <button className='bg-black text-xl text-white rounded-b-md m-4 px-4 py-2  hover:bg-yellow-300 hover:text-amber-700' onClick={handleSubmit(count)}>submit {count}</button>
  );
}

export default function App(){
  return (
    <>
    <Mybutton/>
    {/* <h1>Hello world</h1>
    <div className="container">
    <Book book={books[0]}/>
    <Book book={books[1]}/>
    <Book book={books[0]}/>
    <Book book={books[1]}/>
    <Pen pen={pens[0]}/>
    <Pen pen={pens[1]}/>
    <Pen pen={pens[0]}/>
    <Pen pen={pens[1]}/>
    <Fruit fruit={fruit[0]}/>
    <Fruit fruit={fruit[1]}/>
    <Fruit fruit={fruit[2]}/>
    <Fruit fruit={fruit[3]}/>
    <Event/>
    </div> */}
    </>
  );
}
