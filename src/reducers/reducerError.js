const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const errorInitialState = null
const ErrorReducer = (state = errorInitialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return state;
        case API_CALL_FAILURE:
            return action.error
        default:
            return state
    }
}
export default ErrorReducer;