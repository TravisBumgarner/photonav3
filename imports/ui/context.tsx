import React from 'react'

// type State = {
//     user: string
// }

// const DEFAULT_STATE = {
//     user: 'Bob',
// }

// type SetUserAction = {
//     user: string
//     type: 'SET_USER'
// }

// type Action = SetUserAction

// const reducer = (state: State, action: Action) => {
//     switch (action.type) {
//         case 'SET_USER':
//             return { ...state, user: action.user }
//         default:
//             throw new Error()
//     }
// }

const Context = React.createContext<[string, (a: string) => void]>([
    '',
    () => null,
])

const ContextProvider = (props: any) => {
    const [name, setName] = React.useState('')
    return (
        <Context.Provider value={[name, setName]}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
