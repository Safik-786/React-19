import { actionKey } from "../actions/couterAction"


const initialData = {
    count: 0
}

const counterReducer = (state = initialData, action) => {

    console.log("action= ", action)
<<<<<<< HEAD
    if (action.type === actionKey.increament) {
        return { count: state.count + 1 }
=======
    // if (action.type ===  actionKey.increament) {
    if (action.type ===  "INCREAMENT") {
        return {count: state.count+1}
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
    }
    else if (action.type === actionKey.decreament) {
        return { count: state.count - 1 }
    }
    else if (action.type === actionKey.customDecreament) {
        return { count: state.count - action.payload }
    }
    else if (action.type === actionKey.customIncreament) {
        return { count: state.count + action.payload }
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
<<<<<<< HEAD
        return { count: 0 }
=======
        return initialData
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
    }
    else {
        return state
    }
}

export default counterReducer