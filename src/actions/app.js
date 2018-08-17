export const increase = (num) => {
    return (dispatch) => {
        dispatch({
            type: 'INCREASE',
            payload: num
        });
        dispatch({
            type: 'DECREASE',
            payload: 1
        });
    }
}

export const decrease = (num) => {
    return {
        type: 'DECREASE',
        payload: num
    }
}

export const reset = (num) => {
    return {
        type: 'RESET',
        payload: num
    }
}

