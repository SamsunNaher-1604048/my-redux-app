
import { useState } from 'react';
import './App.css';
import Counter from './component/Counter';
import Statistic from './component/Statistic';

const initalstate = [{
  id : 1,
  count:0
},{
  id : 2,
  count:0
}]

function App() {
  const[state,setState] = useState(initalstate);

  const Totalcount=()=>{
    return state.reduce((total,counter)=>
         total+counter.count,0
    )
  }

  const onIncrement = (id) =>{
   const update = state.map((c)=>{
      if(c.id === id){
        setState(c.count+1)
        //c.count =c.count+1;
        //return c.count;
      }
  })
  }

  const onDecrement=(id)=>{
     const update = state.map((c)=>{
      if(c.id === id){
        setState(c.count-1);
        //c.count =c.count-1;
        //return c.count;
      }
    })
  }

  return (
    <div>
      <p class = "mt-6 text-2xl text-center font-bold">Simple Calculator</p>
      {state.map((c)=>
          <div>
            {c.count}
            <Counter key={c.id} id={c.id} count={c.count} increment={onIncrement} decrement = {onDecrement}/>
          </div>
      )}
      <Statistic count={Totalcount()}/>
    </div>
  );
}

export default App;