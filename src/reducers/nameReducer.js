
export default function nameReducer (state = { fname: 'empty' }, action) {
    if (action.type === 'Firomsa') return { fname: `${action.payload} Dewano` };
    else if (action.type === "g") return { fname: ' -------------- ' };
    else return state;
}