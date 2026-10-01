export default function Book(props){
  const {picUrl,bname,price,quantity,rating} = props.book;
  return(
    <div className="book">
      <img src={picUrl} alt={bname} />
      <h2>welcome to the house of books</h2>
      <h2>{bname}</h2>
      <h3>price:{price}</h3>
      <h4 style={{color:"red"}}>quantity:{quantity} </h4>
      <h6>Rating : {rating}</h6>
      <button className="btn">Buy Now</button>
    </div>
  );
}