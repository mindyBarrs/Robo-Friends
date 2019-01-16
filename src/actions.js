import { 
    CHANGE_SEARCH_FEILD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants'


export const setSearchFeild = (text) => ({
    type: CHANGE_SEARCH_FEILD,
    payload: text
})

export const requestRobots = () => (dispatch) => {   // <--- HIGHER ORDER FUNCTION()
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('http://jsonplaceholder.typicode.com/users')
        .then( response => response.json() )
        .then( data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch( error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}