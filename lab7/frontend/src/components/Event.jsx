import React from 'react'
const MyButton=()=>{
    const handleClick=()=>{
        alert("Button Cliccked");
    }
    return(
        <button className= 'px-2 py-4 bg-black hover:bg-gray-50 hover:text-black text-white' onClick={handleClick}>Click Me</button>
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
