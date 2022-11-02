import { actionTypes } from "./action";

export const initialState = {
    isLoading:false,
    isError:false,
    register: false,
    auth : localStorage.getItem("auth") || false,
    data: JSON.parse(localStorage.getItem("data")) || [],
}

export const authReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case actionTypes.AUTH_LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case actionTypes.AUTH_SUCCESS:{

            return{
                ...state,
                isLoading:false,
                isError:false,
                data: payload,
                auth : true,
            }
        }
        case actionTypes.AUTH_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        case actionTypes.AUTH_REGISTER:{
            return{
                ...state,
                isLoading:false,
                register: true,
            }
        }
        case actionTypes.AUTH_LOGOUT:{
            return{
                ...state,
                data: [],
                auth : false,
            }
        }
        default:{
            return state
        }
    }
}