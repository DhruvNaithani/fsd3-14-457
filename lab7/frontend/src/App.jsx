const b1={
  picUrl:"https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"React design pattern",
  price:1200,
  quantity:1,
  rating:5.0
};


function Book(){
  return(
    <div>
      <img src="https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg" alt="img" />
      <h2>welcome to the house of books</h2>
      <h3>you only need to pay 500 per month</h3>
      <h4>get to experience unlimeted amount of time </h4>
      <h6>Rating : 5.0</h6>
    </div>
  );
}

export default function App(){
  return (
    <>
    <Book/>
    <h1>Hello world</h1>
    <Book/>
    </>
  );
}
