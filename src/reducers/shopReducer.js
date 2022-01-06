import {
    //SET_SHOP_CATEGORIES
    SET_SHOP_PRODUCTS
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    productsSelected: [],
    products: []
}

export default function(state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: actions.payload
           }
    
        default: return state;
    }
}