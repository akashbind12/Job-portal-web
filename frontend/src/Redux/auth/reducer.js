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
            localStorage.setItem("data", JSON.stringify(payload));
            localStorage.setItem("auth", true);
            console.log(payload)
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
        default:{
            return state
        }
    }
}