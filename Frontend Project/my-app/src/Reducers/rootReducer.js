const initialState = {
    counter : 0
}

function rootReducer(state = initialState, action){

    switch(action.type){
        case 'increment' :
            return {counter : state.counter + 1};
        case 'decrement' :
            return {counter : state.counter - 1};
        default :
            return state;
    }

}

export default rootReducer;