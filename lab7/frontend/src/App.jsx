const b1={
  picUrl:"https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"React design pattern",
  price:1200,
  quantity:1,
  rating:5.0
};
const b2={
  picUrl:"https://m.media-amazon.com/images/I/71jOhVzGjjL._SY385_.jpg",
  bname:"learn react",
  price:1500,
  quantity:1,
  rating:4.0
};


function Book(props){
  return(
    <div>
      <img src={props.book.picUrl} alt={props.book.bname} />
      <h2>welcome to the house of books</h2>
      <h3>price:{props.book.price}</h3>
      <h4>quantity:{props.book.quantity} </h4>
      <h6>Rating : {props.book.rating}</h6>
    </div>
  );
}

export default function App(){
  return (
    <>
    <Book book={b1}/>
    <h1>Hello world</h1>
    <Book book={b2}/>
    </>
  );
}
