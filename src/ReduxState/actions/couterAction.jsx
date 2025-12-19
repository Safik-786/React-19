export const actionKey= {
    increament: "INCREAMENT",
    decreament: "DECREAMENT",
    customIncreament: "CUSTOM_INCREAMENT",
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
export const reset= ()=>{
    return {type: actionKey.reset}
}