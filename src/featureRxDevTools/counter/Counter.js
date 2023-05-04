import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, double, reset, addPayload } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();
    return (
        <div className=''>
            <div >
                <h1>Counter component</h1>
                <h2>count: {count}</h2>
            </div>
            <hr />
            <div className='buttons'>
                <button onClick={() => dispatch(increment())}>Add1 2count</button>
                <button onClick={() => dispatch(decrement())}>Subtract One</button>
            </div>
            <hr />
            <div className='buttons'>
                <button onClick={() => dispatch(addPayload(10))}>Add 10 2Count</button>
                <button onClick={() => dispatch(double())}>Double Count</button>
                <button onClick={() => dispatch(reset())}>Reset 2One</button>
            </div>
            <hr />
        </div>
    );
};

export default Counter;