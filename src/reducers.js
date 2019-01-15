import { CHANGE_SEARCH_FEILD } from './constants'

const intialState  = {
    searchFeild: ''
}

// REDUCER
export const searchRobots = (state = intialState, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FEILD: 
            return Object.assign({}, state, {searchFeild: action.payload});
        default:
            return state;
    }
}