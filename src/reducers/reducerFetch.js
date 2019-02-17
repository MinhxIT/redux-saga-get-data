const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";
const fetchInitialState = false
const FetchReducer = (state = fetchInitialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return true
        case API_CALL_SUCCESS:
            return false
        case API_CALL_FAILURE: 
            return false
        default:
            return state
    }
}
export default FetchReducer;