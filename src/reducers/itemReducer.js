import { ADD_ITEMS } from '../actions/types'

const initialState = {
    item: {}
}

export default function (state = initialState, action) {

    console.log("REDUCER")
    //console.log(action)

    switch (action.type) {
        case ADD_ITEMS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}