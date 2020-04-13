

import { ADD_ITEMS } from './types';


export const addItem = itemData => dispatch => {
    console.log("ACTION")
    console.log(itemData)
    dispatch({
        type: ADD_ITEMS,
        payload: itemData.item
    })
}