import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { decrement, increment } from '../states/counter/counterSlice';
import { Box } from '@mui/material';

const Contact = () => {

  const count = useSelector((state : RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box  style={{
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <h1>Contact</h1>   
       <h2> {count} </h2>
      
         <button onClick={() => {dispatch((increment()))}}>Increment</button>
         <button onClick={() => {dispatch((decrement()))}}>Decrement</button>
      
      </Box>
  )
}

export default Contact