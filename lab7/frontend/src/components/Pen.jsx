export default function Pen(props){
    const {picUrl,price,quantity,rating} = props.pen;
    return(
    <div className="book">
      <img src={picUrl} />
      <h3>price:{price}</h3>
      <h4 style={{color:"red"}}>quantity:{quantity} </h4>
      <h6>Rating : {rating}</h6>
      <button className="btn">Buy Now</button>
    </div>
  );
}