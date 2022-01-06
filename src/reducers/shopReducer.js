import {
    //SET_SHOP_CATEGORIES
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    productsSelected: []
}

export default function(state = INITIAL_STATE, actions) {
    switch (actions.type) {
        //case SET_SHOP_CATEGORIES:
            //return {
                //...state,
                //categories: actions.payload
           //}
    
        default: return state;
    }
}