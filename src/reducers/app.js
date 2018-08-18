
const reducer = (state , action) => {
    switch (action.type) {
        case 'INCREASE': 
           return { ...state, counter: state.counter + action.payload};
        case 'DECREASE': 
           return { ...state, counter: state.counter - action.payload};
        case 'FETCH_INCREASE': 
           return { ...state, counter: state.counter + action.payload};
        case 'RESET':
           return { ...state, counter: action.payload};
        default: return state;
    }
}

export default reducer;