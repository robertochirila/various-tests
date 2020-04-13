import { combineReducers } from 'redux'
import itemReducer from './itemReducer'

console.log("Combine reducers")

export default combineReducers({
    items: itemReducer
})