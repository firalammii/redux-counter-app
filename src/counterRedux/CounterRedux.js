import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterRedux = () => {
    const count = useSelector((state) => state.rootReducer.countReducer.count);
    const dispatch = useDispatch();

    return (
        <div>
            <div >
                <h1>CounterRedux component</h1>
                <h2>count: {count}</h2>
            </div>
            <hr />
            <div className='buttons'>
                <button onClick={() => dispatch({ type: 'counter/addOne2count' })}>Add1 2count</button>
                <button onClick={() => dispatch({ type: 'counter/subtract1fromCount' })}>Subtract One</button>
            </div>
            <hr />
            <div className='buttons'>
                <button onClick={() => dispatch({ type: 'counter/addPayload', payload: 10 })}>Add 10 2Count</button>
                <button onClick={() => dispatch({ type: 'counter/double' })}>Double Count</button>
                <button onClick={() => dispatch({ type: 'counter/reset2one' })}>Reset 2One</button>
            </div>
            <hr />
        </div>
    );
};

export default CounterRedux;