// import React,{useState} from 'react'

// function PrviosCount() {
//     const initialCount =5
// const [count , setCount] = useState(initialCount);

// // const reset =() =>{
// //     setCount(initialCount)
// // }
// const increment = () =>{
//       setCount(count + 1);
// }

// const decrement = () =>{
//       setCount(count - 1);
// }
// // const IncrementFive = () =>{
// //     setCount(count + 5);
// // }
//   return (
//     <div>
//        <h1>Count : {count}</h1>
//        {/* <button onClick={reset}>Reset</button> */}
//        <button onClick={increment}>Increment</button>
//        <button onClick={decrement}>Decrement</button>
//        {/* <button onClick={IncrementFive}>+5Increment</button> */}


//     </div>
//   )
// }

// export default PrviosCount



import { React, useState, useEffect } from 'react'


function PrviosCount() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1)
  }
  const increment5 = () => {
    setCount(count + 5)
  }
  const decrement = () => {
    setCount(count - 1)
  }


 useEffect(() => {
  console.log("It will Run Every Re - Render",count);
 },[count])
 
  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={increment5}>Increment5</button>

      <button onClick={decrement}>Decrement</button>

    </>
  )
}

export default PrviosCount