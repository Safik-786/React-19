import { actionKey } from "../actions/couterAction"


const initialData= {
    count: 0
}

const counterReducer= (state= initialData, action)=>{

    console.log("action= ", action)
    // if (action.type ===  actionKey.increament) {
    if (action.type ===  "INCREAMENT") {
        return {count: state.count+1}
    }
    else if (action.type === actionKey.decreament ) {
        return {count: state.count-1}
    }
    else if (action.type === actionKey.customIncreament) {
        return {count: state.count + action.payload}
    }
    else if (action.type === actionKey.customDecreament) {

        if (state.count >= action.payload) {
            return {count: state.count - action.payload}
        }
        else{
            return state
        }
    }
    else if (action.type === actionKey.reset) {
        return initialData
    }
    else{
        return state
    }
}

export default counterReducer