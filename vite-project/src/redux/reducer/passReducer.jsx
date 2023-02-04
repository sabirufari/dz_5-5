import {types} from "../types"

const initial ={
    userPass:"",
    password:1111,
    passed: false,
}

export const passReducer=(state=initial, action)=>{
    switch(action.type){
        case types.INPUT:
            return{...state, userPass: action.payload }
        case types.CHECK:
            return{
                ...state,
                passed: state.password===action.payload
            }
        case types.DECR:
            return{...state, userPass: 
                state.userPass.toString().substring(0, state.userPass.toString().length-1)
            }
        default:
            return state
    }   
}