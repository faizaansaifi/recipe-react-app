export const rootReducer = (state={}, action) => {
    switch (action.type) {
        case 'TEST':
            return {...state, test: action.data}
        case 'Dummy':
            return {state}
        case 'SEARCH':
            return {...state, search: action.data}
        default:
            return {state}
    }
}
