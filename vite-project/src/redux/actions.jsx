import {types} from "./types"


export const InputAction=(num)=>{
    return {
        type: types.INPUT,
        payload: num,
    }
}

export const CheckAction=()=>{
    return {
        type: types.CHECK,
    }
}

export const DecrAction=(pass)=>{
    return {
        type: types.DECR,
        payload: pass,
    }
}