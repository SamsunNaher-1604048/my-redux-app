import React from 'react'

const Counter = ({id,count,increment,decrement}) => {
  console.log('hello');

  return (
    <div class="flex justify-center mt-10">
      <div class = "box-border h-32 w-72 bg-pink-100 text-center">
        <h1 >Counter App</h1>
        <div>{count}</div>
        <div class="flex justify-center space-x-4">
          <button onClick={()=>(increment(id))}>Inctenent</button>
          <button onClick={()=>(decrement(id))}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
