import Book from './components/Book.jsx';
import Pen from './components/Pen.jsx';
import { books } from './data/books.js';
import { pens } from './data/pens.js';
import Fruit from './components/Fruit.jsx';
import fruit from './data/fruit.js';
import Event from './components/Event.jsx';

export default function App(){
  return (
    <>
    <h1>Hello world</h1>
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
    </div>
    </>
  );
}
