import axios from 'axios';

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

export const fetchIncrease = () => {
    return (dispatch) => {
        axios.get('https://sleepy-bastion-57253.herokuapp.com/')
        .then((response) => {
            console.log('Received', response.data.value);
            dispatch({
                type: 'FETCH_INCREASE',
                payload: response.data.value
            });
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

