import React from 'react'

const Statistic = ({count}) => {
  return (
    <div class="flex justify-center mt-10">
      <div class = "box-border h-32 w-72 bg-cyan-100 text-center">
        <h1 class ="mt-10">Statistc App</h1>
        <div>{count}</div>
      </div>
    </div>
  )
}

export default Statistic
