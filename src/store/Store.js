import React, {useReducer } from 'react'

export const CTX = React.createContext()

const intialState = {
  Gary: [
    {from: 'Richard', msg: 'Is your property available?'},
    {from: 'Jim', msg: 'Is it okay to arrive around 4PM?'},
  ],
  Michele: [
    {from: 'Jerry', msg: 'How does the 28th look?'},
    {from: 'Robert', msg: 'Thank you for reaching out!'},
  ]
}

function reducer(state, action) {
  const { user, from, msg } = action.payload;
  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        [user]: [
          ...state[user],
          {
            from: from,
            msg: msg
          }
        ]
      }
    default: 
      return state
  }
}

export default function Store(props) {

  const reducerHook = useReducer(reducer, intialState)

  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}