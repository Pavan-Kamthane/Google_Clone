export const initialState= {
    term: null,//this is where your search is here 
};

// whenever we want to change the data or search , when he click enter key
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state,
                term: action.term,
            };

        default:
            return state;
    }
};

export default reducer;
