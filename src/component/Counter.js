import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div class="flex justify-center flex-col">
      <h1>Counter App</h1>
      <div>{count}</div>
      <div>
        <button>Inctenent</button>
        <button>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
