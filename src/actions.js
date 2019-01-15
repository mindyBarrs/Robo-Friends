import { CHANGE_SEARCH_FEILD } from './constants'


export const setSearchFeild = (text) => ({
    type: CHANGE_SEARCH_FEILD,
    payload: text
})