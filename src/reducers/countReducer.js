export default function countReducer (countState = { count: 1 }, action) {
    switch (action.type) {
        case 'counter/double':
            return { ...countState, count: 2 * countState.count };
        case 'counter/addOne2count':
            return { ...countState, count: 1 + countState.count };
        case 'counter/subtract1fromCount':
            return { ...countState, count: countState.count - 1 };
        case 'counter/addPayload':
            return { ...countState, count: action.payload + countState.count };
        case 'counter/reset2one':
            return { ...countState, count: 1 };
        default: return countState;
    }
}