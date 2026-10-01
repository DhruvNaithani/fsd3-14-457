const b1={
  picUrl:"https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"React design pattern",
  price:1200,
  quantity:1,
  rating:5.0,
};
const b2={
  picUrl:"https://m.media-amazon.com/images/I/71jOhVzGjjL._SY385_.jpg",
  bname:"learn react",
  price:1500,
  quantity:1,
  rating:4.0,
 
};


function Book(props){
  const {picUrl,bname,price,quantity,rating} = props.book;
  return(
    <div className="book">
      <img src={picUrl} alt={bname} />
      <h2>welcome to the house of books</h2>
      <h2>{bname}</h2>
      <h3>price:{price}</h3>
      <h4>quantity:{quantity} </h4>
      <h6>Rating : {rating}</h6>
      <button>Buy Now</button>
    </div>
  );
}

export default function App(){
  return (
    <>
    <h1>Hello world</h1>
    <div className="container">
    <Book book={b1}/>
    <Book book={b2}/>
    </div>
    </>
  );
}
