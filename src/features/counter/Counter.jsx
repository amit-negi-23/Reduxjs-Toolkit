import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount } from './counterSlice';

export default function Counter() {
    const count = useSelector((state) => (state.counter.count));
    const dispatch = useDispatch();

    return (
        <>
            <div >
                <h2>Counting </h2>
                <h4>Count: {count}</h4>
                <button onClick={() => dispatch(increaseCount())}>Increase count</button>&nbsp;&nbsp;
                <button onClick={() => dispatch(decreaseCount())}>Decrease count</button>
            </div>&nbsp;&nbsp;<hr/>
            
        </>
    )
}
