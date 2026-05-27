export const actionKey= {
    increament: "INCREAMENT",
    decreament: "DECREAMENT",
    customIncreament: "CUSTOM_INCREAMENT",
    customDecreament: "CUSTOM_DECREAMENT",
    reset: "RESET"
}

export const increament= ()=>{
    return {type: actionKey.increament}
}
export const decreament= ()=>{
    return {type: actionKey.decreament}
}
export const customIncreament= (value)=>{
    return {type: actionKey.customIncreament, payload: value}
}
export const customDecreament= (value)=>{
    return {type: actionKey.customDecreament, payload: value}
}
export const reset= ()=>{
    return {type: actionKey.reset}
}