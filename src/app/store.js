import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../reducers';

import nameReducer from '../featureRxDevTools/name/nameSlice';
import counterReducer from '../featureRxDevTools/counter/counterSlice';

const store = configureStore({
    reducer: {
        counterReducer,
        nameReducer,
        rootReducer,
    }
});

export default store;