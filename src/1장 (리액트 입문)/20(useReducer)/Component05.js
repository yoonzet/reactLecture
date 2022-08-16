import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

function Component05() {
    const [num, dispatch] = useReducer(reducer, 0);
    const increment = () => {
        dispatch({type: 'INCREMENT'});
    }
    const decrement = () => {
        dispatch({type: 'DECREMENT'});
    }

  return (
    <div>
        <hr />
        <p>Component05 [useReducer]</p>
        <h1>{num}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
  )
}

export default Component05;