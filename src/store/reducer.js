const initialState = {
    name: '',
    ticketNo: '',
    assignedTime: '',
    entries: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT':
            return Object.assign({}, state, { [action.name]: action.value });
        case 'ADD':
            return Object.assign({}, state, { entries: [...state.entries, action.entry], name: '', ticketNo: '', assignedTime: '' });
        default:
            return state;
    }
}

export default reducer;