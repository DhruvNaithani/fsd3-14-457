import React from 'react'

const product=[
    {title:"cabbage",id:1,isFruit:false},
    {title:"apple",id:2,isFruit:true},
    {title:"banana",id:3,isFruit:true},
    {title:"potato",id:4,isFruit:false}
];
const Listitem = product.map((item) => (
    <li key={item.id} style={{color: item.isFruit ? "red" : "green" }}>{item.title}</li>
));

console.log(Listitem);
function Fruit(props) {
    const {picurl,Price,quantity,fruitname}=props.fruit;
  return (
   <div className="book">
            <img 
                src={picurl} 
                alt={fruitname} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <h3>{fruitname}</h3>
            <p><strong>Price:</strong> ${Price}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <button className="btn">Buy Now</button>
            <li>{Listitem}</li>
        </div>
  )
}

export default Fruit
