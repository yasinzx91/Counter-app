import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

  const [range, setRange] = useState()
  console.log(range);

  const dispatch = useDispatch()

  const count = useSelector((state)=>state.counter.value)

  return (
    <div className='d-flex align-itesm-center justify-content-center w-100 mt-5 flex-column'>
    <h1 style={{fontSize:'90px',color:'black', textAlign:'center'}}>{count}</h1>
    <div className='mt-5'>
        <button className='btn btn-warning p-3 ms-3'
        onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
        <button className='btn btn-danger p-3 ms-3'
        onClick={()=>dispatch(reset(Number(range)))}>Reset</button>
        <button className='btn btn-success p-3 ms-3'
        onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
    </div>
    <div className='w-100 mt-5'>
      <input type="text" className='form-control' placeholder='Type here...' style={{borderColor:'blue'}}
      onChange={(e)=>setRange(e.target.value)} />
    </div>
    </div>
  )
}

export default Counter