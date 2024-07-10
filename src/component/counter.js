'use client';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '@/store/slices/counter/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
  
    </div>
  );
};

export default Counter;