import * as actionTypes from "../types";

const initialState ={
    allusers:[],
    users:[],
    posts:[],
    comments:[],
    likes:[],
    error: null,

    // cart:[{ProductId:"Agrishop"}],
    // products:[{ProductName:"...loading", ProductImg:"src"}],
    // users:[{id:"initial", ShopName:"....loading", ProfileImg:"...loading"}],
    // findProduct:[{ProductImg:"src"}],
  
}

 function userReducer(state=initialState, action)
{
    switch(action.type) 
    {
        case actionTypes.SET_ALL_USER_INFO: 
        return{
            ...state,
            allusers: action.payload,
          
        };
        case actionTypes.SET_USER_INFO: 
        return{
            ...state,
            users: action.payload,
          
        };
        case actionTypes.SET_POST: 
        return{
            ...state,
            posts: action.payload,
          
        };
        case actionTypes.SET_COMMENT: 
        return{
            ...state,
            comments: action.payload,
          
        };
        case actionTypes.SET_LIKE: 
        return{
            ...state,
            likes: action.payload,
          
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