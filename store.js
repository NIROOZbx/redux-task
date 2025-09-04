const { createStore ,combineReducers } = window.Redux;



function counterReducer(state=0,action) {

    switch(action.type){ 
    case 'INCREMENT':
        return state+1
    case 'DECREMENT':
        return state-1
    default:
        return state

    }

}


function colorChanger(state="blue",action) {
    switch(action.type){
        case 'CHANGE':
            return state="green"
        default:
            return state
    }


}


const rootreducer=combineReducers({
    count:counterReducer,
    color:colorChanger
})

const store=createStore(rootreducer)

window.store=store