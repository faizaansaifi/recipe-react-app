export const rootReducer = (state={}, action) => {
    switch (action.type) {
        case 'TEST':
            return {...state, test: action.data}
        case 'Dummy':
            return {state}
        case 'SEARCH':
            return {...state, search: action.data}
        case 'SHOW_LOADER' :
            return {...state,  isLoading: true};
        case 'HIDE_LOADER' :
            return {...state,  isLoading: false};
        default:
            return {state}
    }
}
