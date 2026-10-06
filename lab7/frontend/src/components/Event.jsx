import React from 'react'
const MyButton=()=>{
    const handleClick=()=>{
        alert("Button Cliccked");
    }
    return(
        <button style={{backgroundColor:"red", color:"black" , width:"200px" , height:"30px" , border:"2px solid black"}} onClick={handleClick}>Click Me</button>
    );
}
const Event = () => {
  return (
    <div>
      <MyButton/>
    </div>
  )
}

export default Event
