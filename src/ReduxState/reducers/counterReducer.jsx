import { actionKey } from "../actions/couterAction"


const initialData= {
    count: 0
}

const counterReducer= (state= initialData, action)=>{

    console.log("action= ", action)
    if (action.type === actionKey.increament) {
        return {count: state.count+1}
    }
    else if (action.type === actionKey.decreament ) {
        return {count: state.count-1}
    }
    else if (action.type === actionKey.customIncreament) {
        return {count: state.count + action.payload}
    }
    else if (action.type === actionKey.reset) {
        return {count: 0}
    }
    else{
        return state
    }
}

export default counterReducer