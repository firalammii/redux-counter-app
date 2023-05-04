import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dewanos, g } from './nameSlice';

const NameForm = () => {
    const [firstName, setFirstName] = React.useState('');
    const fname = useSelector((state) => state.nameReducer.fname);
    const dispatch = useDispatch();
    function decideOnDispatch () {
        const fn = firstName[0].toUpperCase() + firstName.slice(1);
        switch (fn) {
            case 'Firomsa':
            case 'Edao':
            case 'Abdisa':
                dispatch(dewanos(fn));
                break;
            default: dispatch(g());
        }
    }
    return (
        <div>
            <h1>NameForm component</h1>
            <h2>Full Name: {fname}</h2>
            <hr />
            <div className='form'>
                <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <button onClick={decideOnDispatch}>get Full Name</button>
            </div>
            <hr />
        </div>
    );
};

export default NameForm;