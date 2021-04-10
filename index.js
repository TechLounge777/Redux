const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCcakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
store.subscribe(() => console.log('Updated state', store.gestState()))
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())




