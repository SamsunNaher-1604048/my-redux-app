import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    const onIncrement = (count) =>{
      count=count+1;
      setCount(count);
    }

    const onDecrement=(count)=>{
      count=count-1;
       setCount(count);
    }

  return (
    <div class="flex justify-center mt-10">
      <div class = "box-border h-32 w-72 bg-pink-100 text-center">
        <h1 >Counter App</h1>
        <div>{count}</div>
        <div class="flex justify-center space-x-4">
          <button onClick={()=>(onIncrement(count))}>Inctenent</button>
          <button onClick={()=>(onDecrement(count))}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
