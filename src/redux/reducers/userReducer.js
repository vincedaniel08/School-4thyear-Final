import * as actionTypes from "../types";

const initialState ={
    cart:[],
    products:[],
    users:[],
    findProduct:[],
    error: null,
    chatUser:[], 
    // cart:[{ProductId:"Agrishop"}],
    // products:[{ProductName:"...loading", ProductImg:"src"}],
    // users:[{id:"initial", ShopName:"....loading", ProfileImg:"...loading"}],
    // findProduct:[{ProductImg:"src"}],
  
}

 function userReducer(state=initialState, action)
{
    switch(action.type) 
    {
        case actionTypes.SET_PRODUCT: 
        return{
            ...state,
            products: action.payload,
          
        };
        case actionTypes.SET_CART: 
        return{
            ...state,
            cart: action.payload,
          
        };
        case actionTypes.SET_USER_INFO: 
        return{
            ...state,
            users: action.payload,
          
        };
        case actionTypes.SET_CHAT_USER: 
        return{
            ...state,
            chatUser: action.payload,
          
        };
        case actionTypes.FIND_PRODUCT:
            return {
              ...state,
      
              findProduct: state.products.find(
                (item) =>
                  item.id === action.payload
              ),
            
            
            };
       
        case actionTypes.USER_ERROR: 
        return{
            ...state,
            error: action.payload,
        };
        default:
            return{
                ...state,
            }
    }
}

export default userReducer;