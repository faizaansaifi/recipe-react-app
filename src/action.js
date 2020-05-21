export const test = () => {
    return {
        type: 'TEST',
        data: {
            saveIt: 'This is just a dummy string I am passing to it'
        }
    }
}

export const query = (data) => {
    return {
        type: 'SEARCH',
        data,
    }
}


