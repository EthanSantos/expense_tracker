export default (state, action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions] // add new transaction to array
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
                // filter out the deleted transaction
            }
        default: 
            return state;
    }
}