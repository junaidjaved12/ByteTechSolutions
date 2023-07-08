import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IncreNum, DecreNum } from './actions';
import Button from '@mui/material/Button';
import Input from './Input';
const Counter = () => {
    const myState = useSelector((state) => state.ChangeNum);
  const Dispatch = useDispatch();
  return (
    <div >
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <h1>
        INCREMENT AND DECREMENT
      </h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button  variant="outlined" title='Decrement' onClick={()=> Dispatch(DecreNum())}> Increment</Button>
        {/* <input type="text" name='quantity' value={myState} /> */}
        <Input type="text" name='quantity' value={myState}/>
        <Button variant="outlined" title='Increment'  onClick={()=> Dispatch(IncreNum())}>Decrement</Button>
        </div>
      
      </div>
   
  )
}

export default Counter
